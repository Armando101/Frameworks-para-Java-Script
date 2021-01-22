// activa mejoras del lenguaje de JS
'use strict'

var mongoose = require('mongoose');

// Exporto el módulo de mi servidor
var app = require('./app')
var port = 3900;

// Agregamos configuraciones para un mejor rendimiendo con mongoose

// Para trabajar con promesas, util para conectarnos a la DB
mongoose.Promise = global.Promise;

// Para desactivar los métodos de versiones anteriores de mongoose
mongoose.set('useFindAndModify', false);

// Realizamos la conexión a mongodb
//mongoose.connect(url, opciones).then(()=> {
// useNewUrlParser: permite usar la nueva sintaxis que tiene mongoose

mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true }).then(()=> {
		console.log('La conexión a la base de datos se ha realizado correctamente!!');

		// Crear servidor y escuchar peticiones HTTP
		app.listen(port, ()=> {
			console.log('Servidor corriendo en http://localhost:'+port);
		});

});