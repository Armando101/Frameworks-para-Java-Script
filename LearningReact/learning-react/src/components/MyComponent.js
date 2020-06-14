import React, { Component } from 'react';

class MyComponent extends Component {
	render() {

		const recipe = {
			name: 'Pizza',
			ingredients: ['Tomato', 'Cheese', 'Jam'],
			calories: 400
		};

		return(
			<div>
			{this.props.saludo &&
				<h3>{this.props.saludo}</h3>
			}
			{/*Si quiero incluir mas de una linea necesito meterlo en un contenedor
			Puede ser un React.fragment o un div*/}
				<h1> {'Recipe: ' + recipe.name} </h1>
				<h2> {'Calories: ' + recipe.calories} </h2>
				<ol>
					{
						recipe.ingredients.map((index, i)=> {
							console.log(index);
							return(
								<li key={i}>
									{index}
								</li>
							)
						})
					}
				</ol>
				<hr></hr>
			</div>
		);
	}
}

export default MyComponent;