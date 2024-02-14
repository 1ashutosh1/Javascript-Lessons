const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`Accumulator value is ${acc} and current value is ${currval}`);
//     return acc + currval
// }, 0)


const myTotal = myNums.reduce( (acc,curr) => (acc + curr), 0)

// console.log(myTotal)




const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Py Course",
        price: 999
    },
    {
        itemName: "Android Dev Course",
        price: 12999
    },
    {
        itemName: "Web Dev Course",
        price: 5999
    },
]



const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0) 
console.log(priceToPay); 
