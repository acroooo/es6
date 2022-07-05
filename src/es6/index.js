// default params: 
// establecer un valor por defecto a los parámetros de una función
// nueva funcion para ver como se utilizaban los default params antes
function newFunction(name, age, country, params) {
    // inicializando
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

// llamado de la funcion
// si no le paso los parametros los toma por defecto
newFunction2();
newFunction2('Ricardo', '23', 'Colombia')
//================================================================

// Template literals + con comillas francesas:
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
