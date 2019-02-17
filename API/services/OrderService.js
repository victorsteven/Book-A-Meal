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

  // addMeal(meal) {
  //   const mealLength = dummyData.meals.length;
  //   const lastId = dummyData.meals[mealLength - 1].id;
  //   const newId = lastId + 1;
  //   meal.id = newId;
  //   meal.menuId = 1;
  //   dummyData.meals.push(meal);
  //   return meal;
  // },

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
