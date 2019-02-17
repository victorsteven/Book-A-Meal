import dummyData from '../utils/dummyOrders';
import Order from '../models/Order';

const OrderService = {
  fetchAllOrders() {
    const validOrders = dummyData.orders.map((order) => {
      const newOrder = new Order();
      newOrder.id = order.id;
      newOrder.name = order.name;
      newOrder.mealId = order.mealId;
      newOrder.menuId = order.menuId;

      return newOrder;
    });
    return validOrders;
  },

  selectOrder(order) {
    const orderLength = dummyData.orders.length;
    const lastId = dummyData.orders[orderLength - 1].id;
    const newId = lastId + 1;
    order.id = newId;
    order.menuId = 1;
    dummyData.orders.push(order);
    return order;
  },

  modifyOrder(id, modifiedOrder) {
    const theOrder = dummyData.orders.find(oneOrder => oneOrder.id === Number(id));
    if (theOrder) {
      theOrder.name = modifiedOrder.name;
      theOrder.mealId = modifiedOrder.mealId;
    }
    return theOrder;
  },
};

export default OrderService;
