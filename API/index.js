import express from 'express';
import bodyParser from 'body-parser';

import mealsRoute from './routes/mealsRoute';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/meals', mealsRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('listening to port 3000');
});
