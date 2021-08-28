class Telefonos{
	constructor(color,peso,tamaño,resCamara,ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resCamara = resCamara;
		this.ram = ram;
		this.encendido = false;
	}
	mobileInfo(){
		return `Color: <b>${this.color}</b><br>
		Peso: <b>${this.peso} gramos</b><br>
		Tamaño de la pantalla: <b>${this.tamaño} pulgadas</b><br>
		Resolución de la cámara: <b>${this.resCamara}</b><br>
		Memoria RAM: <b>${this.ram}gb</b><br><br>`;
	}
	presionarBotonEncendido(){
		
		if (this.encendido == false){
			alert("El teléfono se está encendiendo.");
			this.encendido = true;
		}
		else{
			alert("El teléfono se ha apagado.");
			this.encendido = false;	
		}
	}
	reiniciar(){

		if (this.encendido == true) {
			alert("El teléfono se está reiniciando.");
		}
		else{
			alert("El teléfon está apagado.");
		}
	}
	hacerFoto(){
		alert(`La foto se ha realizado con una resolución de ${this.resCamara}.`);
	}
	grabarVideo(){
		alert(`Grabando vídeo en ${this.resCamara}.`);
	}
}

const telefono1 = new Telefonos("negro",100,6,"4K",3);
const telefono2 = new Telefonos("azul",80,5,"720p",2);
const telefono3 = new Telefonos("blanco",150,5.5,"1020p",4);

// telefono1.presionarBotonEncendido();
// telefono1.hacerFoto();
// telefono1.grabarVideo();
// telefono1.reiniciar();
// telefono1.presionarBotonEncendido();

document.write("El teléfono 1 tiene las siguientes características:<br>" + telefono1.mobileInfo() + "El teléfono 2 tiene las siguientes características:<br>" + telefono2.mobileInfo() + "El teléfono 3 tiene las siguientes características:<br>" + telefono3.mobileInfo());
