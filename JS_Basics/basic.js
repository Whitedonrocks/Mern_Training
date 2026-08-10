var a=10;
let b=20;
const c=30;


// Types of Data Types 
// Number--> BigInt 
// String  ''   ""
// Boolean-->true|false
// Undefined
// Null

// CamelCasing=FifaWorldCup
// Snake_casing=fifa_world_cup

// TO run console node file_name

let username="Prayag";
let lname='Nepal';
console.log(username);
console.log(username.length);
console.log(username.toLowerCase());
console.log(username.toUpperCase());
console.log(username.charAt(1)); //Gives character at 1 position
console.log(username.indexOf('y')); //Gives insdex of the given character gives -1 if not found
console.log(username.concat(lname));
console.log(lname+" "+username);

console.log("My First name is "+username+" and Laconsole.log(results);st name is "+lname+".");
console.log(`My First name is ${username} and Last name is ${lname}`);       //Template Literal

let age =17;
if (age>=18){
    console.log("Can Vote");
}else {
    console.log("Cannot Vote");
}

let age1=19;
(age1>=18)?console.log("Can Vote"):console.log("Cannot Vote");

let age2=-1;
(age2>=18)?
console.log("Can Vote"):
(age<0)?console.log("Invlaid"):
console.log("Cannot Vote");


function add (num1,num2){
        let sum=num1+num2;
        return sum;
}

const add2 =(num1,num2)=>num1+num2;  //Anonymous funcation
let result=add2(2,3);
console.log(result);

const add1 =(num1,num2)=>{
    let sum=num1+num2;
    return sum;
}  
console.log(add1(5,8));