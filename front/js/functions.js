// On importe la variable cart qui contient le localStorage
import { cart } from "./cart.js";

// Fonction qui retourne le prix totale de la commande
export function totalPrice() {

  // On initialise la variable
  let price = 0;

  // On boucle sur la variable mit dans le localStorage
  for(let p of cart) {
    // Petite opération arithmétique de base 
    price += p.price * p.quantity;
  }

// On cible l'id totalPrice et on retourne la valeur
const totalPrice = document.getElementById('totalPrice');
totalPrice.textContent = price;

return price;
}

// Fonction qui retourne la quantité totale de la commande
export function totalQuantity() {

  // On initialise la variable
  let totalItems = 0;

  // On boucle sur la variable mit dans le localStorage
  for (let t in cart) {
    // On utilise Number pour etre sur que l'élément soit un nombre
    // Puis on incrémente
    const newQuantity = Number(cart[t].quantity);
    totalItems += newQuantity;
  }

    // On cible l'id totalQuantity et on retourne la valeur
    const totalQuantity = document.getElementById('totalQuantity');
    totalQuantity.textContent = totalItems;

    return totalItems;
}

// Fonction qui modifie la quantité
export function changeQuantity() {

  // On cible la classe itemQuantity
  const changeItemQuantity = document.getElementsByClassName("itemQuantity");

  // On boucle sur la variable
  for (let c = 0; c < changeItemQuantity.length; c++) {

    // On écoute l'input
    changeItemQuantity[c].addEventListener("change", function (e) {

      e.preventDefault();

      // On initialise une nouvelle variable qui contient la valeur de la quantité 
      let newQuantity = changeItemQuantity[c].value;

      // On créer un nouvel objet avec la nouvelle quantité modifiée
      const newLocalStorage = {
        id: cart[c].id,
        description: cart[c].description,
        imageUrl: cart[c].imageUrl,
        altTxt: cart[c].altTxt,
        name: cart[c].name,
        color: cart[c].color,
        price: cart[c].price,
        quantity: newQuantity, 
      };

      // L'objet cart est mis à jour et est enregistré dans le localStorage 
      cart[c] = newLocalStorage;
      localStorage.setItem("cart", JSON.stringify(cart));

      // On affiche le prix et la quantité en meme temps que la modification du panier
      totalPrice();
      totalQuantity();

      
    });

  }
}

// Fonction qui supprime un canapé de la commande
export function deleteItem() {

  // On cible la classe deleteItem
  const deleteItem = document.getElementsByClassName("deleteItem");

  // On boucle sur cette variable
  for (let d = 0; d < deleteItem.length; d++) {

    // On écoute le boutton supprimer
    deleteItem[d].addEventListener("click", (e) => {
      e.preventDefault();

      // On créer de nouvelles variables qui permettent de cibler l'id et la couleur
      let deleteId = cart[d].id;
      let deleteColor = cart[d].color;

      // On filtre les deux variables
      let newCart = cart.filter((elt) => elt.id !== deleteId || elt.color !== deleteColor);

      // On met à jour notre localStorage  
      localStorage.setItem("cart", JSON.stringify(newCart));
      document.querySelector("cart__items").removeChild(newCart);
    });

  }
}
