const search_params = new URLSearchParams(window.location.search);
const id = search_params.get("id");

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

    const kanapElements = new kanap();
    kanapElements.kanapProduct();

    const addToCart = document.getElementById("addToCart");

    addToCart.addEventListener("click", function (e) {

      e.preventDefault();

      const list = document.getElementById("colors");

      const quantity = document.getElementById("quantity");

      const objectProduct = [kanapElements.id, list.value, quantity.value];

      const l = localStorage.setItem(kanapElements.name, JSON.stringify(objectProduct));
      

    });
  })

  .catch((error) => {
    const errorAlert = () => {
      const articleError = document.createElement("article");
      const messageError = document.createElement("p");

      articleError.classList.add("articleError");
      messageError.classList.add("messageError");

      articleError.style.backgroundColor = "#AD1B1B";
      messageError.style.color = "white";
      messageError.style.fontWeight = "bold";

      document.getElementById("items").appendChild(articleError);

      return (articleError.appendChild(messageError).innerHTML += error);
    };

    errorAlert();
  });
