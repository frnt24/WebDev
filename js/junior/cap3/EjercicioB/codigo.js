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
		Memoria RAM: <b>${this.ram}gb</b><br>`;
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

class AltaGama extends Telefonos{
	constructor(color,peso,tamaño,resCamara,ram,resCamara2){
		super(color,peso,tamaño,resCamara,ram);
		this.resCamara2 = resCamara2;
		this.bloqueoPantalla = true;
	}
	altaGamaInfo(){
		return this.mobileInfo() + `Resolución de la cámara extra: <b>${this.resCamara2}</b><br>`;
	}
	camaraSuperLenta(){
		alert("La foto se ha realizado a cámara súper lenta.");
	}
	reconocimientoFacial(){
		if(this.bloqueoPantalla == true){
			alert("Ponga la cara delante de la cámara para que pueda reconocerse su cara.");
			this.bloqueoPantalla = false;
		}
		else{
			alert("La pantalla está desbloqueada.")
		}
	}

}

const telefono1 = new Telefonos("negro",100,6,"4K",3);
const telefono2 = new Telefonos("azul",80,5,"720p",2);
const telefono3 = new Telefonos("blanco",150,5.5,"1080p",4);
const telefonoAltaGama1 = new AltaGama("negro",150,6,"4K",6,"1080p");
const telefonoAltaGama2 = new AltaGama("rosa",190,6.4,"4K",5,"4K");

// telefonoAltaGama1.presionarBotonEncendido();
// telefonoAltaGama1.hacerFoto();
// telefonoAltaGama1.grabarVideo();
// telefonoAltaGama1.reiniciar();
// telefonoAltaGama1.presionarBotonEncendido();

document.write("El teléfono de alta gama 1 tiene las siguientes características:<br>" + telefonoAltaGama1.altaGamaInfo() + "<br>" + "El teléfono de alta gama 2 tiene las siguientes características:<br>" + telefonoAltaGama2.altaGamaInfo() + "<br>");
document.write("El teléfono 1 tiene las siguientes características:<br>" + telefono1.mobileInfo() + "<br>" + "El teléfono 2 tiene las siguientes características:<br>" + telefono2.mobileInfo() + "<br>" + "El teléfono 3 tiene las siguientes características:<br>" + telefono3.mobileInfo() + "<br>");

