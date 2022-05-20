// devolver matiz
{
    const data = {
    frontend: 'Armando y',
    backend: 'Yaketzy',
    design: 'Me Destroza'
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
}

{
    const data = {
    frontend: 'Armando y',
    backend: 'Yaketzy',
    design: 'Me Destroza'
}
const values = Object.values(data);
console.log(values);
console.log(values.length);
}


/// El Padding

{
    const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-----'));
console.log('food'.padEnd(12, '-----'));
}

const obj = {
    name: 'Armando',
}

// Async Await

const helloWorld = () => {
return new Promise((resolve, reject)=>{
    (true)
    ? setTimeout(()=> resolve('Hello World'), 3000)
    : reject(new Error('TEst Error'))
})


};

const HelloAsync = async()=>{
    const hello = await helloWorld();
    console.log(hello)
}

HelloAsync();

const otraFuncion = async() =>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error)
    }
};

otraFuncion();