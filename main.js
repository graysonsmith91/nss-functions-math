// A function to add two values together. This function needs to
// define two parameters - the two numbers that you want to add 
// together.

const addition = (num1, num2) => {
    const sum = num1 + num2
    return sum
}



// A function to multiply a single number by 2. This function 
// takes one parameter - the number you want to multiply by 2.

const multiplyByTwo = (num) => {
    const product = num * 2
    return product
}

const addingFirst = addition(4, 14)

const multiplySecond = multiplyByTwo(addingFirst)
console.log(multiplySecond)