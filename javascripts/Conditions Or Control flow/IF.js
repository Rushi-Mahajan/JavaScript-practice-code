// If

// if(condition){
//     // if its true this scope will be excuted
// }


const isUserLogged=true;



// Compare opertor
// <,>,<=,>=,!=,==,===(strict compration of datatype - check the datatype also)

// if(2=="2"){
//    console.log("Logged");
// }

// let temp=41

// if(temp===50){
//     console.log("less than 50")
// }else{
// console.log("greater than 50")
// }
// console.log("Temp Checked")

// const score=200;

// if(score>100){
//     const power="Fire"
//     console.log(`User power ${power}`);
// }
// // {} - this is a scope, variable inside this scope cannot be access outside of it.
// therefore, power is not able to access in below code
// console.log(`User power ${power}`);

// Shorthand notation
// const balance=2000;
// Implicit scope, is there in below code
// Multiple line can be added by using ,
// if(balance>500) console.log("tested"),console.log("test!"); 
// above statements, is not use in company, as it is not readable 

// const balance=2000;

// if(balance<500){
//     console.log("Balance is less then 500");
// }else if(balance<750){
//     console.log("Balance is less then 750");
// }else if(balance<900){
//     console.log("Balance is less then 900");
// }else{
//     console.log("Balance is grater then 1200");
// }


const userloggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userloggedIn && debitCard){
    // && (AND)- both conditions should be true to excute this scope.
    // if any of conditions are false then it willnot excuted
    console.log("Allow to buy")
}

if(loggedInFromEmail || loggedInFromGoogle){
    // || (OR) - if any of conditions is  true then excute this scope will be excuted.
    console.log("User login")
}