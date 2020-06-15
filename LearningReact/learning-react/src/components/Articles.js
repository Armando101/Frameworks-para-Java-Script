import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from '../Global';
import axios from 'axios';

class Articles extends Component {

	url = Global.url;

	state = {
		articles: [],
		status: null
	}

	componentWillMount() {
		this.getArticles();
	}

	getArticles = () => {
		axios.get(`${this.url}/articles`)
			.then(res => {
				this.setState({
					articles: res.data.articles,
					status: 'success'
				});
				console.log(this.state);
			});
	}

	render() {
		if (this.state.articles.length >= 1) {		
			
			let listArticles = this.state.articles.map((article) => {
				return (
					 <article key={article.date} className="article-item" id="article-template">
			            <div className="image-wrap">
			            	{article.image !== null ? 
			            		(
				              		<img src={this.url + '/get-image/' + article.image} alt={article.title}/>
				              	): (
				              		<img src="https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt={article.title}/>
				              	)
			            	}
			            </div>

			            <h2>{article.title}</h2>
			            <span className="date">
			              <Moment locale="es" fromNow>{article.date}</Moment>
			            </span>
			            <a href="#">Leer más</a>
			            <div className="clearfix"></div>
			        </article>
				);
			});

			return (
				<div id='articles'>
					{listArticles}
				</div>
			);
		} else if (this.state.articles.length === 0 && this.state.status === 'success') {
			return (
				<div id='articles'>
					<h2 className="subheader">No hay artículos para mostrar</h2>
					<p>Todavía no hay contenido en esta sección</p>
				</div>
			);
		} else {
			return (
				<div id='articles'>
					<h2 className="subheader">Cargando</h2>
					<p>Espere mientras carga el contenido</p>
				</div>
			)
		}
	};
}

export default Articles;