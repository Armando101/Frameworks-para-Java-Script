import React, {Component} from 'react';

class Sidebar extends Component {
	render() {
		return(
			<aside id="sidebar">
			    <div id="nav-blog" className="sidebar-item">
					<h3>Puedes hacer esto</h3>
					<a href="#" className="btn btn-succes">Crear artículo</a>
			    </div>
			    <div id="search" className="sidebar-item">
					<h3>Buscador</h3>
					<p>Encuentra el artículo que buscas</p>
					<form>
						<input className='input-text' type="text"name="search"/>
						<input className="btn" type="submit" name="submit" value="Buscar"/>
			        </form>
			    </div>
			</aside>
		);
	}
}

export default Sidebar;