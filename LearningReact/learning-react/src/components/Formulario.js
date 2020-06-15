import React, { Component } from 'react';

import Sidebar from './Sidebar';

class Formulario extends Component {

	nombreRef = React.createRef();
	apellidosRef = React.createRef();
	bioRef = React.createRef();
	generoHombreRef = React.createRef();
	generoMujerRef = React.createRef();
	generoOtroRef = React.createRef();

	recibirFormulario = (event) => {
		event.preventDefault(); // Esto es para que no recargue la pagina
		console.log('Formulario enviado');
		console.log(this.nombreRef);
		console.log(this.nombreRef.current.value);
	}

	render() {
		return(
			<div id="formulario">
			    <div className="center">
					<div id="content">
								<h1 className="subheader">Formulario</h1>
					      <form className="mid-form" onSubmit={this.recibirFormulario}>
					        <div className="form-group">
					          <label htmlFor="nombre">Nombre</label>
					          <input type="text" name="nombre" ref={this.nombreRef}/>
					        </div>

					        <div className="form-group">
					          <label htmlFor="nombre">Apellidos</label>
					          <input type="text" name="nombre" ref={this.apellidosRef}/>
					        </div>

					        <div className="form-group">
					          <label htmlFor="nombre">Biografía</label>
					          <textarea name="bio" rows="8" cols="80" ref={this.bioRef}></textarea>
					        </div>
					        <div className="form-group radio-buttons">
					          <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef}/> Hombre
					          <input type="radio" name="genero" value="hombre"  ref={this.generoMujerRef}/> Mujer
					          <input type="radio" name="genero" value="hombre"  ref={this.generoOtroRef}/> Otro
					        </div>
					        <div className="clearfix"></div>
					        <input className="btn btn-succes" type="submit" name="enviar" value="Enviar"/>

					      </form>
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