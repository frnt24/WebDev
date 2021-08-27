/*EVENTOS de la API Drag & Drop para el OBJETO A ARRASTRAR:

    – Dragstart: desencadena la acción al comenzar a arrastrar.

    – Drag: desencadena la acción durante la operación de arrastre.

    – Dragend: desencadena la acción al terminar de arrastrar.

EVENTOS de la API Drag & Drop para el OBJETO DE DESTINO:

    – Dragenter: cuando el ratón entra en el área de destino.

    – Dragover: cuando el ratón se mueve sobre el área de destino.

    – Drop: cuando el elemento es soltado en el área de destino.

    – Dragleave: cuando el elemento arrastrado sale del área de destino.

Para establecer la información a compartir, existe en la API Drag & Drop el OBJETO dataTransfer, que tiene los siguientes MÉTODOS:

    – setData: declara qué datos serán transferidos. Se utiliza en el objeto que vamos a arrastrar, diciéndole a nuestra página web qué vamos a compartir sobre este objeto.

    – getData: declara qué datos serán capturados.

Para RESETEAR ACCIONES POR DEFECTO del NAVEGADOR se utiliza el siguiente MÉTODO:

    – preventDefault();
*/

var elem_origen;
var elem_destino;

function comenzar(){
    elem_origen=document.getElementById("imagen");
    elem_origen.addEventListener("dragstart",comenzamos_arrastrar,false);

    elem_destino=document.getElementById("zona_destino");
    // elem_destino.addEventListener("dragenter",function(e){e.preventDefault();},false);
    elem_destino.addEventListener("dragover",function(e){e.preventDefault();}, false);
    elem_destino.addEventListener("drop",soltado,false);
    elem_origen.addEventListener("dragend",terminado,false);
    elem_destino.addEventListener("dragenter",entrando,false);
    elem_destino.addEventListener("dragleave",saliendo,false);
}

function comenzamos_arrastrar(e){
    var codigo="<img src='" + elem_origen.getAttribute("src") + "'>"; //con esto le decimos al código JavaScript que capture él mismo la ruta del objeto que estamos arrastrando. getAttribute permite capturar el atributo que queramos del objeto en cuestión.

    e.dataTransfer.setData("Text",codigo); //Lo que se hace aquí es lo siguiente: utilizando el objeto que desencadenó el evento (e), la información a compartir la establezca en formato texto y con lo que tenemos almacenado en la variable "codigo".
}

function soltado(e){
    e.preventDefault();
    elem_destino.innerHTML=e.dataTransfer.getData("Text"); //Establece desde JavaScript un código HTML para el objeto al que se hace referencia.
}

function terminado(e){
    var elemento=e.target;
    elemento.style.visibility="hidden";
}

function entrando(e){
    e.preventDefault();
    elem_destino.style.background="rgba(8,252,25,0.8";
}

function saliendo(e){
    e.preventDefault();
    // elem_destino.style.background="#FFFFFF";
    elem_destino.style.visibility="hidden";
}
window.addEventListener("load",comenzar,false);