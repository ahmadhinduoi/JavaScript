const removeDuplicates = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sortedArr.length; i++) {
    if (i === 0 || sortedArr[i] !== sortedArr[i - 1]) {
      result.push(sortedArr[i]);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 6, 2, 2, 3, 4, 1, 5]));



const removeDuplicatesModern = (arr) => {
  return [...new Set(arr)].sort((a, b) => a - b);
};
console.log(removeDuplicatesModern([1, 6, 2, 2, 3, 74, 1, 5]));
