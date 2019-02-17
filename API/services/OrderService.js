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

  // updateMeal(id, updatedMeal) {
  //   const theMeal = dummyData.meals.find(oneMeal => oneMeal.id === Number(id));
  //   if (theMeal) {
  //     theMeal.name = updatedMeal.name;
  //     theMeal.price = updatedMeal.price;
  //     theMeal.size = updatedMeal.size;
  //   }
  //   return theMeal;
  // },

  // getAMeal(id) {
  //   const meal = dummyData.meals.find(oneMeal => oneMeal.id === Number(id));
  //   return meal || {};
  // },
};

export default OrderService;
