var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var menu = [
    { id: 1, name: 'pepperoni', price: 12 },
    { id: 2, name: 'hawaiian', price: 14 },
    { id: 3, name: 'meat lovers', price: 16 },
    { id: 4, name: 'veggie', price: 12 }
];
var cashInRegister = 100;
var nextOrder = 1;
var nextPizzaId = menu.length + 1;
var orderQueue = [];
function getPizzaDetail(identifier) {
    var pizza = menu.find(function (pizza) { return pizza.id === identifier || pizza.name === identifier; });
    if (!pizza) {
        console.log("Pizza with id or name ".concat(identifier, " not found"));
        return; // undefined
    }
    return pizza;
}
function addNewPizza(pizzaObj) {
    var newPizza = __assign({ id: nextPizzaId++ }, pizzaObj);
    menu.push(newPizza);
    return newPizza;
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizza) { return pizza.name === pizzaName; });
    if (!selectedPizza) {
        console.log("Sorry, we don't have ".concat(pizzaName));
        return; // undefined
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { id: nextOrder++, pizza: selectedPizza, status: 'ordered' };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.log("Order ".concat(orderId, " not found"));
        return; // undefined
    }
    // TODO: Move addition to cashInRegister to a function and call it here
    order.status = 'completed';
    return order;
}
//TODO: Add a function to allow the order to be marked as 'in progress'
// add new pizzas
addNewPizza({ name: 'cheese', price: 10 });
addNewPizza({ name: 'chicken bacon ranch', price: 12 });
placeOrder('pepperoni');
completeOrder(1);
console.log("menu", menu);
console.log("cashInRegister", cashInRegister);
console.log("orderQueue", orderQueue);
