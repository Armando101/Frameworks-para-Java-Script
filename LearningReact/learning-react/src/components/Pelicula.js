import React, { Component } from 'react';

class Pelicula extends Component {
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
	            <a href="#">Leer más</a>
	            <div className="clearfix"></div>
	        </article>
		);
	}
}

export default Pelicula;