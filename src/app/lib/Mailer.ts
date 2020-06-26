import nodemailer from 'nodemailer';
import mailConfig from '../../config/mailConfig';  


export default nodemailer.createTransport(mailConfig)