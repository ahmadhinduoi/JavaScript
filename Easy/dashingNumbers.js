const dashing = (number) => {
  let num = "";

  for (let i = 0; i < number.length; i++) {
    num += "-"+number[i]  ;
  }

  return num;
};

console.log(dashing("93532")); 









