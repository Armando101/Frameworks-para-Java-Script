import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
	const API = 'http://localhost:3000/initalState';

	// Manejo el estado de mis videos con useState, en un principio videos es un array vacio
	const [ videos, setVideos ] = useState([]); 

	// useEffect es un hook que permite ejecutar codigo cuando se monta, desmonta o actualiza nuestro componente
	// El primer arguamento es una funcion que se ejecuta cuando React monte o actualice el componente, esta funcion puede devolver otra funcion que se ejecutara cuando el componente se desmonte

	// El segundo argumento es un array que indica las propiedades que se deben cambiar para que React ejecute la funcion.
	// Si el omponente se actualiza pero las variables no cambiar, la funcion no se ejecuta
	// Si mandamos un array vacio la funcion se ejecutara al montar o desmontar el componente
	useEffect(() => {
		fetch(API)
		.then(response => response.json())
		.then(data => setVideos(data));
	}, []);

	console.log(videos);

	return (
		<div className="App">
			<Header/>
			<Search/>

			<Categories title="Mi lista">
				<Carousel>
					<CarouselItem/>
					<CarouselItem/>
					<CarouselItem/>
					<CarouselItem/>
				</Carousel>
			</Categories>

			<Categories title="Tendencias">
				<Carousel>
					<CarouselItem/>
					<CarouselItem/>
				</Carousel>
			</Categories>

			<Categories title="Originales">
				<Carousel>
					<CarouselItem/>
					<CarouselItem/>
					<CarouselItem/>
				</Carousel>
			</Categories>

			<Footer/>

		</div>
	)
}

export default App;