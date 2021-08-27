/* Objeto vídeo:

    – Propiedades:

        - Duration: duración del vídeo en segundos.
        - currentTime: tiempo actual del vídeo (se encuentra en el segundo 1? en el segundo 3?...)
        - Paused: si el vídeo está pausado o no (true o false).
        - Ended: si el vídeo está finalizado o no (true o false).
    
    – Métodos:

        - Play()
        - Pause()
        */

var miaudio, reproducir, barra, progreso, maximo;

maximo=600; //Se le da valor 600 porque es el ancho total que se le dio a la barra desde CSS.

function comenzar(){
    miaudio=document.getElementById("miaudio");
    reproducir=document.getElementById("play");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");

    reproducir.addEventListener("click", clicando, false);

    barra.addEventListener("click", adelantando, false);
}

function clicando(){
    if((miaudio.paused==false) && (miaudio.ended==false)){
        miaudio.pause();
        reproducir.innerHTML="Play";
    }

    else{ //El usuario pulsará en el play. Al pulsar en el play, el código entra en el else, el vídeo se empieza a reproducir, cambia el texto del botón y después llamamos a la función estado_barra una vez por segundo (1000ms).
        miaudio.play();
        reproducir.innerHTML="Pause";

        bucle=setInterval(estado_barra, 10); //setInterval tiene dos parámetros: setInterval(1, 2). 1=función a la que se quiere llamar; 2=con cuánta frecuencia (en milisegundos) se quiere llamar a esta función.
    }


}

function estado_barra(){
    if(miaudio.ended==false){
        var total=parseInt(miaudio.currentTime*maximo/miaudio.duration); //parseInt convierte un string en un valor entero.
        progreso.style.width=total+"px"; //en JavaScript el símbolo + se utiliza como concatenador, para unir un valor numérico con un string.
    }
}

function adelantando(posicion){ //Se necesita que al pulsar en un lugar de la barra, el vídeo vaya a ese punto en concreto y que la barra también vaya a ese punto. En primer lugar, se necesita saber en qué punto de la pantalla se encuentra el ratón, ya que si se pulsa ese punto en concreto se necesita capturar esa posición al pulsar. Eso se puede conseguir con la propiedad pageX (devuelve el punto en el que se encuentra el puntero del ratón en el eje de las X desde el margen izquierdo). Pero necesitamos saber el punto concreto en relación con la medida establecida para la barra. Ello se hace con la propiedad offsetLeft (por ejemplo, si se aplica al elemento barra nos dice la distancia que hay desde el borde izquierdo de la página hasta donde comienza la barra). Por tanto, si se resta el valor obtenido por la propiedad pageX al valor obtenido por la propiedad offsetLeft, se obtiene la medida concreta desde el inicio de la barra hasta el punto en el que se ha pulsado con el ratón.

    // if((miaudio.paused==false) && (miaudio.ended==false)){
        var ratonX=posicion.pageX-barra.offsetLeft; //En ratonX se almacenará la posición dentro de la barra donde se va a hacer clic.

        var nuevo_tiempo=ratonX*miaudio.duration/maximo;

        miaudio.currentTime=nuevo_tiempo;

        progreso.style.width=ratonX+"px";
    /* } 
    
    Al quitar el if se consigue que la función se ejecute tanto si el vídeo está reproduciéndose como si no, pudiendo ir directamente al punto del vídeo que se desea*/

}

window.addEventListener("load", comenzar, false);