import mongoose from 'mongoose';
import { constants } from './constants';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(constants.mongo as string);
    console.log(`connected at : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
