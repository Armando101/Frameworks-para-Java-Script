import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pelicula extends Component {

	checkAsFavorite = () => {
		this.props.checkFavorite(this.props.pelicula, this.props.indice);
	}

	render() {
		const { title, image } = this.props.pelicula;

		return(
			<article className="article-item" id="article-template">
				<h2>{title}</h2>
				<div className="image-wrap">
				<img src={image} alt={title}/>
				</div>

				<h2>Articulo de prueba</h2>
				<span className="date">
					Hace 5 minutos
				</span>
				<Link to="/blog">Leer más</Link>
				<button onClick={this.checkAsFavorite}>Check as favorite</button>
				<div className="clearfix"></div>
			</article>
		);
	}
}

export default Pelicula;