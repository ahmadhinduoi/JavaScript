/* Instructions

Return the total number of seconds for the
given number of minutes.

Hint: 1 minute = 60 seconds

Example

For this input

minutes = 5

the result should be:

300

Reason: 5 multiplied by 60 is 300. */


const minutesToSeconds=(minutes) => {
    return minutes*60
}
console.log(minutesToSeconds(5)) // 300