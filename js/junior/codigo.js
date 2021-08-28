class Animal {
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`;
	}

	verInfo(){
	document.write(this.info + "<br>");
	}
}

class Perro extends Animal{
	constructor(especie,edad,color,raza){
	super(especie,edad,color);
	this.raza = null;
	}

	mostrar(){
		document.write(`Soy ${this.especie}, de raza ${this.raza}, tengo ${this.edad} años y soy de color ${this.color}.<br>`);
	}

	static ladrar(){
		alert("¡GUAU!");
	}

	set setRaza(nuevaRaza){
		this.raza = nuevaRaza;
	}

	get getRaza(){
		return this.raza;
	}
}

const perro1 = new Perro("perro",5,"marrón","Doberman");
const gato = new Animal("gato",2,"negro");
const pajaro = new Animal("pájaro",1,"verde");

perro1.setRaza = "Beagle";

document.write(perro1.getRaza);








