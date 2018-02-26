import mailgun from 'mailgun-js';

export const client = mailgun({
  apiKey: process.env.MAILGUN_APIKEY,
  domain: process.env.MAILGUN_DOMAIN,
});
