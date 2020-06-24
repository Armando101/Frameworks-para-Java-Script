# Ciclo de vida de un componente

## ngOnInit
Se dispara cuando el compoente está inicializando o después del ngOnChanges

## ngOnChanges
Cuando los datos de propiedades relacionadas cambian.

## ngDoCheck
Durante cada revisión del ciclo de deteción de cambios

## ngAfterContentInit
Después de insertar contenido, por ejemplo, un componente

## ngAfterContentChecked
Después de la revisión del contenido insertado

## ngAfterViewInit
Después de la inizalicación del componente hijo

## ngAfterViewChecked
Después de cada revisión de los componentes/hijos

## ngOnDestroy
Justo antes que se destruya el componente o directiva

### Nota
Los más utilizados son ngOnInit, ngOnChanges y ngOnDestroy
[Documentación](https://angular.io/guide/lifecycle-hooks)