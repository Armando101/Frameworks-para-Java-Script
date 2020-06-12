import React, {Component} from 'react';

import Pelicula from './Pelicula';

class Peliculas extends Component {
	
	state = {
		peliculas: [
			{ title: 'Psycho', image: 'https://images-na.ssl-images-amazon.com/images/I/81nZt+t7dBL.jpg'},
			{ title: 'Harry Potter', image: 'https://es.web.img2.acsta.net/pictures/14/04/30/11/36/185120.jpg'},
			{ title: 'Requiem for a dream', image: 'https://images-na.ssl-images-amazon.com/images/I/51ySO%2Bc6DnL._AC_.jpg'}
		],
		name: 'Armando Rivera'
	}

	changeTitle = () => {
		const { peliculas } = this.state;
		peliculas[0].title = 'Psicosis'

		this.setState({
			peliculas
		})
	}

	render() {
		return(
			<div id='content' className="movies">
				<h2 className="subheader">Movies</h2>
				<p>Best movies ever, by {this.state.name}</p>
				<p><button onClick={this.changeTitle}>Change Psyco title</button></p>
				{/*Crear componente pelicula*/}
				{
					this.state.peliculas.map((pelicula, index)=> {
						return(
							<Pelicula key={index} pelicula={pelicula}/>
						);
					})
				}
			</div>
		);
	}
}

export default Peliculas;