// Importation des différentes fonctions
import {
  totalPrice,
  totalQuantity,
  changeQuantity,
  deleteItem,
  testFirstName,
  testLastName,
  testAddress,
  testCity,
  testEmail,
} from "./functions.js";

// On récupère le localStorage utilisé dans la page produit
export const cart = JSON.parse(localStorage.getItem("cart"));

// On parcours le tableau et on affiche les données
for (let c of cart) {
  const htmlContent = `
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

  document.getElementById("cart__items").innerHTML += htmlContent;

  
}

// Met à jour la quantité totale
changeQuantity();

// Supprime un produit du panier
deleteItem();

// Affiche la quantité totale
totalQuantity();

// Affiche le prix totale
totalPrice();

// Vérifie le contenu du champ Prénom
testFirstName();

// Vérifie le contenu du champ Nom
testLastName();

// Vérifie le contenu du champ Adresse
testAddress();

// Vérifie le contenu du champ Ville
testCity();

// Vérifie le contenu du champ Email
testEmail();

// On écoute l'évènement au clique du formulaire
const order = document.getElementById("order");
order.addEventListener("click", function (e) {
  e.preventDefault();

  // Création de l'objet contact
  const contact = {
    firstName: testFirstName(),
    lastName: testLastName(),
    address: testAddress(),
    city: testCity(),
    email: testEmail(),
  };

  // Fonction qui vérifie que les données sont valides
  function validForm() {
    if (
      testFirstName().length > 3 &&
      testFirstName().length < 20 &&
      testLastName().length > 3 &&
      testLastName().length < 20 &&
      testAddress() &&
      testCity() &&
      testEmail()
    ) {
      localStorage.setItem("contact", JSON.stringify(contact));
      return true;
    } else {
      if (testFirstName().length < 3 || testFirstName().length > 20) {
        alert("Le champ Prénom est mal renseigné");
      } else if (testLastName().length < 3 || testLastName().length > 20) {
        alert("Le champ Nom est mal renseigné");
      } else {
        alert("Merci de vérifier le contenu de votre formulaire");
      }
    }
  }

  // Création de l'array products qui contient les produits de la commande
  let products = [];
  for (let i of cart) {
    products.push(i.id);
  }

  // Création de l'objet send qui contient l'objet contact (données personnelles de l'utilisateur) et l'array products (produits de la commande)
  let send = {
    contact: contact,
    products: products,
  };

  // Variables qui contient les options de fetch
  const options = {
    method: "POST",
    body: JSON.stringify(send),
    headers: {
      "Content-Type": "application/json",
    },
  };

  // On appel l'api
  fetch("http://localhost:3000/api/products/order", options)
    // Vérification du status de la réponse
    .then((response) => {
      return response.json();
    })
    // Envoie des données à la page confirmation
    .then((data) => {
      if (validForm()) {
        //window.location.href = `confirmation.html?orderId=${data.orderId}`;
        console.log(contact);
      }
    })
    // Retourne une erreur s'il y en a une
    .catch((error) => {
      alert(error);
    });
});
