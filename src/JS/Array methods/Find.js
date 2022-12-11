// find method in similar to filter method except that the array it returns 
//a new array that contains one item that is the first find instead of array with all 
//items that matches the condition.


function App(){

    const items = [
        { name: "Car", price: 8000},
        {name: "Land", price : 30000},
        {name: "House", price : 20000 },
        
    ]
    const foundItems = items.find((item)=>{
        return item.price > 8000
    })
    console.log(foundItems)// output array contains only land item though the last item also matches the case
    return (
      <>
      </>
    )
}
export default App

