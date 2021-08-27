// Documento JavaScript
/* Así se aplica un comentario de tipo bloque*/

function ejecuta() {
//    document.querySelector("#principal p:last-child").onclick=saludo;

var elementos=document.querySelectorAll("#principal p, span");
for (var i=0;i<elementos.length;i++){

elementos[i].onclick=saludo;
}
}

function saludo() {
  alert("Qué hay de nuevo?");
}

window.onload = ejecuta;
