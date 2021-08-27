let continuar = "1";

const sumar = (num1,num2) => {
	let resultado = (num1 + num2).toFixed(2);
	alert(`El resultado es: ${resultado}`);
}

const restar = (num1,num2) => {
	let resultado = (num1 - num2).toFixed(2);
	alert(`El resultado es: ${resultado}`);
}

const multiplicar = (num1,num2) => {
	let resultado = (num1 * num2).toFixed(2);
	alert(`El resultado es: ${resultado}`);
}

const dividir = (num1,num2) => {
	let resultado = (num1 / num2).toFixed(2);
	alert(`El resultado es: ${resultado}`);
}

const comenzar = () => {
	let operacion;
	let num1,num2;

	while (continuar == "1") {

		operacion = prompt("¿Qué tipo de operación quieres realizar? (1=suma; 2=resta; 3=multiplicación; 4=división)");

		if (operacion == "1" || operacion == "2" || operacion == "3" || operacion == "4") {

			num1 = parseFloat(prompt("Introduzca el primer número."));
			num2 = parseFloat(prompt("Introduzca el segundo número."));

			if (operacion == "1") {
				sumar(num1,num2);
			}
			else if (operacion == "2") {
				restar(num1,num2);
			}
			else if (operacion == "3") {
				multiplicar(num1,num2);
			}
			else if (operacion == "4") {
				dividir(num1,num2);
			}
		}

		else {
			alert("Debe introducir una de las operaciones aceptadas: sumar, restar, multiplicar o dividir");
			comenzar();
		}
		continuar = prompt("¿Quieres realizar alguna operación más? (1=Sí; 2=No)");
		while (continuar != "1" && continuar != "2") {
			alert("Por favor, introduzca un valor correcto. (1=Sí; 2=No)");
			continuar = prompt("¿Quieres realizar alguna operación más? (1=Sí; 2=No)");
		}
		if (continuar == "2") {
			alert("El programa finalizará a continuación. Si quieres volver a realizar una operación, recarga la página web. Adiós.");
		}
	}
}

window.addEventListener("load",comenzar,false);