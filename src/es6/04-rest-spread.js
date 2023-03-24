//Arrays destructuring

let fruits = ['Apple','Banana'];
let [a,b]=fruits;
console.log(a,fruits[1]);

//Destructuracion utilizado en objetos.

let user ={userName:'Oscar', age:34};
let {userName,age}=user;
console.log(userName,age); /* or user.age */

// spread operator

let person = {name: 'Oscar', age: '28'};
let country = 'MX';

let data = { id:1, ...person,country};
console.log(data);

//rest
function sum(num, ...values){
    console.log(values);
    console.log(num+values[0]);
    return num + values[0];
}

sum(1,1,2,3,)

function solution(json1={name:'mr.Michi',food:'Pescado'}, json2={age:12,color:'Blanco'}) {

  return {...json1,...json2}
 
}

console.log(solution());
