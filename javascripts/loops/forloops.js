// for loop


// for(delcarations variable,consditions,increment){}
// 1. delcarations of variable - this is exeuted only once
// 2. Conditions - after variable is declare it will check the conditions and also after each iterations(I--,I++ - the value is increase or decrease) then it check the condistions
// . if its true it wil excuted the scope code 
// 3. increment - this statement will increase the value at every iterations  

for (let i = 0; i <= 10; i++) {
    const element = i
    if(element==5){
        // console.log("Best Number");
    }
    // console.log(element);
}

// i is not access able outside scope of For loop
// console.log(i);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner loop ${j} & Outer loop ${i}`);
        // console.log(i + "*" + j + "="+ i*j);
    }
}


// to iterate Array using for loop
let myArray=["Superman","Batman","Sharks"]
console.log(myArray.length);

// for (let index = 0; index <myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// if we use index<= myArray in below code, then last value it will return as undefined
// Superman
// Batman
// Sharks
// undefined <--
// As the array hold only 3 value. Note the index start from 0. 
// for (let index = 0; index <=myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }



// Index++ is an important statement here, if we give as index only then it will go infinite loops
// for (let index = 0; index <myArray.length; index) {
//     const element = myArray[index];
//     console.log(element);
// }

// Break & Continue

// Break -> note we can only use break under IF only & if conditions is true 
// then it will stop execution of the loop, will start executing the code which are after the loops 
// In below case, the Line 69 will start executing.  

// for (let index = 0; index <=20 ;index++) {
//     if(index==5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`${index}`);
// }


// Continue --> note we can use continue in if only. if the conditions of if is true.
// Then it will skip the current iterations, got to next itertaions
// Inj below case it skip when index was 5  ,executed started from when the index was 6.
  
for (let index = 0; index <=20 ;index++) {
    if(index==5){
        console.log("Detected 5");
        continue;
    }
    console.log(`${index}`);
}