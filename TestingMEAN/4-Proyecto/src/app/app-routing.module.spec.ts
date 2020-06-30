import { routes } from './app-routing.module';
import { PinsComponent } from './components/pins/pins.component';

fdescribe('App Router', ()=> {

	beforeAll(()=> {
		// Antes de todo el set de pruebas
		console.log('Before all');
	});

	beforeEach(()=> {
		// Antes de cada prueba
		console.log('Before all');
	});

	afterAll(()=> {
		// Despues de todo el set de pruebas
		console.log('After all');
	});

	afterEach(()=> {
		// Despues de cada prueba
		console.log('After all');
	});

	it('Should have app as path', ()=> {
		expect(routes[0].path).toBe('app');
	});

	it('Should match the childrends', ()=> {
		expect(routes[0].children).toContain({
        path: 'pins',
        component: PinsComponent
      });
	})
});