/* Suppose, the pass mark is 40.

If the mark is greater than or equal to 40,
return "Pass"
Otherwise, return "Fail"

Example

For this input

marks = 45  

the result should be:

"Pass"

Reason: Since, 45 is greater than 40,the
student has passed.
 */




const checkPassOrFail=(marks) => {
   if(marks>=40){
       return "Pass"
   }
   return "Fail"
}
console.log(checkPassOrFail(45)) // Pass