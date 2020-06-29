const saludar = nombre => (`Hola ${nombre}`);

console.log(saludar('Armando'));

const resuldado = saludar('Armando');
const esperado = 'Hola Armando';

if (resuldado === esperado) { console.log('Prueba exitosa') }
else { console.log('Prueba no exitosa') }
