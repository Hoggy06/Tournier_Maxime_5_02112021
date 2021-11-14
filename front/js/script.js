

fetch("http://localhost:3000/api/products") // On appel l'api

  .then((response) => { // On vérifie le status de la réponse de l'api
    return response.json();
  })

  .then((data) => { // On récupère les éléments de l'api
    cards(data);
  })

  .catch((error) => { // L'erreur est traitée
    alert("Erreur : " + error);
  });


  const cards = (data) => {
    for (let d in data) { // On parcours les objets présents dans l'api
      const htmlContent = `
            <a href="./product.html?id=${data[d]._id}">
                <article>
                    <img src="${data[d].imageUrl}" alt="${data[d].altTxt}">
                    <h3 class="productName">${data[d].name}</h3>
                    <p class="productDescription">${data[d].description}</p>
                </article>
            </a>`;
      document.getElementById("items").innerHTML += htmlContent; // On affiche le contenu sur la page
    } 
  }