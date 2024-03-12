// console.log(Math.PI);
// Math.PI=3
// console.log(Math.PI);
// Math.PI - Value cannot be change, as their property is disable of writables etc.

let obj=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(obj);

let obj1={
    username:"Hrushikesh",
    password:"Pasword",
    isAvailable:true,

    greeting:function(){
        console.log("welcome");
    }
}

console.log(Object.getOwnPropertyDescriptor(obj1,"username"));
// {
//   value: 'Hrushikesh',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(obj1,"username",{
    writable:false,
    enumerable:true,
})

console.log(Object.getOwnPropertyDescriptor(obj1,"username"));

obj1.username="Rushi"

// console.log(obj1);

for (const [key,value] of Object.entries(obj1)) {
    if(typeof value !== "function"){
    console.log(key , value);
    }
}
