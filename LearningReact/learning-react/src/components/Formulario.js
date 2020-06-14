import React, { Component } from 'react';

import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {
	render() {
		return(
			<div id="formulario">
				<Slider
			       title="Formulaio"
			       size="slider-small"
			    />
			    <div className="center">
					<div id="content">
						{/*Listado de articulos que vendran de la api*/}
					</div>
					<Sidebar
						blog="false"
					/>
				</div>
			</div>
		);
	}
}

export default Formulario;