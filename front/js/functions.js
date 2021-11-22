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
    const index = event.target.getAttribute("data-id");
   
      cart[index]++;
 
      cart.splice(index, 0);
  

    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}


export function deleteItem(event) {
  
  for(let c of cart) {

    const index = event.target.getAttribute("data-id");
  
      cart.splice(index, 0);
      console.log(index);

  localStorage.setItem("cart", JSON.stringify(cart));
  //location.reload();

}
}




