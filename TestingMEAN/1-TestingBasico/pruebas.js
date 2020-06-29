const saludar = nombre => (`Hola ${nombre}`);

console.log(saludar('Armando'));

const resuldado = saludar('Armando');
const esperado = 'Hola Armando';

if (resuldado === esperado) { 
	console.log('Prueba exitosa');
} else { 
	throw new Error('Prueba no exitosa');
	console.error('Prueba no exitosa');
}

function expect(actual) {
	
	return {
		toBe(expect) {
			if (actual !== expect) {
				throw new Error('Prueba no exitosa');
			}
		}
	}
}

function it(title, callback) {
	try {
		callback();
		console.log(`✔️ ${title}`)
	} catch(error) {
		console.error(`✖️ ${title}`)
	}
}

it('Funcion saluda', ()=> {
	expect(saludar('Armando')).toBe('Hola Armando');
});