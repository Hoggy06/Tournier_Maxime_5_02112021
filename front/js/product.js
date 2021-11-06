
const search_params = new URLSearchParams(window.location.search); 
  const id = search_params.get('id');

  fetch(`http://localhost:3000/api/products/${id}`)

.then((response) => {
    return response.json();
})
 
.then((data) => {

  class kanap {
    constructor(colors, name, price, description, imageUrl, altTxt) {
      this.colors = data.colors;
      this.name = data.name;
      this.price = data.price;
      this.description = data.description;
      this.imageUrl = data.imageUrl;
      this.altTxt = data.altTxt;
    }
    kanapProduct() {
      document.getElementById("title").innerHTML += this.name;
      document.getElementById("price").innerHTML += this.price;
      document.getElementById("description").innerHTML += this.description;
      document.getElementsByClassName("item__img").innerHTML += `<img src="${this.imageUrl}" alt="${this.altTxt}">`;
      document.getElementById("colors").innerHTML += this.colors;
    }
  }
  const k = new kanap();
  k.kanapProduct();
})

.catch((error) => {
    console.log(error)
});
