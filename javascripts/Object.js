//Singleton
// Object.create()

// sybmol 
const sys=Symbol("Key1")


// Object literals
const jsusers={
    name:"Hrushikesh",
    [sys]:"keys1", 
    // --> To sysbmol in an object
    age:12,
    gmail:"hrushikesh@sed.com",
    "Fullname":"Hrushikesh Mahajan"
}

// accesing the onbject value using key
// 1--> first method
// console.log(jsusers.Fullname)

// 2--> Second method
// console.log(jsusers["Fullname"])

//To access an sysbmol 
// console.log(jsusers[sys])

// console.log(jsusers)
// To change the value by using the key
// jsusers.name="Rushi"
// console.log(jsusers)

// To freeze an object
// Object.freeze(jsusers)
// jsusers.name="Rushi M"
// console.log(jsusers)

// jsusers.greetings=function(){
//     console.log("Hello JS user's");
// }

// console.log(jsusers.greetings);
// return the reference of functions

// console.log(jsusers.greetings());
// return the functions

// jsusers.greetingsTwo=function(){
//     console.log("Hello JS "+ jsusers.name);}

// Using this, which referenced the same objects
// jsusers.greetingsTwo=function(){
//     console.log("Hello JS "+ this.name);}

// console.log(jsusers.greetingsTwo());

// ObjectNesting

// const regualaruser={
//     gamil:"someine@google.com",
//     Fullname:{
//         username:{
//             First_name:"Hrushikesh",
//             Second_name:"Mahajan"
//         }
//     }
// }

// To access nested object
// console.log(regualaruser.Fullname.username.First_name);

//To join two or more objects

let obj1={1:"a",2:"b"}
let obj2={3:"c",4:"d"}

// using ...spread opertor
// let obj3={...obj1,...obj2}
// console.log(obj3)

//using assign
// {} --> target 
// obj1,obj2 --> source
// if obj1 is given as taget then it will add the source object in target, return the target obj
// let obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

// like below values come from databases
// const userdb=[
//     {
//         username:"Hrushikesh",
//         age:"12"
//     },{
//         gmail:"hrushikesh@google.com"
//     },{
//         contact:"1234567890"
//     }
// ]

// we can access contact by below 
// console.log(userdb[2].contact)


let regualaruser={
    name:"hrushikesh",
    gmail:"hrushikesh@google.com",
    contact:123456789
}

// console.log(Object.keys(regualaruser));
// return an array with keys of the object

// console.log(Object.values(regualaruser));
// return an array with values of the object

// console.log(Object.entries(regualaruser));
// turns the value into keys & Value pair in arrays
// an all keys & values arrays are also in another arrays
// [ [ 'name', 'hrushikesh' ],[ 'gmail', 'hrushikesh@google.com' ], [ 'contact', 123456789 ]]

// console.log(regualaruser.hasOwnProperty("gmail"));
// return boolean values
// return true if the property exist or false if the propertry don't exist

// Object desturcting
let Users={
    name:"Hrushikesh",
    Age:12,
    contact:123456789
}

// we can access name by 
// const {name} =Users;
// console.log(name)

// we can also change the access name by
const {name:uname}=Users;
console.log(uname)
