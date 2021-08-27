let entradaGratis = false;

const validarCliente = hora => {
	// let hoy = new Date();
	// let hora = hoy.getHours() + ":" + hoy.getMinutes();
	let edad = prompt("¿Qué edad tienes?");

	if (edad >= 0 && edad < 18) {
		alert("Solo se aceptan mayores de edad y, por tanto, no puedes pasar.");
	}
	else if (edad >= 18 && edad <= 150) {
		if (hora >= 2 && hora < 7 && !entradaGratis) {
			alert("Puedes pasar gratis.");
			entradaGratis = true;
		}
		else {
			alert("Puedes pasar, pero tienes que pagar la entrada");
		}
	}
	else {
		alert("Has introducido una edad incorrecta. Solo se aceptan edades comprendidas entre 0 y 150 años. Por favor, vuelva a intentarlo.");
	}
}


validarCliente(23);
validarCliente(1);
validarCliente(22);
validarCliente(2);
validarCliente(4);
validarCliente(6);