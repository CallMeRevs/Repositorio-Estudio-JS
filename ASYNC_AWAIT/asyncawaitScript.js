/*
async function loadJSON(json){ // Funcion asincorna
  let respuestaServer = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // Espera la respuesta del server
  console.log(respuestaServer); // Mostramos la respuesta del server (Es una Promesa)
  let promesaJSON = await respuestaServer; // Manipulamos la promesa dentro de la promesa
  console.log(promesaJSON); // Mostramos la respuesta manipulada
  let jsonLimpio = await promesaJSON.json(); // Parseamos a json
  console.log(jsonLimpio);
  loadedJSON(jsonLimpio);
}
*/

async function cargarJson(){
  let json = await cargarUrl("https://jsonplaceholder.typicode.com/todos/1");
  loadedJSON(json);
}

function loadedJSON(json){
  let spanNombrePost = document.getElementById("txtNombrePost");
  let spanCompleto = document.getElementById("txtCompleto");
  spanNombrePost.innerHTML = "'" + json.title + "'.";
  spanCompleto.innerHTML = "'" + json.completed + "'.";
}

async function cargarUrl(url){
  let respuesta = await fetch(url);
  return respuesta.json();
}

cargarJson();
