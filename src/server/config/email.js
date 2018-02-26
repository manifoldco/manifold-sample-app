import ses from 'node-ses';

// SESKEY: AWS Access Key ID for SES-capable IAM user
// SESSECRET: AWS Secret Access Key for SES-capable IAM user

export const client = ses.createClient({
  key: process.env.SESKEY,
  secret: process.env.SESSECRET,
});
