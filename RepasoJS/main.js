var nombre = "Armando Rivera";
var altura = 180;

// Imprimir en pantalla
document.write(nombre)
document.write(altura)

var concatenacion = nombre + " " + altura

/*
// Imprimir en un div
var datos = document.getElementById('datos');
datos.innerHTML = concatenacion;

// Puedo hacer plantilas e incluir código html
datos.innerHTML = `
	<h1>Soy la caja de datos </h1>
	<h2> Mi nombre es ${nombre}</h2>
	<h3> Mi altura es ${altura} cm</h3>`
	;

if (altura >= 180) {
	datos.innerHTML += '<h1> Eres una persona alta</h1>';
} else {
	datos.innerHTML += '<h1> Eres una persona Bajita </h1>';
}

for (var i = 2000; i<= 2020; i++) {
	datos.innerHTML += "<h2> Estamos en el año: "+i;
}
*/

// Funciones
function MuestraMiNombre(nombre, altura) {
	var misDatos = `
		<h1>Soy la caja de datos </h1>
		<h2> Mi nombre es ${nombre}</h2>
		<h3> Mi altura es ${altura} cm</h3>
		<br/>`
		;
	return misDatos;
}

function Imprimir() {
	var datos = document.getElementById('datos');
	datos.innerHTML = MuestraMiNombre("Armando Rivera", 180);
}

Imprimir();

// Arreglos

var nombres = ['Armando', 'Victor', 'Joaquín'];
/*
for(i = 0; i<nombres.length; i++) {
	document.write(nombres[i] + '<br/>')
}*/

nombres.forEach(function (nombre) {
	document.write('<br/>' + nombre);
});

// Objetos JSON
var coche = {
	modelo: "Mercedes Clase A",
	maxima: 500,
	antiguedad: 2020,

	mostrarDatos() {
		console.log(this.modelo, this.maxima, this.antiguedad);
	}
};

// Accedemos a los atributos del objeto con un punto
document.write("<h1>" + coche.modelo + "</h1>");

// Ejecutamos los metodos del objeto
coche.mostrarDatos();

// Promesas
var saludar = new Promise((resolve, reject) => {
	setTimeout( ()=> {
		let saludo = "Hola muy buenas a todos Chavales!!!";
		// saludo = false;
		if (saludo) {
			resolve(saludo);
		} else {
			reject("No hay saludo disponible");
		}

	}, 2000)
});

// Ejecuta la promesa y cuando obtengas un resultado lanza el método then
saludar.then(resultado => {
	alert(resultado);
})
.catch(err => {
	alert(err);
});