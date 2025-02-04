type Pizza = {
  id: number;
  name: string;
  price: number;
}

type Order = {  
  id: number;
  pizza: Pizza;
  status: 'ordered' | 'in progress' | 'completed';
}

const menu: Pizza[] = [
  {id: 1, name: 'pepperoni', price: 12},
  {id: 2, name: 'hawaiian', price: 14},
  {id: 3, name: 'meat lovers', price: 16},
  {id: 4, name: 'veggie', price: 12}
]

let cashInRegister: number = 100;
let nextOrder: number = 1;
let nextPizzaId: number = menu.length + 1;
const orderQueue: Order[] = [];

function getPizzaDetail(identifier: number | string): Pizza | undefined {
  const pizza = menu.find(pizza => pizza.id === identifier || pizza.name === identifier);
  if (!pizza) {
    console.log(`Pizza with id or name ${identifier} not found`);
    return; // undefined
  }
  return pizza;
} 

function addNewPizza(pizzaObj: Omit<Pizza, 'id'>): Pizza {
  const newPizza: Pizza = {id: nextPizzaId++, ...pizzaObj};
  menu.push(newPizza);
  return newPizza;
}

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
  if (!selectedPizza) {
    console.log( `Sorry, we don't have ${pizzaName}`);
    return; // undefined
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = { id: nextOrder++, pizza: selectedPizza, status: 'ordered' };
  orderQueue.push(newOrder);
  return newOrder; 
}

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find(order => order.id === orderId);
  if (!order) {
    console.log(`Order ${orderId} not found`);
    return; // undefined
  }
  // TODO: Move addition to cashInRegister to a function and call it here
  order.status = 'completed';
  return order;
}

//TODO: Add a function to allow the order to be marked as 'in progress'

// add new pizzas
addNewPizza({name: 'cheese', price: 10});
addNewPizza({name: 'chicken bacon ranch', price: 12});

placeOrder('pepperoni');
completeOrder(1);

console.log("menu", menu);
console.log("cashInRegister", cashInRegister);
console.log("orderQueue", orderQueue);