setInterval(() => {
  var reloj = document.getElementsByClassName("reloj")[0]
  var tiempoActual = new Date();
  var horas = tiempoActual.getHours();
  var minutos = tiempoActual.getMinutes();
  var segundos = tiempoActual.getSeconds();
  if (segundos < 10){
    segundos = '0' + segundos;
  }
  if (minutos < 10){
    minutos = '0' + minutos;
  }
  if (horas < 10){
    horas = '0' + horas;
  }
  reloj.innerHTML = horas+":"+minutos+":"+segundos
},1000);
