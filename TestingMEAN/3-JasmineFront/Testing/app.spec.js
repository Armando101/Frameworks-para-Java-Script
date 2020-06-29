let x = true;
let a = {};
let b = {};

describe('Verificar que la variable es true', ()=> {

	it('Funcion saluda', ()=> {
		expect(saludar('Armando')).toBe('Hola Armando');
	});

	it('X es true', ()=> {
		expect(x).toBeTruthy();
	});

	it('Objetos iguales', ()=> {
		expect(a).toBe(b);
	});

});
