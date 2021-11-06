

fetch("http://localhost:3000/api/products")
.then(function(response) {
    return response.json
})
.then(function(data) {
    document
    .getElementById("items")
    .innerText = data.name;
})
.catch(function(error) {
    console.log(error)
})


