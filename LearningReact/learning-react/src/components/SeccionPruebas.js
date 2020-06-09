import React, {Component} from 'react';
import Peliculas from './Peliculas';

class SectionPruebas extends Component{
	helloWord(name, age) {
  		const introduce = (
	    	<div>
		      <h2>Hi, my name is {name}</h2>
		      <h3>I'm {age} years old </h3>
		      <h4>I'm Frontend Developer</h4>
		    </div>
  		);
		return introduce;
	}

	render() {
		return(
			<section id="content">
				<h2>Test Section</h2>	
				{this.helloWord('Armando', 22)}

	            <Peliculas/>
          	</section>
		);
	}
}

export default SectionPruebas;