// aplanamiento de arrays
//transformar un array de arrays a uno de una sola dimensión
let array = [1, 2, 3[1, 2, 3[1, 2, 3, 1,2,3, [1,2,3]]]]

// metodo flat
// devuelve un array donde los subarrays han sido
// propagados hasta una profundidad especifica
// metodo inmutable, retorna un array nuevo con los cambios y no cambia
// el array original
// el metodo recibe un argumento => profundidad
// si se desea aplanar todo usar Infinity
console.log(array.flat())
console.log(array.flat(2))
console.log(array.flat(Infinity))

//método flatMap
// combinacion de map y flat, primero realiza la iteracion de los
// elementos del array (como si fuera map) y despues los aplana en una
// sola profunidad ( como si fuera flat)

let array2 = [1, 2, 3, 4, 5, [1, 2, 3]]

// retorna el valor y el valor por 2
console.log(array2.flatMap(value => [value, value * 2]))

// Eliminar espacios en blanco
// trim, trimStart / trimLeft, trimEnd / trimRight

let hello = '                             hello world'
console.log(hello.trim())

// optional catch binding
// permite omitir el error si es necesario, para que este obligatorio

try {

} catch {
    error
}


// Object.fromEntries()
// devuelve un objeto a partir de un array donde sus elementos son las
// entries en forma [propiedad, valor]
// operacion inversa a Object.entries()

let entries = [["name", "Hernan"], ["age", "30"]]
console.log(Object.fromEntries(entries))

// Propiedad description de los tipos symbol
// acceder a su descripcion

let mySymbl = 'my simbol'
let symbol = Symbol(mySymbl)
console.log(symbol.description)