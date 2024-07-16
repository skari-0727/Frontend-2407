// 사분면 고르기 - 백준도장 14681

let x = Math.ceil(Math.random() * 20);
let y = Math.ceil(Math.random() * 20);
x *= Math.random() > 0.5 ? 1 : -1;
y *= Math.random() > 0.5 ? 1 : -1;

let quadrant = "";

if (x > 0 && y > 0) {
  quadrant = "1 사분면";
} else if (x < 0 && y > 0) {
  quadrant = "2 사분면";
} else if (x < 0 && y < 0) {
  quadrant = "3 사분면";
} else if (x > 0 && y < 0) {
  quadrant = "4 사분면";
} else quadrant = "좌표축";

console.log(x, y);
console.log(`해당 좌표는 ${quadrant}입니다.`);
