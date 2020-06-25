export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_POST,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
};