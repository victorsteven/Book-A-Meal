import express from 'express';
import bodyParser from 'body-parser';

// routes
import mealRoutes from './routes/mealsRoute';
import menuRoutes from './routes/menusRoute';



const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// app.get('/', (req, res) => res.send('The API is working'));

// handle
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
