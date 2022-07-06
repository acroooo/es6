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

