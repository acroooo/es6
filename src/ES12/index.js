const string = "Javascript y Python son maravillosos, Javascript, tanto para frontend como para backend"


// replace
// reemplaza solo el primer elemento encontrado por el string a reemplazar
const replacedString = string.replace('Javascript', 'Java')

// replaceAll
// Todas las coincidencias son reemplazadas
const replacedString2 = string.replace('Javascript', Python)

// métodos privados de clase
class Message {
    show(val) {
        console.log(val);
    }
    get #add(val) {
        console.log(val)
    }
}

const message = new Message();

message.show('Hola');


// Promise.any()
// Otra forma de manejar promseas
// Retorna la primera promesa que sea resuelta y rechazara si todas las
// otras promesas son rechazadas
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then((res) => resolve(res))
    .catch((err) => reject(err))


// Weak references : referencias débiles
// consiste en mantener una referencia débil a otro objeto, para evitar
// que ese objeto sea eliminado por el garbage collection{target='blank'}

class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(valor)
    }
}

// Operadores nuevos de asignación

// AND -> &&= -> en caso de cumplirse una verdad, asigna un valor a la variable
// OR -> ||= en caso de cumplirse una falsedad, asigna un valor a la variable
// NULLISH -> ??= en caso de cumplirse undefined o null, asigna un valor a la variable

let isTrue = true;
let isFalse = false;
let isTrue2 = true;
let isFalse2 = false;
let isTrue3 = true;
let isFalse3 = false;

console.log(isTrue &&= isFalse);

console.log(isTrue2 ||= isFalse2);

console.log(isTrue3 ??= isFalse3);