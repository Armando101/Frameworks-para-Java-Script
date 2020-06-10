import React, {Component} from 'react';

class SectionPruebas extends Component{

	contador = 0;

	constructor(props) {
		super(props);

		// El state es la parte donde tenemos las propiedades que queremos que cargen de manera dinamica
		this.state = {
			contador: 0
		};
	}

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

	// Si declaramos los metodos con arrow functions no es necesario pasarle el bind(this)
	sumar = ()=> {
		/*this.contador = this.contador++;*/
		this.setState({
			contador: (this.state.contador+1)
		});
	}

	restar() {
		this.setState({
			contador: (this.state.contador-1)
		});
/*		this.contador = this.contador--;*/
	}

	render() {
		return(
			<section id="content">
				<h2 className='subheader'>Funciones y JSX</h2>	
				{this.helloWord('Armando', 22)}

				<h2 className='subheader'>Componentes</h2>	
			
				<h2 className='subheader'>Estado</h2>
				<p>Contador: {this.state.contador}</p>
				<p>
					<input type="button" value="Sumar" onClick={this.sumar}/>
					<input type="button" value="Restar" onClick={this.restar.bind(this)}/>
				</p>
          	</section>
		);
	}
}

export default SectionPruebas;