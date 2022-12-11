const age = [ 3, 10, 34,19,18, 13]
    //console.log(age.indexOf(34)) //2
    //console.log(age.fill(90))//fills the whole array with 90
    console.log(age.sort())//2 is greater than 19 because 2>1
    console.log(age);
    console.log(age.reverse());

    const fruits =[ "apple","strawberry", "banana"]
    console.log(fruits.sort());
    console.log(fruits.toString()) 

    console.log(age.pop());//last item 10
    console.log(age)
    console.log(age.shift())//first age item out in console and out from the array
    console.log(age.unshift("10"))// adds an item at the first
    console.log(age)

    //console.log(age.concat(fruits, array2, array3));// agee....fruits
    console.log(age.join(" and "))//10 and 20 and...

    console.log(fruits.valueOf());//prints all the items in the array

    console.log(fruits.length)

    const students =[ "Shiva", "Rohan", "Prakash"]
    students.length = 2
    console.log(students)
