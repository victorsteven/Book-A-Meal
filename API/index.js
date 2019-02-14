import express from 'express';
import mealsRoute from './routes/mealsRoute';

const app = express();

app.use('/api/vi/meals', mealsRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('listening to port 3000');
});
