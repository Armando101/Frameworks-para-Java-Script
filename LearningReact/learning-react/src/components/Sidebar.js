import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Sidebar extends Component {

	searchRef = React.createRef();

	state = {
		search: "",
		redirect: false
	};

	redirectToSearch = () => {

		this.setState({
			search: this.searchRef.current.value,
			redirect: true
		});
	}

	render() {

		if (this.state.redirect) {
			return(
				<Redirect to={'/redirect/'+this.state.search} />
			);
		}

		return(
			<aside id="sidebar">
				{this.props.blog === "true" &&
			    <div id="nav-blog" className="sidebar-item">
						<h3>Puedes hacer esto</h3>
						<a href="#" className="btn btn-succes">Crear artículo</a>
			    </div>	
				}
			    <div id="search" className="sidebar-item">
					<h3>Buscador</h3>
					<p>Encuentra el artículo que buscas</p>
					<form onSubmit={this.redirectToSearch}>
						<input className='input-text' type="text"name="search" ref={this.searchRef}/>
						<input className="btn" type="submit" name="submit" value="Buscar"/>
			        </form>
			    </div>
			</aside>
		);
	}
}

export default Sidebar;