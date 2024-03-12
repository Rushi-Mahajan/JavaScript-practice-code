// Object - new keyword
// because of prototype, this & class can be used
function mulby5(num){
    return num*5
}
// Funtions can behave like  a function also it can behave like a Object
mulby5.power=2;
// console.log(5);
// 5
// console.log(mulby5.prototype);
// by default, its have some properties
// {}
// console.log(mulby5.power);
// 2

function createUser(username,score){
    this.username=username;
    this.score=score;
}

createUser.prototype.increament =function(){
    this.score++;
}

createUser.prototype.printme=function(){
    console.log(`username is ${this.username}`);
}

let chai=new createUser("Chai","20")
let Tea=new createUser("Tea","2")

// chai.printme()
// Tea.printme()

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/

// Prototype
// let myName="hitesh   "

// console.log(myName.trim().length);
// In every string, by default properties truelength().

let myHero=["thor","hulk","spiderman","batman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getsipdeyPower: function(){
        console.log(`Siperdman power is ${this.spiderman}`);
    }
}

// here prototype method rushi() is created at Object level
Object.prototype.rushi=function(){
    console.log("rushi is present in all object")
}

heroPower.rushi()
myHero.rushi()


Array.prototype.Hirushi=function(){
    console.log(`hello world`);
}

myHero.Hirushi()
// heroPower.Hirushi()
// As proptype method is created in Array, Object cannot access it


// Inheritance
let username={
    username:"hrushikesh"
}

let teacher={
    makeVideo:true,
}

let TeachingSupport={
    isAvailable:false,
}

let TAsupport={
    MakeAssignment:"JS",
    fullTime:true,
    // to link two object, here Teaching support is link with TAsupport. properties of Teaching support. Can be access by TAsupport 
    __proto__:TeachingSupport
}

teacher.__proto__=username;

// Modern syntax
// properties of Teacher. Can be access by Teaching Support
Object.setPrototypeOf(TeachingSupport,teacher)
console.log(TeachingSupport.makeVideo);


// let myName="hitesh   "
// console.log(myName.trim().length);
// In every string, by default properties truelength().

String.prototype.trueLength=function(){
    console.log(`true length is ${this.trim().length}`);
    console.log(typeof  this);
    console.log(typeof`  ${this}`);

}

username="hrushikesh  "
username.trueLength()