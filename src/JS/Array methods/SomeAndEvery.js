//some function returns true even if there is one item that matches the condition
//every function returns true only if all the items in the array matches the condition

const items = [
    { name: "Car", price: 8000},
    {name: "Land", price : 30000},
    {name: "House", price : 20000 },
]

const hasExpensiveItem = items.some((item) => {
    return (item.price > 20000)
})
const hasAllExpensiveItem = items.every((item) => {
    return item.price > 15000
})

console.log(hasAllExpensiveItem)
console.log(hasExpensiveItem)