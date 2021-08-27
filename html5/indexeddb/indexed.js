/* ¿Cómo conseguimos que la página/aplicación web, usando la API IndexedDB cree una base de datos compleja para almacenar un gran volumen de información? PASOS:

    1. Crear la BD:

        1. Atributo "indexedDB"
        2. Método "open(nombre,versión)". Tiene dos argumentos. El obligatorio es el nombre que se le quiera dar a la BD.
    
    2. Crear objetos:

        1. Método "createObjectStore(nombredelalmacén,campoclave)". Crea un almacén de datos dentro de la BD. "campoclave" identifica de manera única cada uno de los registros.
    
    3. Crear transacción (para agregar elementos):

        1. Método "transaction(["nombredelalmacén"],"tipodetransacción")". Esta transacción va a informar al navegador qué tipo de acción se va a hacer con el almacén de datos. Se pueden realizar tres tipos de acciones:

			– Lectura (read), cuando se quiere ver lo que hay almacenado, pero sin modificar nada.
			– Escritura (write)
			– Lectura y escritura (readwrite)
    
    4. Agregar elementos:

        1. Método "add({campo: informaciónquesequiereagregar})". Permite agregar información a un almacén de datos.
    
    5. Mostrar elementos:

        1. Abrir cursor (es como decirnos dónde nos encontramos dentro de ese almacén de objetos)

            1. Método "openCursor"
*/
var bd;
function iniciar(){ //Si se utiliza "var" para iniciar una variable, esa variable será local y, por lo tanto, podrá utilizarse solo en la zona entre llaves (por ejemplo, en la función iniciar()). En cambio, si no se utiliza "var" para iniciar la variable, esta podrá usarse en cualquier lugar del código. Por ello, zonadatos y boton se han iniciado sin la palabra reservada "var".
	zonadatos=document.getElementById("zonadatos");

	boton=document.getElementById("grabar");
	boton.addEventListener("click",agregarobjeto,false);

	var solicitud=indexedDB.open("mibase2");
	solicitud.onsuccess=function(e){bd=e.target.result;} // Estamos almacenando la base de datos en esta variable. Se está diciendo que el objeto que ha desencadenado el evento lo almacene en la variable "bd". Usando una función anónima.
	
	solicitud.onupgradeneeded=function(e){
		bd=e.target.result;
		bd.createObjectStore("gente", {keyPath: "clave"});
	} // Se crea el almacén de objetos en el caso de que sea necesario actualizar, porque quiero que se cree la tabla la primera vez que ejecuto el navegador. Pero si después de haber creado la BD y de haber creado el almacén de datos vuelvo a ejecutar el navegador con F5, pues que no lo haga, que no me cree la tabla.
}

function agregarobjeto(){
	var clave=document.getElementById("clave").value;
	var titulo=document.getElementById("texto").value;
	var fecha=document.getElementById("fecha").value;
	var transaccion=bd.transaction(["gente"],"readwrite");
	var almacen=transaccion.objectStore("gente");  // Almacena la transacción que se acaba de realizar.
	var agregar=almacen.add({clave: clave, titulo: titulo, fecha: fecha});

	agregar.addEventListener("success",mostrar,false);

	document.getElementById("clave").value="";
	document.getElementById("texto").value="";
	document.getElementById("fecha").value="";
}

function mostrar(){
	zonadatos.innerHTML="";

	var transaccion=bd.transaction(["gente"],"readonly");
	var almacen=transaccion.objectStore("gente");
	var cursor=almacen.openCursor();

	cursor.addEventListener("success",mostrardatos,false);
}

function mostrardatos(e){
	var cursor=e.target.result;

	if(cursor){
		zonadatos.innerHTML+="<div>" + cursor.value.clave + " - " + cursor.value.titulo + " - " + cursor.value.fecha + "</div>"; //cursor.value.variable. Con este código se extrae la información guardada en la variable indicada.

		cursor.continue(); // Con esto se le dice al cursor que avance.
	}
}

window.addEventListener("load",iniciar,false);