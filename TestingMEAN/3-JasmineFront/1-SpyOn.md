## Profundización en SpyOn: Comandos más utilizados y cómo ponerlos a prueba 

### Jasmine spyOn

La separación de responsabilidades es una de las buenas prácticas que encontramos en un proyecto de software. Separar responsabilidades significa agrupar código de tal manera que cada conjunto se encargue de una tarea específica.

Hablemos ahora de las pruebas unitarias. Cuando probamos un componente, queremos probar las responsabilidades que le estamos delegando al componente y no todo el código ejecutado. Es decir, si el componente A utiliza la función b(), lo que queremos probar es la lógica propia del componente y no el código de la función.

Veamos el siguiente ejemplo:

```js
function GetMonthApi() {
  this.currentMonth = function () {
    return 'May';
  }
  this.nextMonth = function () {
    return 'June'
  }
}
export function MonthCalculator() {
  this.api = new getMonthApi();
  this.getNextMonth = function() {
    return this.api.nextMonth();
  }
  this.getCurrentMonth = function() {
    return this.api.currentMonth();
  }
}
```

La clase `MonthCalculator` nos permite calcular el valor del mes actual y el siguiente. Cómo puedes ver, la función `getMonthApi` es utilizada dentro de la clase. Si ejecutas el set de pruebas asociadas a nuestra clase se ejecuta en Mayo el valor del siguiente mes sería Junio, o si las corres en Enero el siguiente mes sería Febrero. ¿Ves el problema?.

Si ejecutamos código que se encuentre fuera del domino de un componente, nos podemos encontrar con resultados inesperados. Es por ello, que jasmine cuenta con un sistema de espías (spyOn), cuyo objetivo principal es interceptar la ejecución de una función y simular su resultado.

## Veamos un poco de código:

El primer método que vamos a probar es el de obtener el mes actual currentMonth. Si la prueba la creamos en mayo, el código debería ser:

```js
describe('MonthCalculator', () => {
  it('returns the current month', () => {
    // Arrange
    const monthCalculator = new MonthCalculator();  
    // Act
    const month = monthCalculator.currentMonth();
    // Assert
    expect(month).toBe('May');
  });
});
```

Este código tiene un problema. La función currentMonth va a retornar un valor que depende del mes actual.

Como ya te podrás imaginar, el uso de espías resulta bastante útil en este caso debido a que podemos controlar el valor del mes retornado.

Es decir:

```js
describe('MonthCalculator', () => {
  it('returns the current month', () => {
    // Arrange
    const monthCalculator = new MonthCalculator();
    const spy = spyOn(
                 monthCalculator.api,
                 'currentMonth'
               ).and.returnValue('Cristian Month');
    // Act
    const month = monthCalculator.currentMonth();
    // Assert
    expect(month).toBe('Cristian Month');
    expect(spy).toHaveBeenCalled();
  });
});
```

La instancia del API la tenemos almacenada en la variable this.api de nuestra clase.
Jasmine nos permite interceptar el llamado a nuestro API utilizando la función spyOn. Para ello, como primer parámetro debemos pasar el objeto que contiene el método que vamos a interceptar y como segundo parámetro el nombre del mismo.

Una vez creado nuestro espía, para poder controlar el valor retornado debemos concatenar lo siguiente: `.and.returnValue()`.
Finalmente Jasmine nos permite verificar la ejecución de la función por medio del operador `.toHaveBeenCalled()`.

Cómo reto ve al siguiente enlace, has un fork del proyecto y realiza las pruebas relacionadas con el método nextMonth(). Recuerda crear un espía para eliminar la dependencia con nuestra API.
Finalmente, te dejo un listado de preguntas y respuestas sobre todo lo que puedes hacer con espías:

### ¿Cómo se crea un espía?
```js
spyOn(obj, 'method') // obj.method es una función
```

### ¿Cómo verificar que un método fue llamado?
```js
const ref = spyOn(obj, 'method');
expect(ref).toHaveBeenCalled();
// O directamente
expect(obj.method).toHaveBeenCalled()
```

### ¿Cómo verificar que un método fue llamado con un parámetro específico?
```js
const ref = spyOn(obj, 'method');
```
expect(ref).toHaveBeenCalledWith('foo', 'bar');
// O directamente
expect(obj.method).toHaveBeenCalledWith('foo', 'bar')

### ¿Cómo puedo verificar el número exacto de ejecuciones de un método?
```js
expect(obj.method.callCount).toBe(2)
```

### ¿Cómo espiar en un método sin modificar su comportamiento?
```js
spyOn(obj, 'method').andCallThrough()
```

### ¿Cómo puedo cambiar el valor retornado por un método?
```js
spyOn(obj, 'method').andReturn('value')
```

### ¿Cómo puedo sobreescribir un método?
```js
spyOn(obj, 'method').andCallFake(() => 'this is a function');
```
