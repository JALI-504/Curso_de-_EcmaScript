// Funcion llamada normalmente
function newFunction(name, age,contry){
    var name = name || 'Armado';
    var age = age || 36;
    var contry = contry || 'HN';
    console.log(name,age,contry); 
}

//Es6
function newFunction2(name = 'Armando', age = '36', contry = 'HN'){
    console.log(name,age,contry); 
}
newFunction2();
newFunction2("Jose", 36, "HN2");

///////anterir////////////
let hola = "Hola";
let mundo = "Mundo";
let hm = hola+" "+mundo;
console.log(hm);

// forma Es6
let epic = `${hola} ${mundo}`;
console.log(epic);

//////// Multilinea ///////
//anterior
let lorem = "Que ondas con las morritas que les gusta la cebilla \n"+
"es otra frase epica que necesitamos."

///// Es6
let lorem2 = `Otra frase eouca qye becesutanis

ahora es otra frase pica`
console.log(lorem);
console.log(lorem2);

//// estructuracion de elementos
///anterir
let person = {
    'name': 'Oscar',
    'age': 36,
    'contry': 'HN'
}
console.log(person.name, person.age, person.age);
//// Es6
let {name,age,} = person;

console.log(name,age);

/////// OPERADOR DE PROPAGACION //////
//anterior

let team1 = ['Armando','Carlos','Neto'];
let team2 = ['Mami', 'Ana', 'Meme'];

let education = ['DAvid',...team1, 'Alma', ...team2];
console.log(education);

/////// var y let ////////////

///var: es accesible de forma global
///let: solo es accesible dentro del bloque de codigo mencionado

{
    var gVar = "Global Var"
}
console.log(gVar); // llamado de forma global

{
    let gLet = "Global Let"
    console.log(gLet); // llamado de forma local
}

//// const: valores que no van a cambiar

const a = 'b';

a = 'a';

console.log(a); // al ejecutyarlo da error

////// Propiedad de objetos mehorada /////

let name1 = 'Armando';
let age1 = 36;

// anterior
obj = {name1: name1, age1: age1}
// Es6
obj2 = {name1, age1};

console.log(obj);
console.log(obj2);

/// Arrow

const names = [
    {name: 'Armando, age: 36'},
    {name: 'Jose, age: 36'}
];

// Es5
let listaNombres = names.map(function(){
    console.log(item.name);
})

//Es6
listaNombres2 = names.map(item => console.log(item.name));

// const listaNombres3 = (name, age, contry)=>{
//     ...
// }

// const listaNombres4 = name => {
//     ...
// }

const square = num => num * num;

/// laPromesas ///////////////

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

////// CLASES Es6 ///////////////////

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const cal= new calculator();
console.log(cal.sum(2,2));

//llamar modulo
import{hello} from './module';

hello(); 

//// Generadores  /////////
function* hellWorld(){
    if(true){
        yield 'Hello, '
    }
    if(true){
        yield 'World, '
    }
};

const generatorHello = hellWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);