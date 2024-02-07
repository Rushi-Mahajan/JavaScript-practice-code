
function sayMyName(){
    console.log("Hrushikesh")
    console.log("Mahajan")
}

// reference
// sayMyName
// excute
// sayMyName

// parameter
// function addTwoNumber(number1,number2){
//     console.log(number1+number2)
// }


// with return keyword
function addTwoNumber(number1,number2){
    // both result variable mention below & later declare are different as this under function(block) {}
    // let result=number1+number2;
    // return result;
    // if any code is after return it will not excute.
    // it will terminate/Break the functions
    return number1+number2
}

// arguments
// let result=addTwoNumber(3,7)
// console.log("Result:-",result);

function loginUserMessage(username = "Rushi"){
    if(!username){
        // "" and undefined are consider as false value in JS 
        // username===undefined, !username - both are same, 
        // if above statement is ture then only this block will get execute
        console.log("Please enter a username")
        return
        // after return keyword no line of code will be get execute
    }
    return `${username}, Good Morning`;
}
// console.log(loginUserMessage("Hrushikesh"))

// if No value is pass, the username will be undefined
// console.log(loginUserMessage())


// rest opertor in functions - help to handle multiple arugments given a functions
// return the value in form of arrays
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600));


// // Interview questions
// function calculateCartPrices(value1,value2,...num1){
//     return num1
// }
// console.log(calculateCartPrices(200,400,600));
// num1 be consider as 600;
// value1=200
// value2=400


let user={
    name:"Hrushikesh",
    islogged:true,
    contact:123456789
}

// functions - object as parameter
function handleObject(anyObject){
    console.log(`${anyObject.name}, welcome to the page`)
}

handleObject(user)

// instead of passing an object which is already define
// we can define a object in function arguments as well
handleObject({
    name:"Rushi",
})


let myNewArray=[100,200,300]
// functions - Array as parameter

function retrunSecondValue(getArray){
    console.log(getArray[2])  
}

retrunSecondValue(myNewArray)

// instead of passing an Array which is already define
// we can define a object in function arguments as well
retrunSecondValue([200,3,600])