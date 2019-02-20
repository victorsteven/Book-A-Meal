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

  modifyOrder(req, res) {
    const modifyOrder = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid ID. ID must be a number',
      });
    }
    const modifiedMeal = OrderService.modifyOrder(id, modifyOrder);
    return res.json({
      status: 'success',
      data: modifiedMeal,
    }).status(201);
  },
};

export default OrderController;
