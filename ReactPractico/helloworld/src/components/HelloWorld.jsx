import React from 'react';

const HelloWorld = () => {
	const hello = 'Hello World!!!';
	const isTrue = true;

	return (
		<div className="HelloWorld">
			<h1>{hello}</h1>
			<h2>Curso esencial</h2>
			<img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
			{isTrue ? <h4>Esto es verdadero</h4> : <h5>Soy falso</h5>}
			{isTrue && <h4>Soy verdadero</h4>}
		</div>
	);
};

export default HelloWorld;