import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

// routes
import mealRoutes from './routes/mealRoutes';
import menuRoutes from './routes/menuRoute';
// import orderRoutes from './routes/ordersRoute';


const app = express();

app.use(logger('dev'));

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/v1', mealRoutes);
app.use('/api/v1/menu', menuRoutes);
// app.use('/api/v1/orders', orderRoutes);


app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;


// const http = require('http');
// const app = require('../app');
// const port = parseInt(process.env.PORT, 10) || 4000;
// app.set('port', port);
// const server = http.createServer(app);
// server.listen(port);
