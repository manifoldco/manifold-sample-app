import { client } from '../config/email';

export const sendResetEmail = email =>
  client.sendEmail({
    to: email,
    from: 'support@myapp.com',
    subject: 'Reset Password for Sample App',
    message:
      'Test sent successfully! There isn’t actually a reset link because this is only a demo.',
  });
