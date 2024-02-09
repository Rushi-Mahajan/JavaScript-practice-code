// let a=10
// const b=20
// var c=30


// Block
// {}
// global scope
if(true){
    // block scope
    // variable of global can be access block scope
    
    let a=10
    const b=20
    var c=30
}
// Block scope variable cannot be access in global scope
//let & const are block level scope
// console.log(a)
// console.log(b)
// console.log(c)


// In broswer & Node js, are totally different-- Interview questions

function one(){
    let username="Hrushikesh"

    function two(){
        let website="youtube"
        console.log(username);       
    }
    // console.log(website);
    // two()
}

one()

if(true){
    let users="hrushikesh"

    if(users==="hrushikesh"){
        let website=" Youtube"
        // console.log(users," ",website);
    }
    // console.log(website);
}
// console.log(users);


// ************************************************************************** - Interesting

console.log(addOne(5)); 

function addOne(value){
    return value+1
}


addTwo(2)
 
let addTwo=function(value1){
    return value1+2
}
