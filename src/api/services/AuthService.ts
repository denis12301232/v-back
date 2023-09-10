import type { AuthTypes } from '@/types/index.js';
import { v4 } from 'uuid';
import { hash, compare } from 'bcrypt';
import Models from '@/models/mongo/index.js';
import { UserDto } from '@/dto/index.js';
import { MailService, TokenService } from '@/api/services/index.js';
import ApiError from '@/exceptions/ApiError.js';

export default class AuthService {
  static async registration(user: AuthTypes.Registration['Body']) {
    const { login, name, email, password } = user;
    const candidate = await Models.User.findOne({
      $or: [{ email: email.toLowerCase() }, { login: login.toLowerCase() }],
    }).lean();

    if (candidate) {
      throw ApiError.BadRequest(400, `Already taken`, [candidate.email === email ? 'email' : 'login']);
    }

    const hashPassword = await hash(password, 5);
    const activationLink = v4();
    const newUser = await Models.User.create({
      login: login.toLowerCase(),
      email: email.toLowerCase(),
      password: hashPassword,
      activationLink,
      name,
    });
    MailService.sendActivationMail(email, `${process.env.CLIENT_DOMAIN}/api/auth/activate/${activationLink}`).catch(
      (e: Error) => console.log(e.message)
    );

    const userDto = new UserDto(newUser);
    const tokens = TokenService.generateTokens({ ...userDto });

    await TokenService.saveToken(userDto._id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  static async login(user: AuthTypes.Login['Body']) {
    const { loginOrEmail, password } = user;
    const userFromDb = await Models.User.findOne({
      $or: [{ email: loginOrEmail.toLowerCase() }, { login: loginOrEmail.toLowerCase() }],
    }).lean();

    if (!userFromDb) {
      throw ApiError.BadRequest(400, `Incorrect login or email`, ['login', 'email']);
    }

    const isPasswordsEqual = await compare(password, userFromDb.password);

    if (!isPasswordsEqual) {
      throw ApiError.BadRequest(400, `Incorrect password`, ['password']);
    }

    const userDto = new UserDto(userFromDb);
    const tokens = TokenService.generateTokens({ ...userDto });

    await TokenService.saveToken(userDto._id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  static async logout(refreshToken: string | undefined) {
    if (!refreshToken) {
      throw ApiError.Unauthorized();
    }
    const token = await TokenService.removeToken(refreshToken);
    return token;
  }

  static async refresh(refreshToken: string | undefined) {
    if (!refreshToken) {
      throw ApiError.Unauthorized();
    }

    const userData = TokenService.validateRefreshToken<UserDto>(refreshToken);
    const tokenFromDb = await TokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      throw ApiError.Unauthorized();
    }

    const user = await Models.User.findById(userData._id);

    if (!user) {
      throw ApiError.BadRequest(400, `User not found`);
    }

    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });

    await TokenService.saveToken(userDto._id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  static async activate(activationLink: string) {
    const updated = await Models.User.updateOne({ activationLink, isActivated: false }, { isActivated: true }).lean();
    return updated;
  }

  static async restorePassword(email: string) {
    const user = await Models.User.findOne({ email }).lean();

    if (!user) {
      throw ApiError.BadRequest(400, `Incorrect email`, ['email']);
    }

    const link = v4();
    const restoreData = await Models.Restore.findOne({ user: user._id });
    const dateNow = new Date();

    if (restoreData) {
      restoreData.restoreLink = link;
      restoreData.createdAt = dateNow;
      await restoreData.save();
    } else {
      await Models.Restore.create({ user: user._id, restoreLink: link, createdAt: dateNow });
    }

    await MailService.sendRestoreMail(email, `${process.env.CLIENT_DOMAIN}/restore?link=${link}`).catch((e) => {
      throw ApiError.BadRequest(400, `Message sending error`, [e]);
    });

    return { message: `Link was sent to email` };
  }

  static async setNewPassword({ password, link }: AuthTypes.SetNewPassword['Body']) {
    const LINK_LIFETIME = 6048e5;
    const restoreData = await Models.Restore.findOne({ restoreLink: link });
    const date = new Date();

    if (!restoreData || +date - +restoreData.createdAt > LINK_LIFETIME) {
      throw ApiError.BadRequest(400, 'Link expired');
    }

    const [hashPassword, userData] = await Promise.all([
      hash(password, 5),
      Models.User.findById(restoreData.user).lean(),
    ]);

    if (!userData) {
      throw ApiError.BadRequest();
    }

    const [result] = await Promise.all([
      Models.User.updateOne({ _id: restoreData.user }, { password: hashPassword }).lean(),
      Models.Restore.deleteOne({ _id: restoreData._id }),
    ]);

    return result;
  }
}
