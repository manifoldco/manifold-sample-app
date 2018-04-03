import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import bcrypt from 'bcrypt';
import Sequelize from 'sequelize';

const ENV = dotenv.config();
dotenvExpand(ENV);

/* Config */

const sequelize = new Sequelize({
  database: ENV.MANIFOLD_PGDATABASE,
  dialect: 'postgres',
  host: ENV.MANIFOLD_PGHOST,
  password: ENV.MANIFOLD_PGPASSWORD,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: false,
  port: ENV.MANIFOLD_PGPORT,
  username: ENV.MANIFOLD_PGUSER,
});

/* Models */

export const User = sequelize.define(
  'user',
  {
    email: {
      allowNull: false,
      type: Sequelize.STRING(100),
      unique: true,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  },
  {
    instanceMethods: {
      generateHash: function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
      },
      validatePassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      },
    },
  }
);

User.beforeCreate((user, options) =>
  bcrypt
    .hash(user.password, 10)
    .then(hash => {
      user.password = hash;
    })
    .catch(err => {
      throw new Error();
    })
);
