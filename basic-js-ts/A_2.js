function shift(arr, dir, n) {
  for (var i = 0; i < n; i++) {
    if (dir === "left") {
      arr.push(arr.shift());
    } else {
      arr.unshift(arr.pop());
    }
  }
  return arr;
}
console.log(shift(["john", "jane", "sarah", "alex"], "left", 2));
console.log(shift([1, 2, 3, 4, 5], "right", 3));
