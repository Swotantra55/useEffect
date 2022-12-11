//Map is used to create a new array by taking all the items of the array
//the mapped array contains items that is processed in the return of the map function


function App(){

    const items = [
        { name: "book", price: 100 },
        { name: "copy", price: 50 },
        { name: "bag", price:  500 },
        { name: "desk", price: 400 },
    ]
    const filteredArray = items.filter((item) => 
    {
        return (`${item.name} is an item`)
        // return (item.name + "is an item") // it's same thing as in above
    }
    //returns array items only with the price greater than 100 ie. bag and desk
    )
    console.log(filteredArray)

    return (
      <>

      </>
    )
}
export default App
