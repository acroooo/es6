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
