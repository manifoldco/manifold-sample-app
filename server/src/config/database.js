import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import Sequelize from 'sequelize';

dotenv.config();

/* Config */

const sequelize = new Sequelize({
  database: process.env.PGDATABASE,
  dialect: 'postgres',
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  port: process.env.PGPORT,
  username: process.env.PGUSER,
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
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      },
      validatePassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      },
    },
  }
);
