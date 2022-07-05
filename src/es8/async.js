//async - await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test error'))
    })
}

const helloAsync = async () => {
    const response = await helloWorld();
    console.log(response);
}

helloAsync()

// try - catch 
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (error) {
        console.log(error)
    }
}