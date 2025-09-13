const threeSum = (arr, target) => {
  //  ترتيب المصفوفة لتسهيل البحث باستخدام المؤشرين
  arr.sort((a, b) => a - b);

  //   المرور على المصفوفة لاختيار العنصر الأول في الثلاثي
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    //  استخدام مؤشرين (يسار ويمين) للبحث عن العنصرين الآخرين
    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      if (currentSum === target) {
        return true; 
      } else if (currentSum < target) {
        left++; 
      } else {
        right--;
      }
    }
  }

  return false; 
};

console.log(threeSum([1, 4, 45, 6, 10, 8], 13)); // true
console.log(threeSum([1, 2, 4, 3, 6, 7], 10));   // true
console.log(threeSum([40, 20, 10, 3, 6, 7], 24)); // false
