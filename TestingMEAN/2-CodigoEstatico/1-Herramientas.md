## Herramientas de análisis estático de código

- __Linters__: Herramientas de alertas. Nos ayudan a seguir las reglas o convenciones de nuestros equipos sin tener que memorizar todo el libro de reglas; solo debemos programar y asegurarnos de que estas herramientas revisen nuestro código.

Por ejemplo: ESLint, JSHint, CSSComb o scsslint.

- __Corrección automática__: Herramientas que nos ayudan a revisar y arreglar nuestro código sin importar si usamos un editor de código u otro; funcionan para todos los casos y gustos de la comunidad. Por ejemplo: Prettier.

- __Tipado__: JavaScript es lenguaje de tipado dinámico, podemos cambiar el tipo de variables cada vez que queramos o necesitemos. Pero, podemos usar diferentes herramientas para implementar el tipado fuerte, es decir, que podamos usar variables con tipos diferentes al que definimos inicialmente (a menos que hagamos una conversión).

La herramienta de tipado más popular en JavaScript es TypeScript pero tambien existen algunas alternativas como Flow y React PropTypes.

## Configuración de ESLinit
Creamos un archivo con el nombre __.eslintrc__

Copiamos la configuración que se encuentra en este [link](https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json)