import { app } from './src/frameworks-drivers/express';
import { config } from './src/frameworks-drivers/config';
import { connect, connection } from 'mongoose';

connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


console.log(config.database.host); // Accessing database host from configuration

const PORT = process.env.PORT || 3000;
app(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
