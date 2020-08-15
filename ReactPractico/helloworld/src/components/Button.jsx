import React from 'react';

class Button extends React.Component {
	
	state = {
		count: 0
	}

	handleCklick = () => {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		const { count } = this.state;
		return (
			<div>
				<h1>Manzanas: {this.state.count}</h1>
				<h1>Manzanas: {count}</h1>
				<button type="button" onClick={this.handleCklick}>Agregar</button>
			</div>
		)
	}
}

/*
const Button = props => {
	const { text2 } = props;
	return (
		<div>
			<button type="button">{props.text}</button>
			<button type="button">{text2}</button>
		</div>
	);
};
*/

export default Button;