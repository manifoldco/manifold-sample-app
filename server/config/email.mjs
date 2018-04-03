import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import mailgun from 'mailgun-js';

const ENV = dotenv.config();
dotenvExpand(ENV);

export const client = mailgun({
  apiKey: ENV.MANIFOLD_MAILGUN_APIKEY,
  domain: ENV.MANIFOLD_MAILGUN_DOMAIN,
});
