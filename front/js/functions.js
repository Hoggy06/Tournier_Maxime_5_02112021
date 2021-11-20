import { cart } from "./cart.js";



export function price() {
  let total = 0;
  cart.forEach((obj) => {
    total += obj.price * obj.quantity;
  });
  return total;
}

export function totalQuantity() {
  let totalQuantity = 0;
  cart.forEach((obj) => {
    totalQuantity += obj.quantity;
  });
  return totalQuantity;
}



