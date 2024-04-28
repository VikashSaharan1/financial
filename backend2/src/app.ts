import  app  from './frameworks-drivers/express';
import  config  from './frameworks-drivers/config';
import { connect, connection, ConnectOptions  } from 'mongoose';

connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as ConnectOptions);

const db = connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


console.log(config.database.host); // Accessing database host from configuration

const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
