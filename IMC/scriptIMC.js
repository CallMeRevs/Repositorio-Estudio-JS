window.onload = iniciar;
function iniciar(){
  var botonCalcular = document.getElementById('botonCalcular');
  botonCalcular.addEventListener("click",clickBotonCalcular);
}
function clickBotonCalcular(){
  var peso = document.getElementById('pesoUsuario').value;
  var altura = document.getElementById('alturaUsuario').value;
  var imc = Math.round(peso / (altura ** 2));
  alert("Tu IMC es: " + imc + ".");
}
