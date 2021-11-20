import { price, totalQuantity } from "./functions.js";

export const cart = JSON.parse(localStorage.getItem("cart")); // On récupère le localStorage utilisé dans la page produit
console.log(cart);

for (let c of cart) {
  // On parcours le tableau et on affiche les données

  const cartContent = `
  <article class="cart__item" data-id="${c.id}">
  <div class="cart__item__img">
    <img src="${c.imageUrl}" alt="${c.altTxt}">
  </div>
  <div class="cart__item__content">
    <div class="cart__item__content__titlePrice">
      <h2>${c.name}</h2>
      <h3>${c.color}</h3>
      <p>${c.price}</p>
    </div>
    <div class="cart__item__content__settings">
      <div class="cart__item__content__settings__quantity">
        <p>Qté : </p>
        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${c.quantity}">
      </div>
      <div class="cart__item__content__settings__delete">
        <p class="deleteItem">Supprimer</p>
      </div>
    </div>
  </div>
</article>`;

  document.getElementById("cart__items").innerHTML += cartContent;

}

const deleteItem = document.querySelector(".deleteItem");
//supprimer un produit
deleteItem.addEventListener("click", function(e) {
  const index = e.target.getAttribute("data-index");
        if (cart[index] > 1) {
            cart[index]--;
        } else {
            cart.splice(index, 1);
        }

  localStorage.removeItem("cart");
  location.reload();
});

// Affiche la quantité total des articles dans le panier
document.getElementById("totalQuantity").innerHTML += totalQuantity();
// Affiche le prix total de la commande
document.getElementById("totalPrice").innerHTML += price();



