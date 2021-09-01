console.log("1. Fibonacci Sequence");
const fib = (number) => {
  if (number == 1 || number == 2) {
    return 1;
  } else {
    return fib(number - 2) + fib(number - 1);
  }
};
console.log(fib(12));
console.log("=========================");

console.log("2. Array shift");
const shift = (arr, direction, n) => {
  var numberOfElements = n > arr.length ? n % arr.length : n;

  let splice = arr.splice(
    0,
    direction === "right" ? arr.length - numberOfElements : numberOfElements
  );

  return arr.concat(splice);
};
console.log(shift(["john", "jane", "sarah", "alex"], "left", 2));
console.log(shift([1, 2, 3, 4, 5], "right", 3));
console.log("=========================");

console.log("3. Second max");
const secondMax = (arr) => {
  try {
    if (arr && arr.length > 0) {
      arr.sort((a, b) => {
        return a - b;
      });

      let max1 = 0;
      let max2 = 0;
      if (arr.length === 1) {
        max2 = arr[0];
      } else if (arr.every((val) => val === arr[0])) {
        max2 = arr[0];
      } else {
        for (let index = 0; index < arr.length; index++) {
          if (max1 < arr[index]) {
            max2 = max1;
            max1 = arr[index];
          } else if (max2 < arr[index] && arr[index] < max1) {
            max2 = arr[index];
          }
        }
      }
      return max2;
    } else {
      throw "Error!";
    }
  } catch (error) {
    console.log(error);
  }
};
console.log(secondMax([2, 3, 4, 5]));
console.log(secondMax([9, 2, 21, 21]));
console.log(secondMax([4, 4, 4, 4]));
console.log(secondMax([4123]));
console.log(secondMax([]));
console.log("=========================");

console.log("FizzBuzz...But");
const FizzBuzz = (number) => {
  switch (true) {
    case number % 3 === 0 && number % 5 === 0:
      return "FizzBuzz";
    case number % 3 === 0:
      return "Fizz";
    case number % 5 === 0:
      return "Buzz";
    default:
      break;
  }
};

console.log(FizzBuzz(25));
console.log("=========================");
