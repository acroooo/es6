
// Métodos de transformación de objectos a arrays
// object.entries()
// devuelve los elementos del objeto en forma de [propiedad, valor]

const data = {
    frontend: 'Hernan',
    backend: 'Juan',
    design: 'Pedro'
}

// transformar el objecto a un matriz
const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);
/*

Return object.entries()
[
  [ 'frontend', 'Hernan' ],
  [ 'backend', 'Juan' ],
  [ 'design', 'Pedro' ]
]

[ 'Hernan', 'Juan', 'Pedro' ]
*/


// object.values()
// devuelve los valores de un objecto a un arreglo

const data2 = {
    frontend: 'Hernan',
    backend: 'Juan',
    design: 'Pedro'
}

const values = Object.values(data2)

console.log(values)

/*

Return object.entries()

[ 'Hernan', 'Juan', 'Pedro' ]
*/

// Object.keys()
// devuelve las propiedades de un objecto a un arreglo

const data3 = {
    frontend: 'Hernan',
    backend: 'Juan',
    design: 'Pedro'
}

const properties = Object.keys(data3)
console.log(properties)