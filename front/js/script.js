// On appel l'api
fetch("http://localhost:3000/api/products")
  // On vérifie le status de la réponse de l'api
  .then((response) => {
    return response.json();
  })
  // On récupère les éléments de l'api
  .then((data) => {
    cards(data);
  })
  // L'erreur est traitée
  .catch((error) => {
    alert("Erreur : " + error);
  });
// Fonction qui retourne les différents produits dans l'api
const cards = (data) => {
  // On parcours les objets présents dans l'api
  for (let d in data) {
    const htmlContent = `
            <a href="./product.html?id=${data[d]._id}">
                <article>
                    <img src="${data[d].imageUrl}" alt="${data[d].altTxt}">
                    <h3 class="productName">${data[d].name}</h3>
                    <p class="productDescription">${data[d].description}</p>
                </article>
            </a>`;
    document.getElementById("items").innerHTML += htmlContent;
  }
};
