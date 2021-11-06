
const search_params = new URLSearchParams(window.location.search); 
  const id = search_params.getAll('name');
  console.log(id)
