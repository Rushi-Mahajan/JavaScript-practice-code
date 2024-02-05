// First Way
const a=[0,1,2,3,4,5]

// console.log(a[0])

// Second way
const b=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]


// a.push(10)
// Add the value at the end of array 
// console.log(a)

// a.pop()
// remove the end/last value from the array 
// console.log(a)

// a.unshift(10)
// Add the value at the first position of array
// console.log(a)

// a.shift()
// Remove the value of the first position of array
// console.log(a)

// console.log(a.includes(9))
// Returns Boolean value true or false, if the value exist in array

// console.log(a.indexOf(13))
// Returns Index postion ,if value exist in array
// If value doesn't exits its reunns -1 value

// console.log((b.join()))
// its bind the arrays value into a string 
// if any value is mention in join parathesis then it will used to separate the value of arrays

// console.log("A->",a)
// const d=a.slice(2,4)
// its returns the subsquent value form an array
// slice(starts of index,end index) -> will return from start of the index till end index-1  
// console.log("Slice",d)

// console.log("B->",a)
// const e=a.splice(2,3)
// its modify orginal arrays, will return the value based on mention index.
// In above case, e will have value like 2,3,4
// Splice(startindex, Noofdigitets to return)
// console.log("C->",a)
// console.log("Splice", e)


let IPL=["MI","CSK","RCB","srh","DC","PK"]
let BBL=["SC","SS","MS","HH","AS","MLS"]

let ClubTeam=IPL.concat(BBL)
// It return a new array while adding two arrays
// console.log(ClubTeam)

let crteam=[...IPL,...BBL]
// Spread opertor ... -> spraed the value of array
// Now days, they mostly used intsead of conact as they can be used to add two or more array
// console.log(crteam)

// let old_arrays=[,1,2,3,45,[11,15,47],19,17,[13,[14,10]]]
// let new_arrays=old_arrays.flat(Infinity)
// console.log(new_arrays)
//To convert array which under another array.To convert this array into a flat arrays
// like this [,1,2,3,45,11,15,47,19,17,13,14,10]

// console.log(Array.isArray("Hrushikesh"))
// Return Boolean value true or false 
// Return true is the valuen is an array 
// Return false is the vallue is not arrays

console.log(Array.from("Hrushikesh"))
// Return a new set of array from above values
// Like --> "H","r","u","s","h","i","k","e","s","h"

let score01=100
let score02=200
let score03=300

console.log(Array.of(score01,score02,score03))
// Return a new set of array from  values sets
// Like --> [100,200,300]

