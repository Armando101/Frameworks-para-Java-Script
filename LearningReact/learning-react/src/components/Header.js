import React, {Component} from 'react';
import logo from '../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		return(
			<header id='header'>
			    <div className="center">
				    {/*Logo*/}
				    <div id='logo'>
				        <img src={logo} alt="Logotipo" className="app-logo"/>
				        <span id="brand">
				          <strong>Curso</strong>React
				        </span>
				    </div>
				    	{/*Menú*/}
				      	<nav id='menu'>
				        	<ul>
				          		<li>
				            		<NavLink to='/home' activeClassName='active'>Inicio</NavLink>
						        </li>
						        <li>
						            <NavLink to='/ruta-prueba' activeClassName='active'>Blog</NavLink>
						        </li>
						        <li>
						            <NavLink to='/segunda-ruta' activeClassName='active'>Formulario</NavLink>
						        </li>
						        <li>
						            <NavLink to='/pagina-1' activeClassName='active'>Página 1</NavLink>
						        </li>
						        <li>
						            <NavLink to='/pruebas/Armando' activeClassName='active'>Página 2</NavLink>
						        </li>
					    	</ul>
				      	</nav>
				      {/*Limpiar flotantes*/}
				      <div className="clearfix">
				      </div>
				    </div>
			</header>
		);
	}
}

export default Header;