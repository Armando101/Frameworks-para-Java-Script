import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MyComponent from './components/MyComponent';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Search from './components/Search';

class Router extends Component {
	render() {
		return(
			<BrowserRouter>
			<Header/> 	
 		   		{/* Configurar Rutas y Paginas */}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/blog/articulo/:id" render={() => (
						<h1>Pagina Individual</h1>
					)} />
					<Route exact path="/blog/busqueda/:search" component={Search} />
					<Route path="/formulario" component={Formulario} />
					<Route path="/peliculas" component={Peliculas} />
					
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
			<div className="clearfix"></div>
	        <Footer/>
			</BrowserRouter>
		);
	}
}

export default Router;