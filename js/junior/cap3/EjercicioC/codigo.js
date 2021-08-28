class Apps{
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.cerrada = true;
		this.instalada = false;
	}
	appInfo(){
		return `Número de descargas: <b>${this.descargas}</b><br>
		Puntuación media: <b>${this.puntuacion} estrellas</b><br>
		Peso: <b>${this.peso}</b><br>`;
	}
	descargar(){
		if (this.instalada == false) {
			this.instalada = true;
			alert("La app se ha instalado correctamente.");
		}
	}
	desinstalar(){
		if (this.instalada == true) {
			this.instalada = false;
			alert("La app se ha desinstalado correctamente.");
		}
	}
	abrir(){
		if (this.cerrada == true && this.instalada == true){
			this.cerrada = false;
			alert("La app se ha iniciado correctamente.");
		}
	}
	cerrar(){
		if (this.cerrada == false && this.instalada == true){
			this.cerrada = true;
			alert("La app se ha cerrado correctamente.");
		}
	}
}

const app1 = new Apps("10","3/5","150");
const app2 = new Apps("300","2/5","60");
const app3 = new Apps("1.000","3.5/5","200mb");
const app4 = new Apps("10.000","3.9/5","400mb");
const app5 = new Apps("250","2/5","250mb");
const app6 = new Apps("2.000.000","4.5/5","600mb");
const app7 = new Apps("3.500.000","4.7/5","2000mb");


document.write("<b>App1:</b><br>" + app1.appInfo() + "<br>" + "<b>App2:</b><br>" + app2.appInfo() + "<br>" + "<b>App3:</b><br>" + app3.appInfo() + "<br>" + "<b>App4:</b><br>" + app4.appInfo() + "<br>" + "<b>App5:</b><br>" + app5.appInfo() + "<br>" + "<b>App6:</b><br>" + app6.appInfo() + "<br>" + "<b>App7:</b><br>" + app7.appInfo() + "<br>");

