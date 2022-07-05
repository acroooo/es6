const obj = {
    name: 'hernan',
    age: 32,
    country: 'AR'
    };

// agrupar el residuo de elementos mediante el parametro rest ...
// siempre se encuentra al final
let { name, ...all } = obj;
console.log(name, all)


// operador de propagación expande los elementos de un iterable
// en un array y no importa el lugar en el que este situado
const obj1 = {
    ...obj,
    name: 'juan',
    age: 22,
    country: 'AR'
}

// finally en Promises
// ejecutar codigo despues de que una promesa haya sido ejecutada como
// resuelta o rechazada

const helloWorld = () => {
    return new Promises((resolve, reject) => {
        (true)
            ? resolve('Hello World!')
            : reject(new Error('Test error'))
    });
}

helloWorld().finally(() => {
    console.log('Terminé!');
})


// Expresiones regulares - Regex
// patrones de búsqueda y manipulación de cadenas de caracteres
// se crea el patrón entre barras inclinadas (/patrón/)

// manejo fechas AAAA-MM-DD
// números del 0 al 9, son 4 valores => año
// números del 0 al 9, son 2 valores => mes y día
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

// averiguar si estan los datos establecidos sobre este regex
const match = regexData.exec('2018-01-01');

// acceder a los datos mes, año, dia
const year = match[1];
const month = match[2];
const day = match[3];

