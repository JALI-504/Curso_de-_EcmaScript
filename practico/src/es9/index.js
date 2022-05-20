{
// Operador de recursos
const obj ={
name: 'oscar',
age: 36,
country: 'HN',
};
let {name, ...all} = obj;
console.log(name, all);
}

// propiedades de propaga cion para unir objetos
{
// Operador de recursos
const obj ={
name: 'oscar',
age: 36,

};
const helloWorld = () => {
return new Promise = ((resolve, reject) => {
(true)
? setTimeout(() => resolve('helloworld'), 3000)
: reject(new Error('Test Error'))
});
};
helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => conole.log('Finalizo'))
}

///// Regex ////
{
const regexData =  /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const math = regexData.exce('2018-04-20');
const year = math[1];
const mes= math[2];
const dia= math[3];

console.log(year, mes, dia);
}