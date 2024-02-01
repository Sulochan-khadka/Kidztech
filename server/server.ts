import { app } from './app';
require('dotenv').config();
import connectDB from './utils/db';
const port = process.env.PORT || 7070;

app.listen(port, () => {
  console.log(`port is listening at ${port}`);
  connectDB();
});
