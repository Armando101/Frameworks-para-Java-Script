## ¿Qué son las pruebas unitarias?

Las pruebas unitarias o Unit testing forman parte de los diferentes procedimientos que se pueden llevar a cabo dentro de la metodología ágil; código que sirve para probar otro código. Pequeñas pruebas creados específicamente para cubrir todos los requisitos del código y verificar sus resultados.

### ¿Para qué sirven las pruebas unitarias?

- Red de seguridad: Prevenir cambios inesperados en nuestras aplicaciones por miembros de nuestro equipo o, incluso, nosotros mismos.
- Calidad del código: Mejora continua de nuestro código. Podemos revisar y mejorar código viejo o contemplar casos de uso que no tuvimos en cuenta al comenzar el desarrollo.
- Reducir costos: Prevención y detección de errores a edad temprana, antes de que puedan salirse de control.

## ¿Por qué hacer pruebas unitarias? 

La productividad, el valor generado, el presupuesto, el tiempo, son consideradas las variables más importantes en cualquier tipo de proyecto. Si le preguntas al dueño de la empresa el presupuesto va a ser lo principal. Si hablas con el dueño del producto, la productividad y el valor agregado serán su enfoque. Si hablas con el cliente probablemente el tiempo es lo más importante. Es por ello que vale la pena preguntarnos, ¿deberíamos reservar un espacio para la creación de pruebas unitarias?

Crear pruebas unitarias implica la creación de una aplicación en paralelo que permita ejecutar y probar nuestro código base. Es decir, dependiendo de las habilidades del programador, el tiempo dedicado a su creación puede llegar a ser igual o en algunos casos mayor al tiempo empleado para escribir la solución.

Veamos esto con un ejemplo. Imagina que una empresa tiene la tarea de crear un formulario para registrar asistentes a una conferencia. Como el presupuesto es ajustado, el grupo de desarrollo decide crear la solución sin un sistema de pruebas. La primera fase del proyecto fue un "éxito". El equipo de pruebas encuentra un problema con las validaciones del formulario y un error en consola debido a un tipo de dato. El equipo de desarrollo resuelve el problema y finalmente se puede entregar el producto.

De la situación anterior podemos analizar lo siguiente:

- Si bien la primera entrega del producto fue exitosa, la falta de un sistema de alertas durante el tiempo de desarrollo, hizo que errores relacionados con tipos de datos solo fueran detectados durante las pruebas de calidad.

- La aplicación requirió de un nuevo ciclo de desarrollo para arreglar el problema.

- Debido al tamaño de la aplicación realizar realizar cambios serán bastante rápidos.

Ahora bien, supongamos que ese mismo sistema se utiliza para otro cliente pero esta vez se le debe agregar un sistema de autenticación. Una persona del equipo decide abandonar la empresa. El proceso desarrollo fue un éxito. El tiempo estimado se incrementó. Nuevamente no se creó un sistema de pruebas. Se requirieron dos rondas de pruebas adicionales y de desarrollo para poder realizar la entrega del producto.

Analicemos la situación anterior:

- El proyecto se atraso debido a la salida y al proceso de aprendizaje del nuevo desarrollador.

- Nuevamente no se realizó un sistema de pruebas en la aplicación.

- Se realizaron dos rondas de pruebas y de desarrollo adicionales a lo planeado.

¿Qué puedes concluir de estas situaciones?, ¿Cómo podrías mejorar el proceso de desarrollo de esta aplicación? Como ya te imaginarás, una de las cosas que se pudo mejorar sería la implementación de un sistema de pruebas. Sin embargo, ¿Cómo las pruebas unitarias te pueden ayudar en tus desarrollos?

## Las pruebas unitarias

Comencemos con la definición. Las pruebas unitarias no son más que un programa que permite probar nuestro código base. Es decir, las pruebas unitarias implica la creación de pequeños extractos de código que ejecutarán todas las líneas dentro de una función, de tal forma que se pueda verificar su comportamiento.

El tiempo dedicado para la creación de las pruebas unitarias debe ser incluido durante la fase de desarrollo, de tal forma que se pueda crear la solución y las pruebas relacionadas con el problema en un mismo momento.
¿Para qué sirven las pruebas unitarias?

Las pruebas unitarias sirven para:

- __Red de seguridad__: Cada vez que creas una prueba unitaria, estas analizado el código en partes pequeñas, por lo tanto, es posible crear un sistema de alertas ante futuros cambios en el código.

- __Documentación__: Debido a que tenemos una aplicación que va a ejecutar las líneas de código de nuestro programa, es el momento perfecto para documentar y verificar lo que esperamos que pase. Es decir, vamos a explicar nuestro código, mostrando cómo se deben utilizar.

- __Calidad de código__: Durante el proceso de creación de pruebas unitarias además de detectar errores, es el momento ideal para mejorar la solución o aplicar mejores patrones de diseño a nuestro código.

- __Reducción de costos__: Todos los puntos anteriores van a ayudar con la reducción de costos. Contar con una documentación adecuada nos va ayudar con futuras modificaciones al código o la incorporación de nuevos desarrolladores al proyecto. La red de seguridad y la calidad en el código va a permitir la detección de errores temprana, por lo tanto, va a prevenir que te atrases en las entregas.

## Conclusiones

Incorporar pruebas unitarias en un proyecto es una de las mejores decisiones que puedes tomar. Debes tener en cuenta que las pruebas no solo te van a ayudar a reducir costos, estas son creadas con el propósito de ayudarnos entre desarrolladores durante el proceso de creación de código.

Contar un set de pruebas puede tomar tiempo al principio, pero con práctica va a ser intuitivo y rápido. Los conceptos aprendidos durante este curso te van a ser de utilidad no solo para las pruebas creadas utilizando Jasmine, si no vas a tener las bases para la creación de tu propio sistema de pruebas o como bases para comenzar a utilizar otros frameworks.