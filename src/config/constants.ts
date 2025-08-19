import { config } from 'dotenv';

config();

const _constants = {
  port: process.env.PORT,
  mongo: process.env.MONGO_URL,
  env: process.env.NODE_ENV,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
};

export const constants = Object.freeze(_constants);
