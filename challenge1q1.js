// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) 
// should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. 
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// create a function that takes an array as an argument
const cleaner = arr => {
    // create an array with .sort and .reduce methods
    const cleanse = arr
    // sort array in ascending order
    .sort((a,b) => a-b)
    // reduce function to cycle through all elements and organize within cleanse
    .reduce((initial,current,index,arrays)=>{
        // if current element matches index -1
        if (current === arrays[index-1]) {
            // push current into array of array
            initial[initial.length-1].push(current)
        } else {
            // otherwise check if current matches index +1
            // if it does, push it into an array of array
            // otherwise push into array
            initial.push(current===arrays[index+1] ? [current] : current)
        }
        // return initial, which is an array
        return initial
    // initialize an empty array    
    },[])
    // return the new array
    return cleanse
}