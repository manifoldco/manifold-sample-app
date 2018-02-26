import { User } from '../config/database';

User.sync().then(() => {
  return User.create({
    email: 'sample-app@manifold.co',
    password: 'verysecurepassword',
  });
});
