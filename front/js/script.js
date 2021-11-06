fetch("http://localhost:3000/api/products")
.then((r) => {
    return r.json()
})
.then((data) => {
    document.getElementById("items").innerText.data.name[0]
})
.catch((error) => {
    console.log(error)
});