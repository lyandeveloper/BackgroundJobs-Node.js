import Mail from '../lib/Mailer';  

export default {
  key: 'RegisterMail',
  async handle ({ data } : { data: any })  {
    const { user } = data;

    Mail.from = 'Queue Test <queue@queuetest.com.br>';
    Mail.to = `${user.name} <${user.email}>`;
    Mail.subject = 'Cadastro de usuário';
    Mail.message = `Olá, ${name}, bem-vindo ao sistema de filas ;)`;
    await Mail.sendMail();
  }
}