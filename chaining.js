console.log("chaining.js");

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
integers.sort(function(first, second) { return first - second; });
document.getElementById('integers-num').innerHTML = integers;


for (let i = 0; i < 20; i++) {
  console.log('i', i);
  let sum = i * 1.5 - 1;
  console.log('sum', sum);
  document.getElementById("integers-out").innerHTML = sum;
}
