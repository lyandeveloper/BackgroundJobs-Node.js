import Mailer from '../lib/Mailer';  

export default {
  key: 'RegisterMail',
  async handle ({ data } : { data: any }) {
    try {
      const { user } = data;
      await  Mailer.sendMail({
        from : 'Queue Test <queue@queuetest.com.br>',
        to : `${user.name} <${user.email}>`,
        subject : 'Cadastro de usuário',
        html : `Olá, ${user.name}, bem-vindo ao sistema de filas ;)`
      });
    } catch(e) {
      console.log(e);
    }
  },
    
};