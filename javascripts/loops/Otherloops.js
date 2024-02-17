// Below are the arrays specfic loops
// For-of
// 1. Are mostly used for Arrays & Maps. for Object, we cannot used
// sytax

// const iterator - Variable
// Object - Arrays, String or any Variable that need to be Iterate

// for (const iterator of object) {
    
// }

// ["","",""]
// {"","",""} 

// using array

// let myArrays=[1,2,3,4,5]

// for (let value of myArrays) {
//     console.log(value);
// }

// Using string
let myStrings="Hello World"

for(let value of myStrings){
    if(value==" ")
    {
        continue
    }
    else{
    // console.log(value)

    }
}


// Maps
// 1. Its an Object that hold key-value pairs & also remember the order of insertions(while Object don't remember its)
// 2. Its only store unique key only.
// 3. Its can store different datatype & primitive value

let maps=new Map()
maps.set("IN","India")
maps.set("FR","France")
maps.set("SP","Spain")
// The value is not added, as the key & value are duplicate
maps.set("IN","Inida")

// below will update the keys where its is "IN" in map
maps.set("IN","Indians")


// console.log(maps);

// to iterate map using for of
for (let i of maps) {
    // console.log(i);
}

// the above code will return key & value in Arrays form like below separate on basis of key-value
// [ 'IN', 'Indians' ]
// [ 'FR', 'France' ]
// [ 'SP', 'Spain' ]


// to iterate key value, we use below code -[key,value] (we are destructing an array)
for (const [key,value] of maps) {
    // console.log(`${key} :- ${value}`);
}
// Output:-
// IN :- Indians
// FR :- France
// SP :- Spain



// let myObject={
//     game1:"NFS",
//     game2:"ETS2",
//     game3:"BGMI"
// }

// In For-of loop, Object cannot be iterate.
// Will give error as  myObject is not iterable
// for (let [keys,value] of myObject) {
//     console.log(keys);
// }



// For in
// It return the keys, In Object it will return the keys which were sets
// while in array it will return the index

// Syntax
// for (const key in object) {
// }


let myObject={
    game1:"NFS",
    game2:"ETS2",
    game3:"BGMI"
}

// to iterate an object using for in
for(let keys in myObject){
    // console.log(keys);
}
// Output - will return keys only
// game1
// game2
// game3

for(let keys in myObject){
    // console.log(`${keys} :- ${myObject[keys]}`);
}
// from keys we can get value by using myObject[keys]


// Using for in for Arrays
let myArrays=["NFS","ETS2","BGMI","CSGO","ETS"]

for (const num in myArrays) {
    // console.log(`${num}`);
}
// Output:- return the keys for index only
// 1
// 2
// 3
// 4

// To get value of an arrays, we can use the keys which in returns - myArrays[num]
for (const num in myArrays) {
    // console.log(`${myArrays[num]}`);
}


// using for-in in maps. In Maps, it cannot be used as it is an Non-iterable object
for (const keys in maps) {
    // console.log(keys);
}

// For-Each - High Order function
// Syntax 
// array.foreach(call back function){}

let coding=["JS","Python","Java","CPP","Ruby","Rust","Go"]

coding.forEach(function(value){
    // console.log(value);
})
// Output:- return an value
// JS
// Python
// Java
// CPP
// Ruby
// Rust
// Go

// using for-each with call back as an arrow function
coding.forEach((value)=>{
    // console.log(value);
})

function PrintMe(item){
    // console.log(item);
}

// To give referenece only not to execute
// coding.forEach(PrintMe)

coding.forEach((item,index,arra)=>{
    // console.log(item, index,arra)
})
// the foreach loop, have access to Item,Index,array
// Item - is the value of arrays
// Index - return the index of the value
// Arrays - its also have access to whole array as well
//  output:-
// JS 0 [
//     'JS',   'Python',
//     'Java', 'CPP',
//     'Ruby', 'Rust',
//     'Go'
//   ]
//   Python 1 [
//     'JS',   'Python',
//     'Java', 'CPP',
//     'Ruby', 'Rust',
//     'Go'
//   ]
//   Java 2 [
//     'JS',   'Python',
//     'Java', 'CPP',
//     'Ruby', 'Rust',
//     'Go'
//   ]
//   CPP 3 [
//     'JS',   'Python',
//     'Java', 'CPP',
//     'Ruby', 'Rust',
//     'Go'
//   ]
//   Ruby 4 [
//     'JS',   'Python',
//     'Java', 'CPP',
//     'Ruby', 'Rust',
//     'Go'
//   ]
//   Rust 5 [
//     'JS',   'Python',
//     'Java', 'CPP',
//     'Ruby', 'Rust',
//     'Go'
//   ]
//   Go 6 [
//     'JS',   'Python',
//     'Java', 'CPP',
//     'Ruby', 'Rust',
//     'Go'
//   ]

let mycding=[
    {
        lang:"JavaScript",
        filetype:"JS"
    },
    {
        lang:"Java",
        filetype:"Java"
    },
    {
        lang:"Python",
        filetype:"py"
    }
]

// [{},{},{}]
// Using foreach loop, to access object from an array
mycding.forEach((item)=>{
    console.log(item.lang);
})