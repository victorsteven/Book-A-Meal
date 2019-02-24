import express from 'express';
import bodyParser from 'body-parser';

// routes
import mealRoutes from './routes/mealsRoute';
import menuRoutes from './routes/menusRoute';
import orderRoutes from './routes/ordersRoute';


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/orders', orderRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

export default app;
