function fib(n) {
  let arr = [1, 1];
  if (n === 1) {
    return arr[0];
  } else if (n === 2) {
    return arr[1];
  } else {
    for (let i = 0; i < n - 2; i++) {
      let sum = arr[i] + arr[i + 1];
      arr.push(sum);
    }
    return arr[n - 1];
  }
}
console.log(fib(1));
console.log(fib(2));
console.log(fib(12));
