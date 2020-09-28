setTimeout(mostrarMensaje,3000); // Llamado a funcion con un intervalo
var timer = setInterval(() => alert("Tiempo cumplido 1 segundo"),1000);
setTimeout(() => {
  clearInterval(timer); // Detiene el timer
},10*1000)


var mostrarMensajeConVariable = function(){
  alert("Función contenida en una variable.");
}

mostrarMensajeArrow = () => {
  alert("Funcion con arrow.");
}

function mostrarMensaje(){
  alert("Tiempo completo. Pasaron 3 segundos.");
}
