import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from '../Global';

import Sidebar from './Sidebar';

class Article extends Component {

	url = Global.url;

	state = {
		article: false,
		status: null
	};

	componentWillMount() {
		this.getArticle();
	}

	getArticle = () => {
		const id = this.props.match.params.id;
		
		axios.get(this.url + '/article/' + id)
			.then(res => {
				this.setState({
					article: res.data.article,
					status: 'success'
				});
			}).catch( err => {
				console.log(err.response.data);
				this.setState({
					articles: false,
					status: 'success'
				})
			})
	}

	deleteArticle = (id) => {
		swal({
		  title: "¿Estás seguro que deseas eliminar?",
		  text: "Una vez eliminado no podrás volver a ver este artículo",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((willDelete) => {
		  if (willDelete) {
		    axios.delete(this.url + '/article/' + id)
			.then(res => {
				this.setState({
					article: res.data.article,
					status: 'deleted'
				});
			});
			
		    swal("Artículo eliminado correctamente", {
		      icon: "success",
		    });
		  } else {
		    swal("Tu artículo está a salvo");
		  }
		});
	}

	render() {

		if (this.state.status === 'deleted') {
			return <Redirect to='/blog'/>
		}

		const article = this.state.article;
		return(
			<div className="center">
			    <section id='content'>
			    	{this.state.article &&

			        <article className="article-item article-detail">
			            <div className="image-wrap">
			              {article.image !== null ? 
			            		(
				              		<img src={this.url + '/get-image/' + article.image} alt={article.title}/>
				              	): (
				              		<img src="https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt={article.title}/>
				              	)
			            	}
			            </div>

			            <h1 className="subheader">{this.state.article.title}</h1>
			            <span className="date">
			             <Moment locale="es" fromNow>{article.date}</Moment>
			            </span>
			            <p>
			              {article.content}
			            </p>
			            <button onClick={
			            	() => {
			            		this.deleteArticle(article._id)
			            	}
			            } className="btn btn-danger">Eliminar</button>
			            <Link to={'/blog/editar/'+article._id} className="btn btn-warning">Editar</Link>
			            <div className="clearfix"></div>
			        </article>
			      }

			      {!this.state.article && this.state.status === 'success' &&
			      	<div id="article">
			      		<h2 className="subheader">El articulo no existe</h2>
			      		<p>Intentalo mas tarde</p>
			      	</div>
			      }
			      {this.state.status === null &&
			      	<div id="article">
			      		<h2 className="subheader">Cargando</h2>
			      		<p>Espere unos segundos</p>
			      	</div>
			      }
			    </section>
			    <Sidebar/>
        </div>
		);
	}
}

export default Article;