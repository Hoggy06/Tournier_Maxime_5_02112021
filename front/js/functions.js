// On importe la variable cart qui contient le localStorage
import { cart } from "./cart.js";

// Fonction qui retourne le prix totale de la commande
export function totalPrice() {
  let price = 0;

  for (let p of cart) {
    price += p.price * p.quantity;
  }
  const totalPrice = document.getElementById("totalPrice");
  totalPrice.textContent = price;

  return price;
}

// Fonction qui retourne la quantité totale de la commande
export function totalQuantity() {
  let totalItems = 0;

  for (let t in cart) {
    const newQuantity = Number(cart[t].quantity);
    totalItems += newQuantity;
  }
  const totalQuantity = document.getElementById("totalQuantity");
  totalQuantity.textContent = totalItems;

  return totalItems;
}

// Fonction qui modifie la quantité
export function changeQuantity() {
  const changeItemQuantity = document.getElementsByClassName("itemQuantity");

  // On boucle sur les sélecteurs itemQuantity
  for (let c = 0; c < changeItemQuantity.length; c++) {
    changeItemQuantity[c].addEventListener("change", function (e) {
      e.preventDefault();

      // On initialise une nouvelle variable qui contient la valeur de la quantité voulue
      let newQuantity = changeItemQuantity[c].value;

      // La quantité doit etre comprise entre 1 et 100
      if (newQuantity >= 1 && newQuantity <= 100) {
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
      } else {
        alert("La quantité doit etre comprise entre 1 et 100 !");
      }
    });
  }
}

// Fonction qui supprime un canapé de la commande
export function deleteItem() {
  const deleteItem = document.getElementsByClassName("deleteItem");

  // On boucle sur les boutons de suppression
  for (let d = 0; d < deleteItem.length; d++) {
    deleteItem[d].addEventListener("click", (e) => {
      e.preventDefault();

      // On créer de nouvelles variables qui permettent de cibler l'id et la couleur
      let deleteId = cart[d].id;
      let deleteColor = cart[d].color;

      // On filtre les deux variables
      let newCart = cart.filter(
        (elt) => elt.id !== deleteId || elt.color !== deleteColor
      );

      // On met à jour notre localStorage
      localStorage.setItem("cart", JSON.stringify(newCart));
      location.reload();
    });
  }
}

// Fonction qui vérifie le contenu du Prénom
export function testFirstName() {
  // On cible firstName et on créer une regex
  let firstName = document.getElementById("firstName");
  // On accepte les minuscules, majuscules, les espaces et les tirets, chaine entre 3 et 20 caractères
  let regexFirstName = /^[a-zA-Z\s-]{3,20}$/;

  firstName.addEventListener("change", function () {
    // Si les conditions sont valides == OK
    if (
      regexFirstName.test(firstName.value) &&
      firstName.value.length >= 3 &&
      firstName.value.length < 20 &&
      firstName.value !== ""
    ) {
      let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
      firstNameErrorMsg.innerText =
        "";
      // Sinon on avertit l'utilisateur
    } else {
      let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
      firstNameErrorMsg.innerText =
        "Merci de vérifier votre prénom, 3 caractères minimum requis avec des lettres uniquement";
      return;
    }
  });
  if (regexFirstName.test(firstName.value)) {
    return firstName.value;
  }
}

// Fonction qui vérifie le contenu du Nom
export function testLastName() {
  // On cible lastName et on créer une regex
  let lastName = document.getElementById("lastName");
  // On accepte les minuscules, majuscules, les espaces et les tirets, chaine entre 3 et 20 caractères
  let regexLastName = /^[a-zA-Z\s-]{3,20}$/;

  lastName.addEventListener("change", function () {
    // Si les conditions sont valides == OK
    if (
      regexLastName.test(lastName.value) &&
      lastName.value.length >= 3 &&
      lastName.value.length < 20 &&
      lastName.value !== ""
    ) {
      let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
      lastNameErrorMsg.innerText =
        "";
      // Sinon on avertit l'utilisateur
    } else {
      let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
      lastNameErrorMsg.innerText =
        "Merci de vérifier votre nom, 3 caractères minimum requis avec des lettres uniquement";
      return;
    }
  });
  if (regexLastName.test(lastName.value)) {
    return lastName.value;
  }
}

// Fonction qui vérifie le contenu de l'adresse
export function testAddress() {
  // On cible address et on créer une regex
  let address = document.getElementById("address");
  // On accepte les minuscules, majuscules, les chiffres, les espaces, les tirets et les apostrophes
  let regexAddress = /^[a-z'A-Z'0-9-\s]+$/;

  address.addEventListener("change", function () {
    // Si les conditions sont valides == OK
    if (regexAddress.test(address.value) && address.value !== "") {
      let addressErrorMsg = document.getElementById("addressErrorMsg");
      addressErrorMsg.innerText =
        "";
      // Sinon on avertit l'utilisateur
    } else {
      let addressErrorMsg = document.getElementById("addressErrorMsg");
      addressErrorMsg.innerText =
        "Merci de vérifier votre addresse, caractères alphanumériques autorisés";
      return;
    }
  });
  if (regexAddress.test(address.value)) {
    return address.value;
  }
}

// Fonction qui vérifie le contenu de la ville
export function testCity() {
  // On cible city et on créer une regex
  let city = document.getElementById("city");
  // On accepte les minuscules, majuscules, les chiffres, les espaces, les tirets
  let regexCity = /^[a-zA-Z0-9-\s]+$/;

  city.addEventListener("change", function () {
    // Si les conditions sont valides == OK
    if (regexCity.test(city.value) && city.value !== "") {
      let cityErrorMsg = document.getElementById("cityErrorMsg");
      cityErrorMsg.innerText =
        "";
      // Sinon on avertit l'utilisateur
    } else {
      let cityErrorMsg = document.getElementById("cityErrorMsg");
      cityErrorMsg.innerText =
        "Merci de vérifier votre ville, 3 caractères minimum requis avec des lettres uniquement";
      return;
    }
  });
  if (regexCity.test(city.value)) {
    return city.value;
  }
}

// Fonction qui vérifie le contenu de l'email
export function testEmail() {
  // On cible email et on créer une regex
  let email = document.getElementById("email");
  // 1er groupe (min,maj,chiffres,point,underscore,tiret), 2eme groupe(idem), 3eme groupe(min,maj entre 2 et 6 caractères pour les extensions de domaines)
  let regexEmail = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

  email.addEventListener("change", function () {
    // Si les conditions sont valides == OK
    if (regexEmail.test(email.value) && email.value !== "") {
      let emailErrorMsg = document.getElementById("emailErrorMsg");
      emailErrorMsg.innerText = "";
      // Sinon on avertit l'utilisateur
    } else {
      let emailErrorMsg = document.getElementById("emailErrorMsg");
      emailErrorMsg.innerText = "Erreur email non valide !";
      return;
    }
  });
  if (regexEmail.test(email.value)) {
    return email.value;
  }
}
