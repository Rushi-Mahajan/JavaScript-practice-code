// Object literals
let user={
    username:"Hrushikesh",
    loginCount:15,
    islogged:true,
    getuserdetails: function(){
        console.log(`got user details`);
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}
// This keyword is used to refer current context
// console.log(user.username);
// console.log(user.getuserdetails());

// console.log(this);
// rteurn {}

// For, every user we need to do same things.
// to avoid this that's why contructor are used.
// let user2={
//     username:"Hrushikesh",
//     loginCount:15,
//     islogged:true,
//     getuserdetails: function(){
//         console.log(`got user details`);
//         console.log(`username: ${this.username}`);
//         console.log(this);
//     }
// }

// Constructor function
// new keyword is a contructor function.
// allow to create a multiple instances from a single object
// Instances is created from an empty object
// Like below
// let promiseOne= new Promise()
// let date=new date()

function User(username,pasword,isLogged){
    // this.username is variable & username is the value that is pass
    // Properties
    this.username=username
    this.pasword=pasword
    this.isLogged=isLogged


    this.greetings =() => console.log(`Welcome ${this.username}`);
    // Implicit return this is by defined
    return this
    
}

let user1=new User("hrushikesh","1234556",true)
let user3=new User("Rushi","12390",false)
// user3 had overide the value of User1.
console.log(user1.constructor);
// return the user function & constructor refers the self
console.log(user3.greetings());

// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object.
// The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.

console.log(user1 instanceof User);
console.log(user3 instanceof User);


