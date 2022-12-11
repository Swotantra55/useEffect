//for each does not return an array but it iterates through every 
//item in the array like a for loop

function App(){

    const items = [
        { name: "Car", price: 8000},
        {name: "Land", price : 30000},
        {name: "House", price : 20000 },
    ]
    items.forEach((item) => {
        console.log(`${item.name} is an item`) //is an item
    })

    return (
        <>
        </>
    )
}
export default App
