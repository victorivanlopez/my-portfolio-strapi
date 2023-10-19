module.exports = {
  async sendEmail(ctx, next) {

    const { name, tel, email, subject, message } = ctx.request.body;

    try {
      await strapi.plugins['email'].services.email.send({
        to: 'victor_ivan22@hotmail.com',
        subject,
        text: `
          Nombre: ${name}\nTeléfono: ${tel}\nEmail: ${email}\nMensaje: ${message}
        `,
      });

      ctx.send({ message: 'Correo enviado con éxito' });
    } catch (error) {
      ctx.send({ error: 'No se pudo enviar el correo' }, 500);
    }
  },
};