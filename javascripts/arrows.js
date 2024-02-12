// This Keywords
const user={
    name:"Hrushikesh",
    Price:"9999",

    welcome:function(){
        // console.log(`Welcome ${this.name}`)
        //below will return current context - Value of obejct 
        //{ name: 'Hrushikesh', Price: '9999', welcome: [Function: welcome] }    
        // console.log(this);
    }
}
// This keyword refer to current context. 
// In above example, if we change name to "hello" name.
// welcome message will print correct - Welcome hello 

// user.welcome()
// user.name="Sam"
// user.welcome()

// console.log(this);
//In Node as there is no gobal context/object it will return an empty object {}

// console.log(this)
// In Broswer, this keyword return an window object as this is global object in Broswer.
// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

function check(){
    // const username="Hrushikesh"
    console.log(this.username)
    // This keyword are only used in Object, we cannot use the in Functions as above
}
// check()

// Arrow Function

const chai=()=>{
    let user="Hrushikesh"
    console.log(this);
    // it will return empty object. 
}
// chai()


const messgae=()=>{
    console.log("Good Morning");
}
// messgae()


// basic arrow functions
addTwo=(num1,num2)=>{
    return num1+num2
}
// console.log(addTwo(1,2))

// Implicit arrow functions without return keyword

// two=(num1,num2)=> num1+num2

// Implicit arrow functions without return keyword using ()

// two=(num1,num2)=> (num1+num2)


// Implicit arrow functions with return keyword using {}
// Note if {} is use then return is mandate to return an value

// two=(num1,num2)=> { return num1+num2}

// Implicit arrow functions, to return an object without using return keyword
two=(num1,num2)=> ({username:"Hrushikesh"})



console.log(two(1,2))