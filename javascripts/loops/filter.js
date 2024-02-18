let coding=["JS","CPP","JAVA","Python","Go","Ruby"]

// foreach - don't return the value
const value=coding.forEach((item)=>{
    // console.log(item);
    return item
})

// Return undefined
// console.log(value);

// to return a particular value from array, filter can be used.
// For-Each, can be used but some if statements will be needed.

const nums=[1,2,3,4,5,6,7,8,9,10]

// Implicit returns is used.In below code.
// let number=nums.filter((item)=> item > 4)


let number=nums.filter((item)=> {
    return item > 4
})

// console.log(number);


// Using For-Each -same logic using for-Each loop
let newNums=[];

nums.forEach((item)=>{
    if(item>4){
        newNums.push(item)
    }
})

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userbooks=books.filter((book)=>{
    return book.genre==="History"
  })

  const userbooks1=books.filter((book)=>{
    return book.publish>1995 && book.genre==="History"
  })
  console.log(userbooks1);

