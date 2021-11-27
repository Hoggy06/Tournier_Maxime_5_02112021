function checkout(){
    // On récupère l'id passé en paramètre d'URL
    const search_params = new URLSearchParams(window.location.search); 
    const orderId = search_params.get("orderId");
    document.getElementById("orderId").innerHTML += orderId;
}
checkout();