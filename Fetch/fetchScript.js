function loadJSON(json){
  fetch("https://jsonplaceholder.typicode.com/todos/1") // Request de promesas
    .then(response => response.json()) // Manipulación de promesas
    .then(loadedJSON);
}
function loadedJSON(json){
  console.log(json);
  let spanNombrePost = document.getElementById("txtNombrePost");
  let spanCompleto = document.getElementById("txtCompleto");
  spanNombrePost.innerHTML = "'" + json.title + "'.";
  spanCompleto.innerHTML = "'" + json.completed + "'.";
}
loadJSON();
