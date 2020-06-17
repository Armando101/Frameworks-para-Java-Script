import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import Global from '../Global';

import Sidebar from './Sidebar';

// 1.- Recoger el id del artículo a editar
// 2.- Crear un método para sacar ese objeto del backend
// 3.- Rellenar el formulario con los datos
// 4.- Actualizar el objeto haciendo una petición al backend

class EditArticle extends Component {

	url = Global.url;

	articleId = null;

	titleRef = React.createRef();
	contentRef = React.createRef();

	state = {
		article: {},
		status: null,
		selectedFile: null
	};

	componentWillMount() {
		this.articleId = this.props.match.params.id;
		this.getArticle(this.articleId);
		this.validator = new SimpleReactValidator({
			messages: {
				required: 'Este campo es requerido'
			}
		});
	}

	getArticle = (id) => {
			console.log(this.url);
		axios.get(this.url + '/article/' + id)
		.then(res => {
			this.setState({
				article: res.data.article
			});
		})
		.catch(err => {
			console.log('Fallo')
			console.log(id);
		});
	}

	changeState = () => {
		this.setState({
			article: {
				title: this.titleRef.current.value,
				content: this.contentRef.current.value,
				image: this.state.article.image
			}
		});
		//console.log(this.state);
	}

	saveArticle = (event) => {
		event.preventDefault();

		// Rellenar state con formulario
		this.changeState();
		// console.log(this.titleRef.current.value);
		// console.log(this.contentRef.current.value);
		
		// Hacer petición post
		if (this.validator.allValid()) {
		axios.put(this.url + '/article/'+this.articleId, this.state.article)
					.then(res => {
						if (res.data.article) {
							this.setState({
								article: res.data.article,
								status: 'waiting'
							});

							swal(
								'Artículo editado',
								'El artículo ha sido editado',
								'success'
							);

							// Upload image
							if (this.state.selectedFile !== null) {
								// Get id from the save article
								let articleId = this.state.article._id;

								// Create from data and add file
								const formData = new FormData();

								formData.append(
									'file0',
									this.state.selectedFile,
									this.state.selectedFile.name
								);

								// Peticion
								axios.post(this.url + '/upload-image/' + articleId, formData)
									.then(res => {
										if (res.data.article) {
											this.setState({
												article: res.data.article,
												status: 'success'
											});
										} else {
											this.setState({
												article: res.data.article,
												status: 'failed'
											});
										}
									});

							} else {
								this.setState({
									status: 'success'
								});
							}

						} else {
							this.setState({
								status: 'failed'
							});
						}
					})
					.catch(err => {
						swal(
								'Error al editar el artículo',
								'El artículo no ha sido editado',
								'error'
							);
					});
		} else {
			this.validator.showMessages();
			this.forceUpdate();
			this.setState({
					status: 'failed'
			});
		}
	}

	fileChange = (event) => {
		// console.log(event);
		this.setState({
			selectedFile: event.target.files[0]
		});

		console.log(this.state);
	}

	render() {
		console.log(this.state.article);
		if (this.state.status === 'success') {
			return <Redirect to='/blog'/>
		}

		const article = this.state.article;

		return(
			<div className="center">
				<section id="content">
					<h1 className="subheader">Editar artículo</h1>

					{this.state.article.title &&
						<form className="mid-form" onSubmit={this.saveArticle}>
							<div className='form-group'>
								<label htmlFor='title'>Titulo</label>
								<input type="text" name="title" defaultValue={article.title}ref={this.titleRef} onChange={this.changeState}/>

								{/*{this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}*/}
								{this.validator.message('title', this.state.article.title, 'required')}

							</div>

							<div className='form-group'>
								<label htmlFor='content'>Contenido</label>
								<textarea name="content" defaultValue={article.content} ref={this.contentRef} onChange={this.changeState}></textarea>
								{this.validator.message('content', this.state.article.title, 'required')}
							</div>

							<div className='form-group'>
								<label htmlFor='file0'>Imagen</label>
								<div className="image-wrap">
			              {article.image !== null ? 
			            		(
				              		<img src={this.url + '/get-image/' + article.image} alt={article.title} className="thumb"/>
				              	): (
				              		<img src="https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt={article.title} className="thumb"/>
				              	)
			            	}
			            </div>
								<input type="file" name="file0" onChange={this.fileChange}/>
							</div>

							<div className="clearfix"></div>
							<input type="submit" value="Guardar" className="btn btn-success"/>

						</form>
					}
					{!this.state.article.title &&
						<h1 className="subheader">Cargando...</h1>
					}
				</section>
				<Sidebar/>
			</div>
		);
	}

}

export default EditArticle;