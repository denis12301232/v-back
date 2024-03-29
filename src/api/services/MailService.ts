import { createTransport } from 'nodemailer';

export default class MailService {
  private static readonly GOOGLE_USER = process.env.GOOGLE_USER;
  private static readonly GOOGLE_APP_PASS = process.env.GOOGLE_APP_PASS;
  private static readonly transport = createTransport({
    service: 'gmail',
    auth: { user: this.GOOGLE_USER, pass: this.GOOGLE_APP_PASS },
  });

  public static send(to: string, subject: string, html: string) {
    return this.transport.sendMail({ from: this.GOOGLE_USER, to, subject, html });
  }

  private static sendMail(to: string, subject: string, html: string) {
    return this.transport.sendMail({ from: this.GOOGLE_USER, to, subject, html });
  }

  public static sendActivationMail(to: string, link: string) {
    const subject = `Активация аккаунта на сайте ${process.env.CLIENT_DOMAIN}`;
    const html = `<div><h1>Для активации перейдите по ссылке:</h1><a href="${link}">${link}</a></div>`;
    return this.sendMail(to, subject, html);
  }

  public static sendRestoreMail(to: string, link: string) {
    const subject = `Восстановление пароля на сайте ${process.env.CLIENT_DOMAIN}`;
    const html = `<div><h1>Для восстановления перейдите по ссылке:</h1><a href="${link}">${link}</a></div>`;
    return this.sendMail(to, subject, html);
  }

  public static sendInviteToMeetMail(to: string, link: string) {
    const subject = 'New meet invite';
    const html = `<div><h1>Нажмите на <a href="${link}">ссылку</a> для присоединения ко встрече</h1></div>`;
    return this.sendMail(to, subject, html);
  }
}
