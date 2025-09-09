/* Instructions

If the number is divisible by 5, return .
Otherwise, return .

"Yes"
"No" */


const isDivisibleByFive = (num) => {
    if(num % 5 === 0) {
        return "Yes";
    }
    return "No";
}
console.log(isDivisibleByFive(10)) // Yes
console.log(isDivisibleByFive(7)) // No