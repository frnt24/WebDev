var elem_destino;

function comenzar(){
    var imagenes=document.querySelectorAll("#caja_imagen img"); //Este método nos devuelve un array con diferentes posiciones. Se identifican aquellas imágenes que se encuentren dentro de caja_imagen.
    
    for(var i=0;i<imagenes.length;i++){ //Se recorre todas las imágenes y se les dice que se mantengan a la escucha del evento "dragstart".
        imagenes[i].addEventListener("dragstart",inicio_arrastrar,false);

        if(i!=1){
            imagenes[i].addEventListener("dragend",terminado,false);
        }
    }

    elem_destino=document.getElementById("zona_destino");
    elem_destino.addEventListener("dragenter",entrando,false);
    elem_destino.addEventListener("dragover",function(e){e.preventDefault();},false);
    elem_destino.addEventListener("drop",soltado,false);
    elem_destino.addEventListener("dragleave",saliendo,false);
}

function inicio_arrastrar(e){
    var elemento=e.target;
    e.dataTransfer.setData("Text",elemento.getAttribute("id"));
}

function soltado(e){
    e.preventDefault();
    var id=e.dataTransfer.getData("Text");
    if(id!="imagen2"){
        var src=document.getElementById(id).src; //Almacena la ruta de cada imagen.

        elem_destino.innerHTML="<img src='" + src + "'>";
    }
    else{
        elem_destino.innerHTML="La imagen no está admitida";
        elem_destino.style.background="#fa0d29";
    }
}

function entrando(e){ //Solo funciona en Mozilla.
    e.preventDefault();
    var id=e.dataTransfer.getData("Text");

    if(id!="imagen2"){
        elem_destino.style.background="rgba(8,252,25,0.8)";
    }
    else{
        elem_destino.style.background="#fa0d29";
    }
}

function saliendo(e){
    e.preventDefault();
    elem_destino.style.background="#FFFFFF";
}

function terminado(e){
    var elemento=e.target;
    elemento.style.visibility="hidden";
}
window.addEventListener("load",comenzar,false);