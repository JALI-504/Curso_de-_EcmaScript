// dinamic import
const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});

/////Caracteristicas

///Dig int
const aBigNum = 9007199254740991n;
const otroBigNum = BigInt(9007199254740991);

console.log(aBigNum);
console.log(otroBigNum);

// promise old serv
const promise1 = new Promise ((resolve, reject) =>reject("reject"));
const promise2 = new Promise ((resolve, reject) =>resolve("resolve"));
const promise3 = new Promise ((resolve, reject) =>resolve("resolve1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// Global This
console.log(window);
console.log(globalThis);

// Elementos nulos
const foo = null ?? 'default string';
console.log(foo);
const fooo = 'as' ?? 'default string';
console.log(fooo);

// opcional shaini
const user = {};
console.log(user?.profile?.email); // signos de interrogacion al final para que no rompan el bloque qde codigo

if (user?.profile?.email){
    console.log('email');
}else{
    console.log('fail');
}