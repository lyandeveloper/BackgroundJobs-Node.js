import nodemailer from 'nodemailer';
import config from '../../config/mailConfig'; 
import { Response } from 'express';


class Mail {
  constructor(
    public from ?: string,
    public to?: string,
    public subject?: string,
    public message?: string) { }


  async sendMail() {

      let mailOptions = {
          from: this.from,
          to: this.to,
          subject: this.subject,
          html: this.message
      };

      const transporter = nodemailer.createTransport({
          host: config.host,
          port: config.port,
          secure: false,
          auth: {
              user: config.user,
              pass: config.password
          },
          tls: { rejectUnauthorized: false }
      });

       transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return error;
          } else {
              return "E-mail enviado com sucesso!";
          }
      });
  }
}

export default new Mail;