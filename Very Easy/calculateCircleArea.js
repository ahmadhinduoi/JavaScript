Instructions
/* 
The formula for the area of a circle is:

area = pi * r * r

Return the area of a circle with radius . radius

Hint: Use to insert the value of PI. Math. PI */




const calculateCircleArea = (radius) => {
    return (Math.PI * radius * radius).toFixed();
}
console.log(calculateCircleArea(5)) // 78.540
