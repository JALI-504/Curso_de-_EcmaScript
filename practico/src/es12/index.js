//replease All
const string = "Js es maravilloso, con Js puedo crear el futuro de la web";

const replaceString = string.replace("Js", "Python");
console.log(replaceString);

const replaceString2 = string.replaceAll("Js","Python");
console.log(replaceString2);

// Metodos privados
// añadir prefijos
// Forma publica 
class Message{
    show(val){
        console.log(val);
    };
}
const message = new Message();
message.show('Hola!');

//  Forma prrivada
class Message1{
    #show(val){
        console.log(val);
    };
    //get #add(val){ // al ser privadas se usan getter y setter
       // ...
    }
//}
const message1 = new Message1();
message1.show('Hola!');

// Promise Any , Forma global
// evielve el primer valor resuelto
const promise1 = new Promise((resolve, reject)=> reject("1"));
const promise2 = new Promise((resolve, reject)=> resolve("2"));
const promise3 = new Promise((resolve, reject)=> resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

// WeakRef
class AnyClass{
    constructor(elemento){
    this.ref = new WeakRef(elemento)
    }
    //{...}// libera objetos recogidos en la memoria
}

// nuevos operadores
let istrue =  true;
let isfale = false;
console.log(istrue &&= isfale);

let istrue1 =  true;
let isfale1 = false;
console.log(istrue1 ||= isfale1);

let istrue2 =  undefined;
let isfale2 = false;
console.log(istrue2 ??= isfale2);