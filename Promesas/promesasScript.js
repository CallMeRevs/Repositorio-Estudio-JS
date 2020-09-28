function loadJSON(json){
  setTimeout(() => { // Genera una respuesta asincrona simulando al server
    let promesa = new Promise(resolver => { // Una promesa es un proceso pesado
      let json = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }
      resolver(json);
    });
    promesa.then(json => { // Qué queremos que suceda cuando se cumpla la promesa
      loadedJSON(json);
    })
  },5000);
}

function loadedJSON(json){
  console.log(json);
  let spanNombrePost = document.getElementById("txtNombrePost");
  let spanCompleto = document.getElementById("txtCompleto");
  spanNombrePost.innerHTML = "'" + json.title + "'.";
  spanCompleto.innerHTML = "'" + json.completed + "'.";
}

loadJSON();
