/* MÉTODOS de la API Geolocation:

    – getCurrentPosition(ubicación,errores,configuración): nos dará la posición del usuario.

    – watchPosition(ubicación,errores,configuración): hace lo mismo que el anterior, pero este tiene la posibilidad de refrescar la posición del usuario cada cierto tiempo. Si por ejemplo un usuario se está moviendo con un dispositivo móvil.

    – clearWatch(id): resetea el método anterior.

    "configuración", que puede definirse en los dos primeros métodos vistos, contiene tres PROPIEDADES:

        - enableHighAccuracy: booleano. Si es true, se utilizarán sistemas GPS para la localización. Por defecto es false.

        - Timeout: tiempo en milisegundos para llevar a cabo la localización. Si no se obtiene, devuelve TIMEOUT.

        - maximumAge: determina si ha de ir a la caché a buscar la última actualización.

OBJETOS retornados por la API Geolocation:

    – Position: objeto que es generado por los métodos getCurrentPosition y watchPosition si la localización tiene éxito. Este objeto tiene las siguientes propiedades:

        - Coords: contiene un conjunto de valores que determinan la posición:

            - Latitude
            - Longitude
            - Altitude
            - Accuracy
            - altitudeAccuracy
            - Heading
            - Speed
        
        - Timestamp: propiedad que indica el momento exacto en el que se determinó la posición.

OBJETOS retornados por la API Geolocation:

    – Error: objeto que es generado por los métodos getCurrentPosition y watchPosition si la localización no tiene éxito.

PROPIEDADES del OBJETO ERROR:

    – Code: representado por tres constantes:

        1: permiso denegado
        2: ubicación no disponible
        3: tiempo para detectar ubicación excedido
    
    – Message: dependiendo del error generado
*/

function comenzar(){
    var miboton=document.getElementById("dame_ubicacion");
    miboton.addEventListener("click",obtener,false);
}

function obtener(){
    var parametros={enableHighAccuracy:true, timeout:10000, maximumAge:60000};
    navigator.geolocation.getCurrentPosition(mostrar_posicion,gestion_errores,parametros);
    // navigator.geolocation.watchPosition(mostrar_posicion,gestion_errores,parametros);
}

function mostrar_posicion(posicion){
    var ubicacion=document.getElementById("ubicacion");
    var miubicacion="";
    miubicacion+="Latitud: " + posicion.coords.latitude +  "<br>";
    miubicacion+="Longitud: " + posicion.coords.longitude + "<br>";
    miubicacion+="Exactitud: " + posicion.coords.accuracy + "<br>";
    // var mimapa="http://maps.google.com/maps/api/staticmap?center=" + posicion.coords.latitude + "," + posicion.coords.longitude + "," + "&zoom=12&size=400x400&sensor=false&markers=" + posicion.coords.latitude + "," + posicion.coords.longitude;
    
    // ubicacion.innerHTML="<img src='" + mimapa + "'>";
    ubicacion.innerHTML=miubicacion;
    
    // ubicacion.innerHTML=latitud;
}

function gestion_errores(error){
    // alert("Ha habido un error" + error.code + " " + error.message);
    if(error.code==1){
        alert("Debes permitir el uso de la geolocalizacxión en tu navegador");
    }
}
window.addEventListener("load",comenzar,false);