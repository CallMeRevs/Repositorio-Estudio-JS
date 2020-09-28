// https://api.covid19tracking.narrativa.com/api/2020-05-05/country/germany
window.onload = iniciar();

function iniciar(){
  let boton = document.getElementById('btnCargar');
  boton.addEventListener('click',clickBoton);
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd
  }
  if(mm<10){
    mm='0'+mm
  }
  today = yyyy+'-'+mm+'-'+dd;
  document.getElementById("inputFecha").setAttribute("max", today);
}

async function clickBoton(){
  let pais = document.getElementById('selectPais').value;
  let fecha = document.getElementById('inputFecha').value;
  let jsonApi = await cargarUrl('https://api.covid19tracking.narrativa.com/api/' + fecha + '/country/' + pais);
  var datos = jsonApi.dates[fecha].countries.Mexico;
  switch (pais) {
    case 'germany':{
      datos = jsonApi.dates[fecha].countries.Germany;
      break;
    }
    case 'spain':{
      datos = jsonApi.dates[fecha].countries.Spain;
      break;
    }
    case 'mexico':{
      datos = jsonApi.dates[fecha].countries.Mexico;
      break;
    }
    case 'us':{
      datos = jsonApi.dates[fecha].countries.US;
      break;
    }
    default:{
      datos = jsonApi.dates[fecha].countries.Mexico;
      break;
    }
  }
  document.getElementById("source").innerHTML = datos.source;
  document.getElementById("today_confirmed").innerHTML = datos.today_confirmed;
  document.getElementById("today_deaths").innerHTML = datos.today_deaths;
  document.getElementById("today_new_confirmed").innerHTML = datos.today_new_confirmed;
  document.getElementById("today_new_deaths").innerHTML = datos.today_new_deaths;
  document.getElementById("today_new_open_cases").innerHTML = datos.today_new_open_cases;
  document.getElementById("today_new_recovered").innerHTML = datos.today_new_recovered;
  document.getElementById("today_open_cases").innerHTML = datos.today_open_cases;
  document.getElementById("today_recovered").innerHTML = datos.today_recovered;
}

async function cargarUrl(url){
  let response = await fetch(url);
  return response.json();
}
