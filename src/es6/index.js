// default params:
// establecer un valor por defecto a los parámetros de una función

function newFunction(name, age, country, params) {
    var name = name || 'hernan';
    var age = age || 27;
    var country = country || 'argentina';
    var params = params || 'hola';
    console.log(name, age, country, params);
}

//es6
function newFunction2(name = 'hernan', edad = 27, country = 'argentina',) {
    console.log(name, edad, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'Colombia')

//================================================================

// Template literals 
// con comillas francesas:
// crear cadenas de carácters que puedan contener variables

let hello = "Hello"
let world = "World"

// metodo de concatenacion para unir palabras
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

// TL
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

//================================================================

// Multilínea
// antes
let lorem = "Texto default \n"
    + "Otro texto";

// es6
let lorem2 = `Otra frase para practicar 
ahora puedo ver como la multilínea
existe  en el navegador`;

console.log(lorem)
console.log(lorem2);
 //================================================================

// Desestructuración de objetos
// antes
let person = {
    'name': 'hernan',
    'age': 27,
    'country': 'AR'
}

console.log(person.age, person.name);
// es6
let { age, name, country } = person;
console.log(name, age, country);
//================================================================

// unir arrays y añadir elementos con el spread operator
let team1 = ['hernan', 'ricardo', 'juan'];
let team2 = ['jose', 'maria', 'juan'];

// estructuro teams y los uno
let education = ['Bob', ...team1, ...team2];
console.log(education);

//================================================================
// const / let : scope de bloque
{ 
    var global = "GLOBAL variable";

}
{
    let globalLET = "GLOBAL variable2";
    console.log(globalLET);
}
console.log(global);
console.log(globalLET);
//================================================================

// Const: no se puede reasignar ni redeclarar
// let: se puede reasignar pero no se puede re declarar

const a = 'b';

// reasignar - error
// a = 'c';

//================================================================

// Arrow functions, promises y object parameters


//Object parameters
let nombre = 'hernan';
let edad = 32; 

 // antes
obj = { name: nombre, age: edad };

// ahora
obj2 = { nombre, edad }


// Arrow functions
const names = [
    { name: 'hernan', age: 32 },
    { name: 'ricardo', age: 27 },
    { name: 'juan', age: 23 }
]

//es5
let listOfNames = names.map(function (item) {
    console.log(item.name);
})

// es6
let listofNames = names.map((item) => {
    console.log(item.name)
})

// Promises

const helloPromise = () => {
    // nueva promesa, devuelve resolve o reject
    return new Promise((resolver, reject) => {
        if (true) {
            resolver('Lo lograste!')
        } else (
            reject('Ups!')
        )
    })
}

helloPromise().then((response) => {
    console.log(response);
}
).catch((error) => {
    console.log(error);
}
)
