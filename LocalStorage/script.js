window.onload = iniciar;

function iniciar(){
  var btnAdd = document.getElementById("btnAdd");
  var btnDel = document.getElementById("btnDel");
  btnAdd.addEventListener("click",clickBtnAdd);
  btnDel.addEventListener("click",clickBtnDel);
  mostrarNotas();
}

function clickBtnAdd(){
  var txtNota = document.getElementById("txtNota");
  var notas = [];
  if(localStorage.notas){ // Verifica si existe
    notas = JSON.parse(localStorage.notas);
  }
  notas.push(txtNota.value);
  localStorage.notas = JSON.stringify(notas); // LocalStorage solo almacena numericos, boolean y Strng
  mostrarNotas();
}

function clickBtnDel(){
  localStorage.clear();
  mostrarNotas();
}

function mostrarNotas(){
  var divNotas = document.getElementById("divNotas");
  if(localStorage.notas){
    notas = JSON.parse(localStorage.notas);
  }
  var html = "";
  for(var nota of notas){
    html += nota + "<br/>";
  }
  divNotas.innerHTML = html;
}
