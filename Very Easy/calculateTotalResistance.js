/* جمع اعداد المصفوفة 
 */
/* Instructions

In a series circuit, the total resistance is
simply the sum of the resistances of each
component connected in series. */

const calculateTotalArea = (arr) => {
    let totalArea = 0;
    for (let i = 0; i < arr.length; i++) {
        totalArea += arr[i];
    }
    return totalArea;
}

console.log(calculateTotalArea([10, 20, 30])); // 60
