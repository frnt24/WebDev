/* Extensión API File Directories & System:

    1. Petición al navegador de utilización de espacio en disco duro. Dos tipos de espacio en disco:

        a) Temporal: navigator.webkitTemporaryStorage.requestQuota
        b) Persistente: navigator.webkitPersistentStorage.requestQuota(a,b). a=cuánto espacio queremos reservar en bytes; b=a qué función queremos llamar en caso de que no haya ningún error.
    
    2. Creación del sistema de archivos (solo accesible desde la aplicación):

        window.webkitRequestFileSystem(a,b,c,d). a=tipo de espacio donde vamos a crear el sistema de archivos (persistent o temporary); b=indicar de nuevo el espacio que queremos reservar; c=a qué función se quiere llamar en caso de no haber ningún error en la creación del sistema de archivos; d=a qué función se quiere llamar en caso de que haya algún error en la creación del sistema de archivos.
    
    3. Creación de archivos nuevos o apertura de archivos existentes y creación de directorios nuevos o apertura de existentes:
    
        getFile(a,b,c,d) (para archivos). a=nombre del archivo; b={create:true/false,exclusive:true/false}: con create:true se le está diciendo al código que cree un archivo con ese nombre si es la primera vez que lo crea. Si no es la primera vez, no tiene que volverlo a crear. Si lo pusieramos en false, en caso de volver a ejecutar el código, crearía el archivo de nuevo. Con exclusive:true, retorna un error si el archivo ya existiera. Al decirle false, en el caso de que el archivo ya se hubiera creado con anterioridad, no devolvería ningún error. c=función que se quiere ejecutar si la creación del archivo tiene éxito. d=función que se quiere ejecutar si la creación del archivo lanza algún error.

        getDirectory (para directorios)
    
    4. Operaciones con archivos:

        – Listar
        – Mover
        – Copiar
        – Eliminar
    
    5. Escribir y agregar contenido a los archivos:

        Mediante la extensión API File Writer

Leyendo archivos y directorios:

    – Método createReader(): accede a lista de archivos y directorios en una ruta especificada. Devuelve el objeto DirectoryReader que contiene el método readEntries() para leer archivos y directorios.

    – Método readEntries(funciónéxito,funciónerror): lee las entradas desde el directorio previamente seleccionado. Es decir, ANTES de utilizar este método debe obtenerse el directorio donde se quieren leer los archivos, con el método getDirectory().

    – Propiedad isFile:true/false: nos dice si lo que estamos examinando es un archivo o no. será true en caso de que sea un archivo y false en caso de que no sea un archivo.

    – Propiedad isDirectory:true/false: nos dice si lo que estamos examinando es un directorio o no. será true en caso de que sea un directorio y false en caso de que no sea un directorio.

Moviéndonos por directorios:

    – Método getParent(a,b): devuelve el directorio padre. a=qué tiene que hacer si tiene éxito; b=qué tiene que hacer si sucede un error.

    – Método getDirectory(): devuelve el directorio actual

    – Propiedad fullPath: contiene la ruta completa del directorio especificado.

Manejando archivos:

    – Método moveTo(directorio,nombre,éxito,error): mueve un archivo a un directorio diferente.

    – Método copyTo(directorio,nombre,éxito,error): copia un archivo a un directorio diferente.

    – Método remove(): elimina archivo o directorio.

    – Método removeRecursively(): elimina directorio con contenido.
*/
function comenzar(){
    var boton=document.getElementById("boton");
    boton.addEventListener("click",crear,false);
    zonadatos=document.getElementById("zonadatos");

    navigator.webkitPersistentStorage.requestQuota(5*1024*1024,acceso);
}


function acceso(){
    window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,crearsis,errores); // Cuando se ejecuta el método webkitRequestFileSystem para crear el sistema de archivos, este método llama a la función crearsis() en caso de que no haya ningún error. Cuando esto ocurre, se crea el objeto FileSystem (se crea cuando abrimos un sistema de archivos). Una vez lanzado, se captura con "sistema" (de la función crearsis()).
}

function crearsis(sistema){
    espacio=sistema.root; // Una vez recogido el objeto FileSystem en "sistema", se declara una variable (espacio), y esta variable va a ser la raíz de nuestro sistema de archivos. Posteriormente se podrá modificar esa raíz para agregar en ella archivos.
    ruta="";
    mostrar();
}

function crear(){
    var nombre_archivo=document.getElementById("entrada").value;
    if(nombre_archivo!=""){
        nombre_archivo=ruta+nombre_archivo;
        espacio.getFile(nombre_archivo,{create:true,exclusive:false},mostrar,errores);
        // espacio.getDirectory(nombre_archivo,{create:true,exclusive:false},mostrar,errores);
    }
}

function mostrar(){
    document.getElementById("entrada").value="";
    zonadatos.innerHTML="";
    espacio.getDirectory(ruta,null,leerdir,errores);
}

function leerdir(dir){
    lector=dir.createReader();
    leer();
}

function leer(){
    lector.readEntries(function(archivos){
        if(archivos.length){
            listar(archivos);
        }
    },errores);
}

function listar(archivos){
    for(var i=0;i<archivos.length;i++){
        if(archivos[i].isFile){
            zonadatos.innerHTML+=archivos[i].name + "<br>";
        }else if(archivos[i].isDirectory){
            zonadatos.innerHTML+="<span onclick='cambiardir(\"" + archivos[i].name + "\")' class='directorio'>" + archivos[i].name + "</span><br>";
        }
    }
}

function cambiardir(nuevaruta){
    ruta=ruta+nuevaruta + "/";
    mostrar();
}

function volver(){
    espacio.getDirectory(ruta,null,function(dir_actual){
        dir_actual.getParent(function(dir_padre){
            ruta=dir_padre.fullPath + "/";

            mostrar();
        },errores);
    },errores);
}

/* SE DEJA EL CÓDIGO COMENTADO PARA NO PERDER EL HISTÓRICO DE LOS EJERCICIOS
function crear(){ // Encargada de crear el archivo.
    var nombre_archivo=document.getElementById("entrada").value; // Se almacena en la variable nombre_archivo lo que el usuario haya escrito en el cuadro de texto del formulario.

    if(nombre_archivo!=""){ // Si no está vacío...
        espacio.getFile(nombre_archivo,{create:true,exclusive:false},mostrar,errores);
        // espacio.getDirectory(nombre_archivo,{create:true,exclusive:false},mostrar,errores);
    }
}

function mostrar(entrada){
    document.getElementById("entrada").value=""; // una vez que el usuario ha escrito algo en la casilla de texto y le ha dado al botón de aceptar, que borre lo que el usuario ha introducido en esa casilla.

    zonadatos.innerHTML="¡Éxito en la creación de espacio y archivo!<br>";
    zonadatos.innerHTML+="Nombre: " + entrada.name + "<br>";
    zonadatos.innerHTML+="Ruta: " + entrada.fullPath + "<br>";
}
*/

function errores(e){
    alert("Ha habido un error: " + e.code);
}

window.addEventListener("load",comenzar,false);