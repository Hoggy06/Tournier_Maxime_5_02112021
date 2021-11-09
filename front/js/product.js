
const search_params = new URLSearchParams(window.location.search); 
const id = search_params.get('id');

fetch(`http://localhost:3000/api/products/${id}`)

.then((response) => {
  return response.json();
})
 
.then((data) => {

  class kanap {
    constructor(id, colors, name, price, description, imageUrl, altTxt) {
      this.id = data._id;
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

      const img = document.createElement('img');
      img.setAttribute("src", this.imageUrl);
      img.setAttribute("alt", this.altTxt);

      document.getElementsByClassName("item__img")[0].appendChild(img);
      
      for(let c of data.colors) {
        document.getElementById("colors").innerHTML += `<option value="${c}">${c}</option>`;
      }
    }

   
  }

  const k = new kanap();
  k.kanapProduct();

})

.catch((error) => {
    console.log(error)
});