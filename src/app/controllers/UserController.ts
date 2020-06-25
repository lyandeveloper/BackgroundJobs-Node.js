import { Request, Response } from 'express';
import Mail from '../lib/Mailer';

class User {
  async store(req: Request, res: Response) : Promise<Response>{
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password
    }

    Mail.from = 'Queue Test <queue@queuetest.com.br>';
    Mail.to = `${name} <${email}>`;
    Mail.subject = 'Cadastro de usuário';
    Mail.message = `Olá, ${name}, bem-vindo ao sistema de filas ;)`;
    Mail.sendMail();

    return res.json(user);
  }

}

export default new User();