function largestNumber(arr) {
  const strArr = arr.map((num) => num.toString());
  strArr.sort((a, b) => b + a - (a + b));
  const result = strArr.join("");
  return result[0] === "0" ? "0" : result;
}
console.log(largestNumber([10, 2, 13, 7]));
console.log(largestNumber([21, 36, 8, 45]));
