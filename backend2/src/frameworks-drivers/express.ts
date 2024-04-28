const express = require('express');
import userRoute from '../interfaces/routes/user-route';

const app = express();

app.use(express.json());
app.use('/api/v1/users', userRoute);

export default app;
