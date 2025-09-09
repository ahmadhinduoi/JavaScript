/* Instructions

A Stella Octangula number can be
obtained by the formula: . n * (2*n*n - 1)

For example, given 3, the Stella Octangula
number is . 3rd 3 * (2 * 3 * 3 - 1) = 51

Given an integer, return the Stella
Octangula number. n |nth */



const calculateStellaOctangula = (n) => {
return n*(2*n*n-1)
};
console.log(calculateStellaOctangula(5)) // 245
console.log(calculateStellaOctangula(3)) // 51