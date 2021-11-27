

const search_params = new URLSearchParams(window.location.search); // On récupère l'id passé en paramètre d'URL
const id = search_params.get("id");

fetch("http://localhost:3000/api/products/" + id) // On appel l'api
  .then((response) => {
    // Vérification du status de la réponse
    return response.json();
  })

  .then((data) => {
    // Création d'une classe pour chaque canapé
    class Kanap {
      constructor(id, colors, name, price, description, imageUrl, altTxt) {
        this.id = data._id;
        this.colors = data.colors;
        this.name = data.name;
        this.price = data.price;
        this.description = data.description;
        this.imageUrl = data.imageUrl;
        this.altTxt = data.altTxt;
      }
      // On récupère les objets pour ensuite les afficher sur la page
      kanapProduct() {
        document.getElementById("title").innerHTML += this.name;
        document.getElementById("price").innerHTML += this.price;
        document.getElementById("description").innerHTML += this.description;

        const img = document.createElement("img");
        img.setAttribute("src", this.imageUrl);
        img.setAttribute("alt", this.altTxt);

        document.getElementsByClassName("item__img")[0].appendChild(img);

        for (let c in this.colors) {
          document.getElementById(
            "colors"
          ).innerHTML += `<option value="${this.colors[c]}">${this.colors[c]}</option>`;
        }
      }
    }

    // On instancie la classe et on l'affiche
    const kanapElements = new Kanap();
    kanapElements.kanapProduct();

    const addToCart = document.getElementById("addToCart");

    // On ecoute l'évènement
    addToCart.addEventListener("click", function (e) {
      e.preventDefault();
      

      // On cible les champs du formulaire
      const list = document.getElementById("colors");
      const quantity = document.getElementById("quantity");

      // On recupèrera les différents produits dans ce tableau
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      //localStorage.clear();

      // Les canapés sont regroupés dans cette variable à l'aide de la classe Kanap
      const objectProduct = {
        id: kanapElements.id,
        name: kanapElements.name,
        price: kanapElements.price,
        description: kanapElements.description,
        imageUrl: kanapElements.imageUrl,
        altTxt: kanapElements.altTxt,
        color: list.value,
        quantity: Number(quantity.value) //number ?
      };

      // Création de variable pour vérifier si un canapé est présent ou non dans le panier
      let isAlreadyPresent = false;
      let index;

      // On parcours l'array de colors pour identifier la couleur choisie
      for (let p of cart) {
        switch (p.color) {
          case objectProduct.color:
            isAlreadyPresent = true;
            index = cart.indexOf(p);
            break;
        }
      }

      if (list.value !== "" && quantity.value !== 0) {
        // On vérifie que les données ne sont pas vides
        // Si le canapé est présent dans le panier et est de la meme couleur alors on ajoute que la quantité
        if (isAlreadyPresent) {
          // On stocke la donnée dans le localStorage
          cart[index].quantity =
            +cart[index].quantity + +objectProduct.quantity;
          localStorage.setItem("cart", JSON.stringify(cart));
         

          // On avertie l'utilisateur de son action et on redirige vers la page panier
          if (window.confirm(`${objectProduct.name} ${objectProduct.color} a bien été ajouté. Souhaitez vous consulter votre panier ?`)) {
            window.location.href = "cart.html";
          }
        } else {
          // Sinon on ajoute un nouveau canapé
          cart.push(objectProduct);
          localStorage.setItem("cart", JSON.stringify(cart));
         

          // On avertie l'utilisateur de son action et on redirige vers la page panier
          if (window.confirm(`${objectProduct.name} ${objectProduct.color} a bien été ajouté. Souhaitez vous consulter votre panier ?`)) {
            window.location.href = "cart.html";
          }
        }
      } else {
        alert(
          "Veuillez sélectioner une couleur et une quantité supérieur à 0 !"
        );
      }
    });
  })
  // On affiche l'erreur s'il y en a une
  .catch((error) => {
    alert("Erreur : " + error);
  });
