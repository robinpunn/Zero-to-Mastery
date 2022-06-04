// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, 
// when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

// create a function that takes an array and target as arguments
let findPairs = (arr,number) => {
    // create a new array with sort and reduce to be returned
    let newArray = arr
        // sort array in ascending order
        .sort((a,b) => a-b)
        // use reduce to cycle through all values
        .reduce((initial, current,index) =>{
            // use for loop to loop through values with current
            // index + 1 to avoid evaluating the same value
            for(let i=index+1;i<arr.length;i++) {
                // push into intial as an array of array
                if(current+arr[i]===number) {
                    initial.push([current,arr[i]])
                    // the above will create an array of arrays of all pairs
                    // use this to find a single pair 
                    // initial.push(current,arr[i]) 
                }
            }
        return initial
        },[])
    return newArray
}































