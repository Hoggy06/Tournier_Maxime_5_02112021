fetch("http://localhost:3000/api/products")
.then((r) => {
    return r.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
});