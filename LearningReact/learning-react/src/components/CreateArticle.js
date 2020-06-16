import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

import Sidebar from './Sidebar';

class CreateArticle extends Component {

	titleRef = React.createRef();
	contentRef = React.createRef();

	state = {
		article: {},
		status: null
	};

	changeState = () => {
		this.setState({
			article: {
				title: this.titleRef.current.value,
				content: this.contentRef.current.value
			}
		});
		console.log(this.state);
	}

	saveArticle = (event) => {
		event.preventDefault();

		// Rellenar state con formulario
		this.changeState();
		// console.log(this.titleRef.current.value);
		// console.log(this.contentRef.current.value);
	}

	render() {
		return(
			<div className="center">
				<section id="content">
					<h1 className="subheader">Crear articulos</h1>

					<form className="mid-form" onSubmit={this.saveArticle}>
						<div className='form-group'>
							<label htmlFor='title'>Titulo</label>
							<input type="text" name="title" ref={this.titleRef} onChange={this.changeState}/>
						</div>

						<div className='form-group'>
							<label htmlFor='content'>Contenido</label>
							<textarea name="content" ref={this.contentRef} onChange={this.changeState}></textarea>
						</div>

						<div className='form-group'>
							<label htmlFor='file0'>Imagen</label>
							<input type="file" name="file0"/>
						</div>

						<input type="submit" value="Guardar" className="btn btn-success"/>

					</form>
				</section>
				<Sidebar/>
			</div>
		);
	}

}

export default CreateArticle;