// Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats 
// so that if you enter HEX color format it returns RGB 
// and if you enter RGB color format it returns HEX.

// a function that can take three arguments
let colorChanger = (input,input2,input3) => {
    // check if input is a string
    if (typeof input === "string") {
    // if input is a string, a function that takes one argument
    // slice string, ignoring #, convert each part to decimal
    // use parseInt to conver to decimal
        let hexToDecimal = hexString => {
            let r = parseInt(hexString.slice(1,3), 16)
            let g = parseInt(hexString.slice(3,5), 16)
            let b = parseInt(hexString.slice(5,7), 16)
            return `rgb(${r}.${g},${b})`
        }
        // enter parameters from colorChanger and return the hexToDecimal function
        return hexToDecimal(input)
        // if input isn't a string
        // use decimaltohex function
        // use parseInt to convert each argument combined into one string
    } else  {
        let decimalToHex = (first,second,third) => {
            let hex1 = first.toString(16)
            let hex2 = second.toString(16)
            let hex3 = second.toString(16)
            return `#${hex1}${hex2}${hex3}`
        }
        // enter parameters from colorchanger and return decimalToHex
        return decimalToHex(input,input2,input3)    
    }
}