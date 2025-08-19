import connectDB from './config/db';
import app from './app';
import { constants } from './config/constants';

const port = constants.port || 8080;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`app running at ${port}`);
  });
});
