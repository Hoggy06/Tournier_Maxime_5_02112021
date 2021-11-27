import {
  totalPrice,
  totalQuantity,
  changeQuantity,
  deleteItem,
} from "./functions.js";

export const cart = JSON.parse(localStorage.getItem("cart")); // On récupère le localStorage utilisé dans la page produit

for (let c of cart) {
  // On parcours le tableau et on affiche les données

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

// Import de la fonction changeQuantity
changeQuantity();

// Import de la fonction deleteItem
deleteItem();

// Affiche la quantité totale
totalQuantity();

// Affiche le prix totale
totalPrice();

function form() {
  const order = document.getElementById("order");
  order.addEventListener("click", function (e) {
    //submit
    e.preventDefault();

    // Création de l'objet contact
    const contact = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      email: document.getElementById("email").value,
    };

    function testFirstName() {
      const validFisrtName = contact.firstName;
      if (/^[A-Za-z]{3,20}$/.test(validFisrtName)) {
        return true;
      } else {
        let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
        firstNameErrorMsg.textContent =
          "Merci de vérifier votre prénom, 3 caractères minimum requis avec des lettres uniquement";
      }
    }

    function testLastName() {
      const validLastName = contact.lastName;
      if (/^[A-Za-z]{3,20}$/.test(validLastName)) {
        return true;
      } else {
        let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
        lastNameErrorMsg.textContent =
          "Merci de vérifier votre nom, 3 caractères minimum requis avec des lettres uniquement";
      }
    }

    function testAddress() {
      const validAddress = contact.address;
      if (/^[a-zA-Z0-9-\s]+$/.test(validAddress)) {
        return true;
      } else {
        let addressErrorMsg = document.getElementById("addressErrorMsg");
        addressErrorMsg.textContent =
          "Merci de vérifier votre addresse, caractères alphanumériques autorisés";
      }
    }

    function testCity() {
      const validCity = contact.city;
      if (/^[a-zA-Z0-9-\s]+$/.test(validCity)) {
        return true;
      } else {
        let cityErrorMsg = document.getElementById("cityErrorMsg");
        cityErrorMsg.textContent =
          "Merci de vérifier votre ville, 3 caractères minimum requis avec des lettres uniquement";
      }
    }

    function testEmail() {
      const validEmail = contact.email;
      if (
        /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(validEmail)
      ) {
        return true;
      } else {
        let emailErrorMsg = document.getElementById("emailErrorMsg");
        emailErrorMsg.textContent = "Erreur email non valide !";
      }
    }

    function validForm() {
      if (
        testFirstName() &&
        testLastName() &&
        testAddress() &&
        testCity() &&
        testEmail()
      ) {
        localStorage.setItem("contact", JSON.stringify(contact));
        return true;
      } else {
        alert("Merci de vérifier le contenu de votre formulaire");
      }
    }

    validForm();
    // product-ID array

    let products = [];
    for (let i of cart) {
      products.push(i.id);
    }

    let send = {
      contact: contact,
      products: products,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(send),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:3000/api/products/order", options)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        if (validForm()) {
          window.location.href = `confirmation.html?orderId=${data.orderId}`;
        }
      })

      .catch((error) => {
        alert(error);
      });
  });
}

form();
