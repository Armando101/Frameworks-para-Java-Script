## Diccionario Jasmine 

Prueba negativa
```js
expect(false).not.toBe(true); comparación con ===, ejemplo: 1 === 11 !== '1'
```

Igualdad completa:

```js
expect(thing).toBe(realThing);
```

El valor no es undefined

```js
expect(result).toBeDefined();
```

El valor actual es falso, ejemplo:0, ‘’, false

```js
expect(result).toBeFalsy();
```

El valor actual es verdadero, ejemplo: ‘sd’, 1, true

```js
expect(thing).toBeTruthy();
```

El valor actual es mayor al esperado

```js
expect(result).toBeGreaterThan(3);
```
El valor actual es mayor o igual al esperado

```js
expect(result).toBeGreaterThanOrEqual(25);
```

El valor actual es menor al esperado

```js
expect(result).toBeLessThan(0);
```

El valor actual es menor o igual al esperado

```js
expect(result).toBeLessThanOrEqual(123);
```

El valor actual es NaN

```js
expect(thing).toBeNaN();
```

El valor actual es -Infinity

```js
expect(thing).toBeNegativeInfinity();
```

El valor actual es Infinity

```js
expect(thing).toBePositiveInfinity();
```

El valor actual es null

```js
expect(result).toBeNull();

```
El valor actual continue una cadena. Ejemplo:

```js
'Hola mundo'.toContain('Hola') // true
['Hola', 'mundo'].toContain('Hola') // true
expect(array).toContain(anElement); expect(string).toContain(substring);
```
El valor actual es igual utilizando una comparación profunda

```js
expect(bigObject).toEqual({"foo": ['bar', 'baz']});
```

El espía fue llamado

```js
expect(mySpy).toHaveBeenCalled(); expect(mySpy).not.toHaveBeenCalled();
```

El espía fue llamado antes que otro

```js
expect(mySpy).toHaveBeenCalledBefore(otherSpy);
```

El espía fue llamado n veces:

```js
expect(mySpy).toHaveBeenCalledTimes(3);
```

El espía fue llamado con los siguientes parámetros

```js
expect(mySpy).toHaveBeenCalledWith('foo', 'bar', 2);
```

Verificar si un elemento tiene una clase

```js
const el = document.createElement('div');
el.className = 'foo bar baz';
expect(el).toHaveClass('bar');
```

El valor actual comparado con una expresión regular

```js
expect("my string").toMatch(/string$/); 
expect("other string").toMatch("her");
```

Ciclos de vida

```js
describe("Component", () => {
  // Shared variables
  var foo = 0;
beforeAll(() => {})
  beforeEach(() => {})
  afterEach(() => {})
  afterAll(() => {})
});
```

Deshabilitando pruebas
```js
xdescribe("A spec", () => {
  it("waiting to be enable", function() {
    expect(true).toEqual(true);
  });
});
describe("A spec", () => {
  it("this run", () => {
    expect(true).toEqual(true);
  });
  xit("this is skipped", () => {
    expect(true).toEqual(true);
  });
});
```

Utilizando spyOn

```js
describe('A spy', () => {
  let foo,
    bar = null;
  beforeEach(() => {
    foo = {
      setBar: value => {
        bar = value;
      },
    };
    spyOn(foo, 'setBar');
    foo.setBar(123);
    foo.setBar(456, 'another param');
  });
  it('tracks that the spy was called', () => {
    expect(foo.setBar).toHaveBeenCalled();
  });
  it('tracks that the spy was called x times', () => {
    expect(foo.setBar).toHaveBeenCalledTimes(2);
  });
  it('tracks all the arguments of its calls', () => {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });
});
```

Crear espía cuando desconocemos si la función existe

```js
describe("Create a 'bare' spy", () => {
  let notSure;
  beforeEach(function() {
    notSure = jasmine.createSpy('notSure');
    notSure("I", "am", "a", "spy");
  });
  it("tracks that the spy was called", function() {
    expect(notSure).toHaveBeenCalled();
  });
});
```

Creando multiples espías en un mismo objeto

```js
describe("Multiple spies", () => {
  const tape;
  beforeEach(() => {
    tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop']);
    tape.play();
      tape.pause();
      tape.rewind(0);
    });
  it("creates spies for each requested function", () => {
    expect(tape.play).toBeDefined();
    expect(tape.pause).toBeDefined();
    expect(tape.stop).toBeDefined();
  });
});
```

Verificar una propiedad de un objeto
```js
describe("jasmine.objectContaining", () => {
  let foo;
  beforeEach(() => {
    foo = {
      a: 1,
      b: 2,
      bar: "baz"
    };
  });
  it("matches objects with the expect key/value pairs", () => {
    expect(foo).toEqual(jasmine.objectContaining({
      bar: "baz"
    }));
    expect(foo).not.toEqual(jasmine.objectContaining({
      c: 37
    }));
  });
});
```

Verificar una propiedad dentro de un objeto pasado como parámetro a una función

```js
describe('jasmine.objectContaining', () => {
  it('is useful for comparing arguments', () => {
    const callback = jasmine.createSpy('callback');
    callback({
      bar: 'baz',
    });
    expect(callback).toHaveBeenCalledWith(
      jasmine.objectContaining({
        bar: 'baz',
      })
    );
  });
});
```

Verificar un valor dentro de un arreglo

```js
describe("jasmine.arrayContaining", () => {
  let foo;
  beforeEach(function() {
    foo = [1, 2, 3, 4];
  });
  it("matches arrays with some of the values", () => {
    expect(foo).toEqual(jasmine.arrayContaining([3, 1]));
    expect(foo).not.toEqual(jasmine.arrayContaining([6]));
  });
});
```

Verificar un valor dentro de un arreglo pasado como parámetro a una función

```js
describe('jasmine.arrayContaining', () => {
  it('is useful when comparing arguments', () => {
    const callback = jasmine.createSpy('callback');
    callback([1, 2, 3, 4]);
   expect(callback)
     .toHaveBeenCalledWith(jasmine.arrayContaining([4, 2, 3]));
   expect(callback)
     .not.toHaveBeenCalledWith(jasmine.arrayContaining([5, 2]));
  });
});
```

Usando regex para comparar comparar cadenas de texto

```js
describe('jasmine.stringMatching', () => {
  it("matches as a regexp", () => {
    expect({foo: 'bar'})
      .toEqual({foo: jasmine.stringMatching(/^bar$/)});
    expect({foo: 'foobarbaz'})
      .toEqual({foo: jasmine.stringMatching('bar')});
  });
   describe("when used with a spy", () => {
    it("comparing arguments", () => {
      const callback = jasmine.createSpy('callback');
      callback('foobarbaz');
      expect(callback)
        .toHaveBeenCalledWith(jasmine.stringMatching('bar'));
      expect(callback)
        .not.toHaveBeenCalledWith(jasmine.stringMatching(/^bar$/));
    });
  });
});
```
