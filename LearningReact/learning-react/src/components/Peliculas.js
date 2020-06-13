import React, {Component} from 'react';

import Pelicula from './Pelicula';

class Peliculas extends Component {
	
	state = {
		peliculas: [
			{ title: 'Psycho', image: 'https://images-na.ssl-images-amazon.com/images/I/81nZt+t7dBL.jpg'},
			{ title: 'Harry Potter', image: 'https://es.web.img2.acsta.net/pictures/14/04/30/11/36/185120.jpg'},
			{ title: 'Requiem for a dream', image: 'https://images-na.ssl-images-amazon.com/images/I/51ySO%2Bc6DnL._AC_.jpg'}
		],
		name: 'Armando Rivera',
		favorita: {	}
	}

	changeTitle = () => {
		const { peliculas } = this.state;
		peliculas[0].title = 'Psicosis'

		this.setState({
			peliculas
		})
	}

	favorite = (pelicula, indice) => {
		// console.log('Check as favorite');
		console.log(pelicula, indice);

		this.setState({
			favorita: pelicula
		})
	}

	render() {

		/*
			
			const pStyle = {
					background: 'green',
					color: 'white',
					padding: '10px'
			}
		*/

		return(
			<div id='content' className="movies">
				<h2 className="subheader">Movies</h2>
				<p>Best movies ever, by {this.state.name}</p>
				<p><button onClick={this.changeTitle}>Change Psyco title</button></p>
				{ this.state.favorita.title &&
					<p className="favorita" style={{
											background: 'green',
											color: 'white',
											padding: '10px'
										}}>
						<strong>La pelicula favorita es: </strong>
						<span>{this.state.favorita.title}</span>
					</p>
				}

				{/*Crear componente pelicula*/}
				{
					this.state.peliculas.map((pelicula, index) => {
						return(
							<Pelicula
								key={index}
								pelicula={pelicula}
								indice={index}
								checkFavorite={this.favorite}
							/>
						);
					})
				}
			</div>
		);
	}
}

export default Peliculas;