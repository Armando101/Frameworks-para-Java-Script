import React, {Component} from 'react';
import StaticMessage from './staticMesage';

class Pelicula extends Component {
	render() {
		return(
			<div id='movies'>
				<h4>I'm Movies component</h4>
				<StaticMessage/>
			</div>
		);
	}
}

export default Pelicula;