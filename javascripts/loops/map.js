let myNumber=[1,2,3,4,5,6,7,8,9,10]

// let number=myNumber.map((item)=> item +10)

// Method chaining - multiple method can be added in arrays
// the arrays starts from [1,2,3,4,5,6,7,8,9,10]
// In First map, its will be [10,20,30,40,50,60,70,80,90,100]
// In Second map, it will be [11,21,31,41,51,61,71,81,91,101]
// In Third Filter, it will be [41,51,61,71,81,91,101]

let newNummber=myNumber
            .map((item)=> item * 10)
            .map((item)=>(item + 1))
            .filter((item)=>(item>40))

console.log(newNummber);

