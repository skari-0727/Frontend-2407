let x = Math.ceil(Math.random() * 6);
let y = Math.ceil(Math.random() * 6);
let z = Math.ceil(Math.random() * 6);
let money = "0";

if (x == y && y == z) {
  money = 10000 + x * 1000;
} else if (x == y || y == z) {
  money = 1000 + y * 100;
} else if (z == x) {
  money = 1000 + z * 100;
} else {
  money = Math.max(x, y, z) * 100;
}

console.log(x, y, z);
console.log(`상금은 ${money}원입니다.`);
