// import './config/config';
import config from 'dotenv';

import express from 'express';
import logger from 'morgan';
import { json, urlencoded } from 'body-parser';

config.config();

const app = express();
const port = process.env.PORT || 6000;

app.use(logger('dev'));

app.use(json());
app.use(urlencoded({ extended: false }));


require('./routes/index')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
