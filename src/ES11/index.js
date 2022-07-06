// importación dinámica
// cargar los módulos cuando el usuario los vaya a utilizar, y no al
// iniciar la aplicación.

const button = document.getElementById('btn');

button.addEventListener('click', async (event) => {
    const module = await import("./file.js")
    module.hello();
})


// Big int
// números mayores a 2 a la 53
// agregar una n al final del número
// o utilizar el método BigInt()
const number1 = 45n
const number2 = BigInt(45)

// manejo de varias Promises
// se utilizar Promise.all(), recibe como argumento un array de promseas
// pero importa el estado de las promesas
// si hay una rejected, se para la ejecución
// en cambio con allSettled se sigue ejecutando sin importar el estado de las promesas

const promise1 = new Promise((resolve, reject) => reject('reject'))
const promise2 = new Promise((resolve, reject) => resolve('resolve1'))
const promise3 = new Promise((resolve, reject) => resolve('resolve2'))


Promise.allSettled([promise1, promise2, promise3]).then((response) => {
    console.log(response)
}
).catch((error) => {
    console.log(error)
}
)

// Global.this
// Objeto global para cualquier plataforma

// proporciona funciones y variables propias e integradas en el lenguaje
// o el entorno
// para estandarizar el objeto global se creó globalThis, un objeto
// compatible con cualquier plataforma

console.log(window) // error
console.log(globalThis) // objeto

// nullish coalescing
// operador ??
// consiste en evaluar una variable si es undefined o null para asignarle
// un valor
const foo = null ?? 'default string'; 
// OR evalue un valor falsy


// optional chaining
// acceder a propiedades de un objeto que no existen
// operador ?
const user = {}
console.log(user?.profile?.email) // undefined