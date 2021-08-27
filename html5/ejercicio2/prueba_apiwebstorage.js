/* La API Web Storage en:

        – sessionStorage: almacenar información en el dispositivo del usuario de manera temporal. La información que se almacena temporalmente está disponible solo durante el tiempo que la ventana esté activa.

        – localStorage: almacenar información en el dispositivo del usuario de manera permanente. La información está disponible aun cerrando el navegador.

        Se puede cambiar entre uno y otro sin modificar el resto del código.

    MÉTODOS de la API Web Storage:

        – setItem: nos permite guardar la información.

        – getItem: nos permite leer la información guardada, bien durante la sesión (con sessionStorage), bien de forma permanente (con localStorage).
    
    La información se almacena como si fueran variables (se llaman items). Estos cuentan con dos partes:

        – Clave: sería como el nombre de la variable.

        – Valor: sería como lo que vale la variable.

        Ejemplo: var nombre="Juan": la clave sería "nombre" y el valor sería "Juan".
*/

function comenzar(){
    var boton=document.getElementById("grabar")
    boton.addEventListener("click",item_nuevo,false);
}

function item_nuevo(){
    var clave=document.getElementById("clave").value; //La variable "clave" almacenará el valor del elemento definido en el código HTMl con el id "clave" (que era un cuadro de texto).
    var valor=document.getElementById("valor").value; //La variable "valor" almacenará el valor del elemento definido en el código HTMl con el id "valor" (que era un cuadro de texto).

    //Una vez almacenados los valores en esas variables, lo que debe hacerse es guardar esta información mientras dure la sesión de la pestaña usando sessionStorage de la API Web Storage.

    localStorage.setItem(clave,valor); //Como los datos quedan guardados en un Array (este array es "sessionStorage"), puede prescindirse de esta sintaxis y utilizar otra (ver a continuación). //El método "setItem" del objeto sessionStorage tiene dos parámetros: la clave  y el valor del item.

    // sessionStorage[clave]=valor; //Esto hace lo mismo que setItem(). Guarda por un lado la clave y el valor, y le asigna a cada clave su valor correspondiente. Con getItem() se puede hacer lo mismo (ver en la función leer_mostrar).

    leer_mostrar(clave); //Se llama a la función leer_mostrar y le pasamos como parámetro lo que hay almacenado en la variable "clave".

    document.getElementById("clave").value="";
    document.getElementById("valor").value="";

    // Con las dos instrucciones de arriba, lo que se hace es resetear los campos de "clave" y de "valor" después de llamar y pasar los datos a la función leer_mostrar.
}

function leer_mostrar(clave){//Esta función tiene que mostrarnos la información guardada, que se ha guardado en la "clave". Se hace diciéndole que coja lo que hay en la variable "clave".
    var zonadatos=document.getElementById("zonadatos");

    zonadatos.innerHTML="<div><button onclick='eliminarTodo()'>Eliminar todo</button></div>";

    // var datos=sessionStorage[clave]; //Esto hace lo mismo que getItem().

    // zonadatos.innerHTML=""; // Con esta instrucción se está reseteando la zonadatos.

    for(i=0;i<localStorage.length;i++){
        var clave=localStorage.key(i); // Con este método (key(i)) se accede a las diferentes posiciones del array en el que la pestaña guarda la sesión dentro de sessionStorage.
        var datos=localStorage.getItem(clave);

        zonadatos.innerHTML+='<div>Clave: ' + clave + ' // ' + 'Valor: ' + datos + '<br><button onclick="eliminarItem(\'' + clave + '\')">Eliminar</button></div>';
    }
}

function eliminarTodo(){
    if(confirm("¿Estás seguro?")){ // Se utiliza la instrucción de JavaScript "confirm", la cual va a hacer que salga una especie de "alert" con un botón de aceptar y otro de cancelar.
        localStorage.clear();
        leer_mostrar();
    }
}

function eliminarItem(clave){
    if(confirm("¿Estás seguro?")){
        localStorage.removeItem(clave);
        leer_mostrar();
    }
}
window.addEventListener("load",comenzar,false);