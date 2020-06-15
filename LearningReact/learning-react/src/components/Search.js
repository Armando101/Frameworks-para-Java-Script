import React, { Component } from 'react';

import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Search extends Component {

	state = {
		articles: {},
		status:  null
	}

	render() {
		const busqueda = this.props.match.params.search;
		return(
			<div id="search">
				<Slider
			       title={"Busqueda: " + busqueda}
			       size="slider-small"
			    />
			    <div className="center">
					<div id="content">
						{/*Listado de articulos que vendran de la api*/}
						<Articles
							search={busqueda}
						/>
					</div>
					<Sidebar
						blog="true"
					/>
				</div>
			</div>
		);
	}
}

export default Search;