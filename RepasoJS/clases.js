class Coche {
	constructor(modelo, velocidad, antiguedad) {
		this.modelo = modelo;
		this.velocidad = velocidad;
		this.antiguedad = antiguedad;
	}

	aumentar_velocidad() {
		this.velocidad += 1;
	}
	reducir_velocidad() {
		this.velocidad -= 1;
	}
}


var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Audi', 100, 2018);
var coche3 = new Coche('Mercedes', 200, 2017);
var coche4 = new Coche('Renault', 200, 2017);

console.log(coche1)

coche1.aumentar_velocidad();
coche1.aumentar_velocidad();
coche1.aumentar_velocidad();

console.log(coche1)

// Herencia

class Autobus extends Coche {
	constructor(modelo, velocidad, antiguedad) {
		super(modelo, velocidad, antiguedad);
		this.altura = 5;
	}

	mostrar_altura() {
		return "La altura del bus es: " + this.altura;
	}
}

var autobus1 = new Autobus("Pegasus", 200, 2017);
console.log(autobus1);
console.log(autobus1.mostrar_altura());