// Este será el modelo para la app.
// Para este proyecto sólo trabajaremos con artículos

// Un modelo es una clase que nos da un molde para crear diferentes objetos.

'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema; // Propiedad para crear los modelos

// Declaramos el modelo junto con sus atributos
var article_schema = schema({
	titulo: String,
	content: String,
	date: { type: Date, default: Date.now },
	image: String
});

// Para usar el modelo necesitamos exportarlo
// model(nombreDelModelo, queEsquemaUtilizar)
module.exports = mongoose.model('Article', article_schema);

// mongoose cuando guarda un documento nuevo lo pluraliza y lo pone en minúsuclas
// Crea una colección llamada "articles" y ésta guarda documentos de este tipo y con estructura dentro de la colección