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

 
  export function addProduct(event) {
    const index = event.target.getAttribute("data-index");
   
      cart[index]++;
 
      cart.splice(index, 0);
  

    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}


export function deleteItem(event) {
  const index = event.target.getAttribute("data-index");
  if (cart[index] > 1) {
      cart[index]--;
  } else {
      cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}




