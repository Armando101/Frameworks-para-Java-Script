// Este archivo está destinado para crear el servidor

'use strict'

// Cargar módulos de node para crear el servidor
	var express = require('express');
	var bodyParser = require('body-parser');

// Ejecutar express (http)
	var app = express();

// Cargar ficheros, rutas
	var article_routes = require('./routes/article');

// Middlewares (se ejecutan antes de que cargar una ruta o URL)
	app.use(bodyParser.urlencoded({extended:false})); // carga el body parser

	app.use(bodyParser.json()); // Convierte cualquier tipo de petición en archivo JSON

// Cargar el CORS

// Añadir prefijos a rutas / cargar rutas
	app.use('/api',article_routes)

// Ruta o método de prueba para el API REST

	// Las siguientes líneas se encuentran comentadas porque se encuentran en el archivo ./controles/article.js esto para un mejor performance
	/*
	app.get('/probando', (req, res)=> {
		console.log('Hola mundo desde mi servidor');

		// Esta función debe devolver algo
		
		return res.status(200).send({
			curso:'Frameworks en JS',
			autor: 'Armando Rivera',
		});

	});

	app.get('/datos-curso', (req, res)=> {
		return res.status(200).send(`
			<ul>
				<li>Node JS </li>
				<li>React JS </li>
				<li>Angular JS </li>
				<li>Vue JS </li>
			</ul>
		`);
	});
	*/


// Exportar el módulo (fichero actual)
	module.exports = app;
