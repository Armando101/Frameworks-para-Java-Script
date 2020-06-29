// console.log(saludar('Armando'));

/*const it = require('./framework.js').it;
const expect = require('./framework.js').expect;
const saludar = require('./app.js');*/

const { it } = require('./framework.js');
const { expect } = require('./framework.js');
const saludar = require('./app.js');

it('Funcion saluda', ()=> {
	expect(saludar('Armando')).toBe('Hola Armando');
});