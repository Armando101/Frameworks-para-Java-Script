import React, { Component } from 'react';

import Sidebar from './Sidebar';

class Formulario extends Component {

	nombreRef = React.createRef();
	apellidosRef = React.createRef();
	bioRef = React.createRef();
	generoHombreRef = React.createRef();
	generoMujerRef = React.createRef();
	generoOtroRef = React.createRef();

	state = {
		user: {}
	};

	recibirFormulario = (event) => {
		if (event.type === 'submit') {
			event.preventDefault(); // Esto es para que no recargue la pagina
		}
		
		let genero;
		if (this.generoHombreRef.current.checked) {
			genero = this.generoHombreRef.current.value;
		} else if (this.generoMujerRef.current.checked) {
			genero = this.generoMujerRef.current.value
		} else {
			genero = this.generoOtroRef.current.value
		}

		console.log(genero);

		const user = {
			name: this.nombreRef.current.value,
			lastname: this.apellidosRef.current.value,
			bio: this.bioRef.current.value,
			gender: genero
		}

		this.setState({
			user: user
		});

		// console.log('Formulario enviado');
		// console.log(this.nombreRef);
		// console.log(this.nombreRef.current.value);
		console.log(user);
	}

	render() {
		return(
			<div id="formulario">
			    <div className="center">
					<div id="content">
								<h1 className="subheader">Formulario</h1>
					      {/*Mostar datos del formulario*/}
					      {this.state.user.name &&
					      	<div id='user-data'>
					      		<p>Nombre: <strong>{this.state.user.name}</strong></p>
					      		<p>Apellido: <strong>{this.state.user.lastname}</strong></p>
					      		<p>Biografia: <strong>{this.state.user.bio}</strong></p>
					      		<p>Gender: <strong>{this.state.user.gender}</strong></p>
					      	</div>
					      }
					      <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
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
					          <input type="radio" name="genero" value="mujer"  ref={this.generoMujerRef}/> Mujer
					          <input type="radio" name="genero" value="otro"  ref={this.generoOtroRef}/> Otro
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