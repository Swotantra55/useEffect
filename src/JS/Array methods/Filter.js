
function App(){

    const items = [
        { name: "book", price: 100 },
        { name: "copy", price: 50 },
        { name: "bag", price:  500 },
        { name: "desk", price: 400 },
    ]
    const filteredArray = items.filter((item) => 
    {
        return item.price > 100;
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
