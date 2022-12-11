//in the example below, the total price of the all items is calculated using reduce method


function App(){

    const items = [
        { name: "Car", price: 8000},
        {name: "Land", price : 30000},
        {name: "House", price : 20000 },
    ]
    const total = items.reduce((totalPrice, item) => {
        return item.price + totalPrice
    }, 0)
    console.log(total)

    return (
        <>
        </>
    )
}
export default App