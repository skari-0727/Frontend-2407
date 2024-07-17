let summerFruits = ["수박", "참외", "복숭아", "포도"];

for (let i = 0; i <= 3; i++) {
  console.log(i, summerFruits[i]);
}
for (let i = 0; i < 4; i++) {
  console.log(i, summerFruits[i]);
}
for (let i = 0; i < summerFruits.length; i++) {
  console.log(i, summerFruits[i]);
}

// 1에서 5000까지의 정수의 합 구하기
let sum = 0;
for (let th = 1; th <= 5000; th++) {
  sum += th;
}
console.log(`1에서 5000까지의 합 = ${sum}`);

// 1에서 100사이의 홀수의 합 구하기
// let sumOdd = 0;
// for (let r = 1; r <= 100; r++) {
//   if (r % 2 == 1) sumOdd += r;
// }

let sumOdd = 0;
for (let r = 1; r < 100; r += 2) {
  sumOdd += r;
}
console.log(`1에서 100사이의 홀수의 합은 = ${sumOdd}`);

let sumAdd = 0;
for (let s = 2; s <= 200; s += 2) {
  sumAdd += s;
}
console.log(`1에서 200사이의 짝수의 합은 = ${sumAdd}`);

let third = 0;
for (let xx = 0; xx <= 100; xx += 3) {
  third += xx;
}
console.log(`1에서 100사이의 3의 배수들의 합은 = ${third}`);

// 200에서 100사이의 5의 배수의 합
let sum5 = 0;
for (let fiv = 200; fiv >= 100; fiv -= 5) {
  sum5 += fiv;
}
console.log(`200에서 100사이의 5의 배수들의 합은 = ${sum5}`);

// 하루는 몇분이냐?
let sumMin = 0;
for (let hour = 0; hour <= 23; hour++) {
  for (let min = 0; min <= 59; min++) {
    sumMin++;
  }
}
console.log(sumMin);
