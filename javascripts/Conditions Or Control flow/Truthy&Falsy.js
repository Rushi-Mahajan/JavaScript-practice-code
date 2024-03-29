// In JS. some of the value is treated as Truthy & Falsy

// const userEmail="a@.ai" -- this will be treated as true value 
// const userEmail=""  -- "" (empty string) is treated as False value 
// const userEmail=[]  -- [](empty Array) is treaded as true value
// const userEmail={} -- {}(empty Object) is treated as true value


// Falsy values
// false,0,-0,null,undefined,-null,BigInt 0n,"",NaN

// Truthy values
// {} empty object,[] empty array, true,"0"," ","False" -(if anything in string is truthy value),function(){} -- empty function is truthy value 

// if(userEmail){
//     console.log("got user email");
// }else{
//     console.log("No email found");
// }


// To check if Array is empty
// const a=[]

// if(a.length===0){
//     console.log("Array is empty");
// }

// To check if Object is empty
const a={}
if(Object.keys(a).length===0){
    console.log("Object is empty");
}

// Nullish Coaleascing operator (??): null undefined
let val1
// val1=5 ?? 10
// Val1 value is 5
// val1=null ?? 20
// Val1 value is 20
// val1=undefined ?? 2
// Val1 value is 2

val1=20??null??12
// Val1 value is 20


console.log(val1);

// Ternary operator
let score=1
score>0? console.log("one") :  console.log("Zero");