"user strict";
let shoppingCart = [];
let itemList = [
  {
    name: "camera",
    price: 500
  },
  {
    name: "laptop",
    price: 1000
  },
  {
    name: "book",
    price: 20
  },
  {
    name: "headphones",
    price: 50
  },
  {
    name: "TV",
    price: 699
  }
];
function addItem(itemName, itemPrice) {
  shoppingCart = [...shoppingCart, { name: itemName, price: itemPrice }];
};
function removeItem(itemName) {
  let index = shoppingCart.findIndex(element => element.name === itemName);
  shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index + 1)];
};
function editItem(oldItem, newItem, newPrice) {
  let index = shoppingCart.findIndex(element => element.name === oldItem);
  shoppingCart = [...shoppingCart.slice(0, index), { name: newItem, price: shoppingCart[index].price }, ...shoppingCart.slice(index + 1)];
};
function printTotal() {
  let total = 0;
  for (let { price } of shoppingCart) {
    total += price;
  } console.log(`Your total with tax is ${total * 1.06}`);
};


//below code tests the functions
// addItem("tacos", 3);
// addItem("burger", 13);
// addItem("water", 5);
// addItem("sub", 4);
// console.log(shoppingCart);
// removeItem("water");
// console.log(shoppingCart);
// addItem("water", 5);
// editItem("water", "soda");
// console.log(shoppingCart);
// printTotal();

