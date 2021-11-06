

fetch("http://localhost:3000/api/products")

.then((response) => {
    return response.json();
})

.then((data) => {
    for(let d in data) {

        const url = new URL(`http://127.0.0.1:5500/front/html/product.html?id=${data[d]._id}`);

        const htmlContent = `
            <a href="${url}">
                <article>
                    <img src="${data[d].imageUrl}" alt="${data[d].altTxt}">
                    <h3 class="productName">${data[d].name}</h3>
                    <p class="productDescription">${data[d].description}</p>
                </article>
            </a>`;
    document.getElementById("items").innerHTML += htmlContent;
    }
})

.catch((error) => {
    console.log(error)
});
