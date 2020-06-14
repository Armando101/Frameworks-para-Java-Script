import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SeccionPruebas from './components/SeccionPruebas';
import MyComponent from './components/MyComponent';
import Peliculas from './components/Peliculas';
import Error from './components/Error';

class Router extends Component {
	render() {
		return(
			<BrowserRouter>

			{/* Configurar Rutas y Paginas */}
				<Switch>
					<Route exact path="/" component={Peliculas} />
					<Route path="/ruta-prueba" component={SeccionPruebas} />
					<Route path="/segunda-ruta" component={MyComponent} />
					
					<Route path="/pagina-1" render = {() =>(
							<section id="content">
								<h1>Hello World from Page 1</h1>
								<MyComponent saludo="Hola chaval"/>
							</section>
						)} />

					<Route exact path='/pruebas/:nombre/:apellidos?' render={(props) => {
						const {nombre, apellidos} = props.match.params;
						return (
							<div id='content'>
								<h1 class='subheader'>Test Page</h1>
								<h2>
									{apellidos 
										? (<span>Hola {nombre} {apellidos}</span>)
										: (<span>Hola {nombre}</span>)
									}
								</h2>
							</div>
						);
					}}/>
					
					<Route component={Error} />
				</Switch>
			
			</BrowserRouter>
		);
	}
}

export default Router;