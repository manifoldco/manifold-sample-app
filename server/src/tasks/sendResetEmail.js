import { client } from '../config/email';

export const sendResetEmail = email =>
  client.messages().send(
    {
      to: email,
      from: 'support@myapp.com',
      subject: 'Reset Password for Sample App',
      text:
        'Test sent successfully! There isn’t actually a reset link because this is only a demo.',
    },
    (err, body) => {
      if (err) return console.log(err);
      return console.log(body);
    }
  );
