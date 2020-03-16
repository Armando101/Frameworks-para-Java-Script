// Este archivo será una clase donde vamos a tener los métodos y rutas relacionados con los artículos de nuestra API

'use strict'

// Declaramos una variable que tendrá los métodos o rutas
var controller = {

	datos_curso: (req, res)=> {
		var var_hola = req.body.hola;

		return res.status(200).send({
			curso:'Frameworks en JS',
			autor: 'Armando Rivera',
			hola: var_hola
		});
	},

	test: (req, res) => {
		return res.status(200).send({
			message: 'Soy la acción test de mi controlador de articulos'
		});
	}

}; // end controller

// Exportamos los controladores para usarlos en routers/article.js
module.exports = controller;