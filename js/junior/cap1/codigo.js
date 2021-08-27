let dineroCofla = prompt("¿Cuánto dinero tienes, Cofla?");
dineroCofla = parseFloat(dineroCofla);

if (dineroCofla<0.6) {
	alert("Con el dinero que tienes no puedes adquirir ningún helado. Lo siento.");
}
else if (dineroCofla<1) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Palito de helado de agua. Con ello, te sobrarían: " + (dineroCofla-0.6).toFixed(2) + "€.");
}
else if (dineroCofla<1.6) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Palito de helado de crema. Con ello, te sobrarían: " + (dineroCofla-1).toFixed(2) + "€.");
}
else if (dineroCofla<1.7) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Bombón helado marca heladix. Con ello, te sobrarían: " + (dineroCofla-1.6).toFixed(2) + "€.");
}
else if (dineroCofla<1.8) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Bombón helado marca heladovich. Con ello, te sobrarían: " + (dineroCofla-1.7).toFixed(2) + "€.");
}
else if (dineroCofla<2.9) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Bombón helado marca helardo. Con ello, te sobrarían: " + (dineroCofla-1.8).toFixed(2) + "€.");
}
else {
	alert("Con ese dinero los helados más caros que puedes adquirir son el Potecito de helado con confites y el Pote de 1/4 KG. Con ello, te sobrarían: " + (dineroCofla-2.9).toFixed(2) + "€.");
}

let dineroRoberto = prompt("¿Cuánto dinero tienes, Roberto?");

if (dineroRoberto<0.6) {
	alert("Con el dinero que tienes no puedes adquirir ningún helado. Lo siento.");
}
else if (dineroRoberto<1) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Palito de helado de agua.");
}
else if (dineroRoberto<1.6) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Palito de helado de crema.");
}
else if (dineroRoberto<1.7) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Bombón helado marca heladix.");
}
else if (dineroRoberto<1.8) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Bombón helado marca heladovich.");
}
else if (dineroRoberto<2.9) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Bombón helado marca helardo.");
}
else {
	alert("Con ese dinero los helados más caros que puedes adquirir son el Potecito de helado con confites y el Pote de 1/4 KG.");
}

let dineroPedro = prompt("¿Cuánto dinero tienes, Pedro?");

if (dineroPedro<0.6) {
	alert("Con el dinero que tienes no puedes adquirir ningún helado. Lo siento.");
}
else if (dineroPedro<1) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Palito de helado de agua.");
}
else if (dineroPedro<1.6) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Palito de helado de crema.");
}
else if (dineroPedro<1.7) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Bombón helado marca heladix.");
}
else if (dineroPedro<1.8) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Bombón helado marca heladovich.");
}
else if (dineroPedro<2.9) {
	alert("Con ese dinero, el helado más caro que puedes adquirir es el Bombón helado marca helardo.");
}
else {
	alert("Con ese dinero los helados más caros que puedes adquirir son el Potecito de helado con confites y el Pote de 1/4 KG.");
}