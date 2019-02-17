import OrderService from '../services/OrderService';

const OrderController = {
  fetchAllOrders(req, res) {
    const allOrders = OrderService.fetchAllOrders();
    return res.json({
      status: 'success',
      data: allOrders,
    }).status(200);
  },
  selectOrder(req, res) {
    const newOrder = req.body;
    const createdOrder = OrderService.selectOrder(newOrder);
    return res.json({
      status: 'success',
      data: createdOrder,
    }).status(201);
  },

  // updateAMeal(req, res) {
  //   const updateMeal = req.body;
  //   const { id } = req.params;
  //   if (!Number(id)) {
  //     return res.status(400).json({
  //       status: 'error',
  //       message: 'Invalid ID. ID must be a number',
  //     });
  //   }
  //   const updatedMeal = OrderService.updateMeal(id, updateMeal);
  //   return res.json({
  //     status: 'success',
  //     data: updatedMeal,
  //   }).status(201);
  // },

  // getSingleMeal(req, res) {
  //   const { id } = req.params;
  //   const foundMeal = OrderService.getAMeal(id);
  //   console.log('the found meal: ', foundMeal);
  //   return res.json({
  //     status: 'success',
  //     data: foundMeal,
  //   }).status(200);
  // },
};

export default OrderController;
