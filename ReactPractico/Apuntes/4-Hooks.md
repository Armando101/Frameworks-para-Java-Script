## Hooks

Manejo el estado de mis videos con useState, en un principio videos es un array vacio. Videos sera la variable que estara en constrante cambio. setVideos es una funcion que nos permite cambiar el valor de la propiedad videos.
```js
const [ videos, setVideos ] = useState([]); 
```

__useEffect__ es un hook que permite ejecutar codigo cuando se monta, desmonta o actualiza nuestro componente
El primer arguamento es una funcion que se ejecuta cuando React monte o actualice el componente, esta funcion puede devolver otra funcion que se ejecutara cuando el componente se desmonte

El segundo argumento es un array que indica las propiedades que se deben cambiar para que React ejecute la funcion.
Si el omponente se actualiza pero las variables no cambiar, la funcion no se ejecuta
Si mandamos un array vacio la funcion se ejecutara al montar o desmontar el componente

```js
useEffect(() => {
	fetch(API)
	.then(response => response.json())
	.then(data => setVideos(data));
}, []);
```
