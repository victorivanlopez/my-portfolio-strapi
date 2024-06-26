module.exports = {
  async sendEmail(ctx, next) {

    const { name, tel, email, subject, message } = ctx.request.body;

    try {
      await strapi.plugins['email'].services.email.send({
        to: 'vlopez@victorivanlopez.com',
        subject,
        html:
          ` <html>
              <h2>Mensaje desde formulario</h2>
              <p><strong>Nombre: </strong>${name}</p>
              ${(tel.length > 0) ? `<p><strong>Teléfono: </strong>${tel}</p>` : ''}
              <p><strong>Email: </strong>${email}</p>
              <p><strong>Mensaje: </strong>${message}</p>
            </html>
          `,
      });

      ctx.send({ message: 'Correo enviado con éxito.' });
    } catch (error) {
      ctx.send({ error: 'No se pudo enviar el correo.' }, 500);
    }
  },
};