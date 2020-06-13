import React, { Component } from 'react';

class Pelicula extends Component {

	checkAsFavorite = () => {
		this.props.checkFavorite(this.props.pelicula, this.props.indice);
	}

	render() {
		const pelicula = this.props.pelicula;
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
				<a href="#">Leer más</a>
				<button onClick={this.checkAsFavorite}>Check as favorite</button>
				<div className="clearfix"></div>
			</article>
		);
	}
}

export default Pelicula;