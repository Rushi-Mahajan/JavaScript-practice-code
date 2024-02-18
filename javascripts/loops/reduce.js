// Reduce, is mostly used in Carts to total the price

let myNums=[1,2,3]

let number=myNums.reduce((acc,curValue)=>acc+curValue,0)

// console.log(number);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let totalPrice=shoppingCart.reduce((acc,curValue)=> curValue.price+acc,0)

console.log(`Total Price of cart is ${totalPrice}`);