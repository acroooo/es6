const obj = {
    name: 'hernan',
    age: 32,
    country: 'AR'
    };

// agrupar el residuo de elementos mediante ...
let { name, ...all } = obj;
console.log(name, all)