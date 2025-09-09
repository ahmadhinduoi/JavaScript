

/* Instructions

Return the smallest number between given
numbers. */

const findSmallest = (num1,num2,num3) => {
   if(num1<num2 && num1<num3){
       return num1
   }else if(num2<num1 && num2<num3){
       return num2
   }
   return num3
}
console.log(findSmallest(5,6,3)) // 3