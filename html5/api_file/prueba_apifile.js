/* La API File cuenta con tres especificaciones:

    – API File: se encarga de interactuar con los archivos en local del usuario y procesar la información.

    – API File Directories & System: se encarga de crear un sistema de archivos para la aplicación en curso

    – API File Writer: se encarga de escribir contenido en los archivos creados o descargados por la aplicación.

Para poder leer los archivos del usuario es necesario el uso de una interfaz llamada FileReader. Devuelve un objeto con varios métodos para obtener la información del archivo en concreto. Esos MÉTODOS son los siguientes:

    – readAsText: intenta interpretar cada byte del archivo como información de texto. Por defecto, este método devuelve la información con la codificación utf-8.

    – readAsBinaryString: devuelve la información de cada byte como una sucesión de números entre 0 y 255. No intenta interpretar nada. Útil para mover archivos de un lugar a otro.

    – readAsDataUrl: devuelve el archivo como una cadena de tipo url codificada en base 64. Útil para codificar información y devolverla codificada.

    – readAsArrayBuffer: devuelve los datos como un tipo de array. Útil para mover uno o varios archivos.

Por último, se necesita un lector que sea capaz de leer la información devuelta por cada uno de los métodos del objeto que nos devuelve FileReader.

<input type="file".....> proporciona tres propiedades:

    – Name: devuelve nombre del archivo
    – Size: devuelve tamaño del archivo
    – Type: devuelve tipo de archivo
*/
function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    var archivos=document.getElementById("archivo");
    archivos.addEventListener("change",procesar,false);
}

function procesar(e){
    var archivos=e.target.files;
    zonadatos.innerHTML="";
    var miarchivo=archivos[0];
    if(!miarchivo.type.match(/image/)){ //detecta si el archivo es una imagen o no
        alert("Selecciona una imagen, por favor");
    }else{
        zonadatos.innerHTML+="Nombre del archivo: " + miarchivo.name + "<br>";
        zonadatos.innerHTML+="Tamaño del archivo: " + Math.round(miarchivo.size/1024) + " Kb <br>";
        var lector=new FileReader();
        lector.readAsDataURL(miarchivo);
        lector.addEventListener("load",mostrar_en_web,false);
    }

}

function mostrar_en_web(e){
    var resultado=e.target.result;
    zonadatos.innerHTML+="<img src='" + resultado + "' width='85%'>";
}

window.addEventListener("load",comenzar,false);