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
        .reduce((initial,current,index)=>{
            // if current element matches index -1
            if (current === arr[index-1]) {
                // push current into array of array
                initial[initial.length-1].push(current)
            } else {
                // otherwise check if current matches index +1
                // if it does, push it into an array of array
                // otherwise push into array
                initial.push(current===arr[index+1] ? [current] : current)
            }
            // return initial, which is an array
            return initial
        // initialize an empty array    
        },[])
        // return the new array
    return cleanse
}

// create a function that takes an array as an argument
const cleaner2 = arr => {
    // create a sorting function to be used as a callback 
    // sort in ascending order numeric to alphabet
    const sorter = (a,b) => {
        // create variables that store typeof number
        const first = typeof a === 'number'
        const second = typeof b === 'number'
        // if a is number and b is number, return ascending order
        if (first && second) {
            return a -b
        // if a is number and b is not, reverse order    
        } else if (first && !second) {
            return -1
        // if a is not a number and b is a number, array stays the same    
        } else if (!first && second) {
            return 1
        // otherwise, if a is greater than b, array stays the same
        // if b is greater than a, reverse order     
        } else {
            return a > b ? 1 : -1
        } 
    }
    // create an array using sort and reduce
    const cleanse = arr
        // callback sorter
        .sort(sorter)
        // use reduce to cycle through elements and check typeof
        .reduce((initial, current, index) => {
            if (typeof current === typeof arr[index-1]) {
                // if type of matches index -1, push into array of array
                initial[initial.length -1].push(current)
            } else {
                // otherwise check if current type of matches index +1
                // if yes, push into array of array, otherwise push into array
                initial.push(typeof current === typeof arr[index+1] ? [current] : current)
            }
            // return initial, which will be an array
            return initial
        },[])
    // return newly created array    
    return cleanse
}