'use strict'

var express = require('express');

// Importo el módulo creado para los controladores
var article_controller = require('../controllers/article');

// Llamamos al router esto para crear rutas
var router = express.Router();

// Creamos las rutas
// Podemos elegir si son por post o por get
// El primer argumento es la ruta que usrá el usuario
// El segundo parámetro es la dirección del método
router.get('/test-de-controlador', article_controller.test);
router.post('/datos-curso', article_controller.datos_curso);

// Finalemente las exporto para utilizarlas en app.js
module.exports = router;
