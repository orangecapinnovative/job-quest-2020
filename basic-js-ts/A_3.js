function secondMax(arr) {
  uniqueSet = new Set(arr);
  arr = [...uniqueSet];
  if (arr.length === 0) return "Error!";
  if (arr.length < 2) return arr[0];
  arr.sort((a, b) => b - a);
  return arr[1];
}
console.log(secondMax([2, 3, 4, 5]));
console.log(secondMax([9, 2, 21, 21]));
console.log(secondMax([4, 4, 4, 4]));
console.log(secondMax([4123]));
console.log(secondMax([]));
