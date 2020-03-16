// Este archivo será una clase donde vamos a tener los métodos y rutas relacionados con los artículos de nuestra API

'use strict'

// Importamos el módulo validatos
var validator = require('validator');
// Importamos el módulo donde se encuentra el modelo de los artículos
var Article = require('../models/article');

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
	},

	// Método que nos permitirá crear un nuevo artículo
	// Este método guardará los artículos en la base de datos
	save: (req, res) => {
		// Recoger parámetros por POST
		var params = req.body;

		// Validar datos (validator)
		try {
			// Será true cuando params.title no esté vacío
			var validate_title = !validator.isEmpty(params.title);
			var validate_content = !validator.isEmpty(params.content);

		// En dado caso de que no se cumpla la validación mostramos un mensaje de error
		}catch(err) {
			return res.status(200).send({
				status: 'error',
				message: 'Faltan datos por enviar!!!'
			});
		}

		// Si la validación resultó exitosa hace lo siguiente
		if(validate_title && validate_content) {
			// Crear el objeto a guardar
				// Usamos el modelo article
				var article = new Article();

			// Asignar valores
			article.title = params.title;
			article.content = params.content;
			article.image = null;

			// Guardar el artículo
			// Usamos el método save, le podemos pasar una función de callBack
			article.save((err, articleStored)=>{
				// Si ocurre un error
				if(err || !articleStored) {
					return res.status(200).send({
						status:'error',
						message: 'El artículo no se ha guardado'
					});
				}
					
				// Devolver una respuesta
				return res.status(200).send({
					status: 'succes',
					article: articleStored
				});
				

			});


		} else {
			return res.status(200).send({
				status: 'error',
				message: 'Faltan datos por enviar'
			});
		}
	},

	getArticles: (req, res) => {

		// Obtengo los artículos que tengo en la base de datos.
		var query = Article.find({});

		// Recuperamos el parámetro opcional last
		var last = req.params.last;

		// Si proporciona la variable las muestra sólo los últimos 5 artículos
		if(last || last != undefined) {
			query.limit(5);
		}

		// Find, no colocamos condiciones de búsqueda
		// _id ordena los artículos de más antiguo a más nuevo
		// -_id los ordena de más nuevo a más antiguo
		query.sort('-_id').exec((err, articles) => {
			
			if (err) {
				return res.status(500).send({
					status: 'error',
					message: 'Error al devolver los articulos !!!'
				});					
			}

			if (!articles) {
				return res.status(404).send({
					status: 'error',
					message: 'No hay artículos para mostrar !!!'
				});					
			}

			return res.status(200).send({
				status: 'succes',
				articles
			});
		});
	},

	// Método para obtener un único artículo
	getArticle: (req, res) => {
		// Recoger el id de la URL
		var article_id = req.params.id;

		// Comprobar que existe
		if (!article_id || article_id == null) {
			return res.status(404).send({
				status: 'error',
				message: 'No existe el artículo !!!'
			});
		}

		// Buscar el artículo

		Article.findById(article_id, (err, article)=> {

			if (err || !article) {
				return res.status(404).send({
					status: 'error',
					message: 'No existe el artículo !!!'
				});				
			}
		
			// Devolver en JSON
			return res.status(200).send({
				status: 'succes',
				article
			});		
		});
	},

	// Método para actualizar datos
	update: (req, res) => {
		// Recoger el id del artículo por la url (GET)
		var article_id = req.params.id;

		// Recoger los datos que llegan por PUT (POST)
		var params = req.body;

		// Validar datos
		try  {
			var validate_title = !validator.isEmpty(params.title);
			var validate_content = !validator.isEmpty(params.content);
		}catch(err) {
			return res.status(404).send({
				status: 'error',
				message: 'Faltan datos por enviar !!!'
			});
		}

		// Si se validó correctamente
		if(validate_title && validate_content) {
			// Find and update
			
			// Utilizo el modelo (Article)
			// Actualiza los únicamente los parámetros que tengo definidos
			// {new:true} indico que muestre el articulo nuevo (actualizado)
			Article.findOneAndUpdate({_id: article_id}, params, {new:true}, (err, articleUpdate)=> {
				if (err) {
					return res.status(500).send({
						status: 'error',
						message: 'Error al actualizar'
					});
				}
				
				if (!articleUpdate) {
					return res.status(404).send({
						status: 'error',
						message: 'No se encontró el artículo'
					});
				}

				return res.status(200).send({
					status: 'succes',
					article: articleUpdate
				});
			});

		// Si hubo un error en la validación
		} else {
			return res.status(404).send({
				status: 'error',
				message: 'Validación incorrecta'
			});
		}
	},

	delete: (req, res) => {
		// Recoger el id de la URL
		var article_id = req.params.id;

		// Find and delete
		Article.findOneAndDelete({_id: article_id}, (err, articleRemoved) => {
			if(err) {
				return res.status(500).send({
					status: 'error',
					message: 'Error al borrar !!!'
				});
			}

			if (!articleRemoved) {
				return res.status(404).send({
					status: 'error',
					message: 'No se ha borrar el articulo, posiblemente no existe'
				});
			}

			return res.status(200).send({
				status: 'succes',
				article: articleRemoved
			});

		});
	}

}; // end controller

// Exportamos los controladores para usarlos en routers/article.js
module.exports = controller;