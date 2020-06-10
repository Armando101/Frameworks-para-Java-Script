import React, {Component} from 'react';
import StaticMessage from './staticMesage';

class Pelicula extends Component {
	
	state = {
		peliculas: [
			{ title: 'Psycho', image: 'https://images-na.ssl-images-amazon.com/images/I/81nZt+t7dBL.jpg'},
			{ title: 'Harry Potter', image: 'https://es.web.img2.acsta.net/pictures/14/04/30/11/36/185120.jpg'},
			{ title: 'Requiem for a dream', image: 'https://images-na.ssl-images-amazon.com/images/I/51ySO%2Bc6DnL._AC_.jpg'}
		],
		name: 'Armando Rivera'
	}

	render() {
		return(
			<div id='content' className="movies">
				<h2 className="subheader">Movies</h2>
				<p>Best movies ever, by {this.state.name}</p>
				{/*Crear componente pelicula*/}
				{
					this.state.peliculas.map((pelicula, index)=> {
						return(
							<article className="article-item" id="article-template">
								<h2>{pelicula.title}</h2>
					            <div className="image-wrap">
					              <img src={pelicula.image} alt={pelicula.title}/>
					            </div>

					            <h2>Articulo de prueba</h2>
					            <span class="date">
					              Hace 5 minutos
					            </span>
					            <a href="#">Leer más</a>
					            <div class="clearfix"></div>
					        </article>
						);
					})
				}
			</div>
		);
	}
}

export default Pelicula;