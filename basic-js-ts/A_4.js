function fizzBuzz(n) {
  var arr = new Array();
  arr[0] = new Array();
  arr[1] = new Array();
  arr[0][0] = new Array();
  arr[0][1] = new Array();
  arr[1][0] = new Array();
  arr[0][1][1] = "Fizz";
  arr[1][0][1] = "Buzz";
  arr[0][0][0] = "FizzBuzz";
  x = Math.ceil((n % 3) / 10);
  y = Math.ceil((n % 5) / 10);
  z = Math.ceil((x + y) / 10);
  return arr[x][y][z];
}
console.log(fizzBuzz(21));
console.log(fizzBuzz(25));
console.log(fizzBuzz(45));
console.log(fizzBuzz(3));
