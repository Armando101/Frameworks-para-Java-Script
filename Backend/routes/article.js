'use strict'

var express = require('express');

// Importo el módulo creado para los controladores
var article_controller = require('../controllers/article');

// Llamamos al router esto para crear rutas
var router = express.Router();

var multiparty = require('connect-multiparty');

// Me permite ejecutar una acción antes de que se haga la petición
var md_upload = multiparty({uploadDir: './upload/articles'});


// Creamos las rutas de prueba
// Podemos elegir si son por post o por get
// El primer argumento es la ruta que usrá el usuario
// El segundo parámetro es la dirección del método
router.get('/test-de-controlador', article_controller.test);
router.post('/datos-curso', article_controller.datos_curso);


// Rutas útiles
// :last? es un parámetro opcional que nos permite obtener los últimos 5 artículos
// Ejemplo de petición localhost:3900/api/articles/1
// El método PUT se usa para actualizar
router.post('/save', article_controller.save);
router.get('/articles/:last?', article_controller.getArticles);
router.get('/article/:id', article_controller.getArticle);
router.put('/article/:id', article_controller.update);
router.delete('/article/:id', article_controller.delete);
router.post('/upload-image/:id', md_upload, article_controller.upload);

// Finalemente las exporto para utilizarlas en app.js
module.exports = router;
