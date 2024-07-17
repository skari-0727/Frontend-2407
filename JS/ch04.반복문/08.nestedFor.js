// 중첩(nested) for 반복문

// 1. 별 다섯개를 여섯줄 그리기

// for (let i = 0; i < 6; i++) {
//   let line = "";
//   for (let k = 0; k < 5; k++) {
//     line += "* ";
//   }
//   console.log(line);
// }

// 2. 디지털 시계를 매 10분마다 표현하기
// for (let hour = 0; hour <= 23; hour++) {
//   for (let min = 0; min <= 59; min++) {
//     if (min % 10 == 0) console.log(`${hour} : ${min}`);
//   }
// }

// 3. 별을 대각선 모양으로 그리기 (다이아몬드 1사분면)
/*
for (let i = 0; i < 10; i++) {
  let line = "";
  for (let k = 0; k < i + 1; k++) {
    line += "* ";
  }
  console.log(line);
}

// 4. 다이아몬드 4사분면
for (let i = 10; i >= 1; i--) {
  let line = "";
  for (let k = 0; k < i - 1; k++) {
    line += "* ";
  }
  console.log(line);
}
  */

// 5. 주사위 눈으로 6 X 6 배열 만들기

let diceArray = [];
for (let i = 0; i < 6; i++) {
  let line = [];
  for (let k = 0; k < 6; k++) {
    line.push(Math.ceil(Math.random() * 6));
  }
  diceArray.push(line);
}
console.log(diceArray);

for (let i = 6; i >= 1; i--) {
  let line = "";
  let line2 = "";
  let line3 = "";
  for (let k = 0; k < i; k++) {
    line += " ";
  }
  for (let k = i; k < 6; k++) {
    line2 += "*";
  }
  for (let k = i; k < 6; k++) {
    line3 += "*";
  }
  console.log(line, line2, line3);
}

for (let i = 0; i <= 6; i++) {
  let line = "";
  let line2 = "";
  let line3 = "";
  for (let k = 0; k < i; k++) {
    line += " ";
  }
  for (let k = 6; k - i; k--) {
    line2 += "*";
  }
  for (let k = 6; k - i; k--) {
    line3 += "*";
  }
  console.log(line, line2, line3);
}

let N = 5; //가운데 두꺼운 별이 9개
for (let i = 0; i <= N; i++) {
  let line = "";
  for (let k = 0; k < N - i; k++) line += " ";
  for (let k = 0; k < 2 * i + 1; k++) line += "*";
  console.log(line);
}
for (let i = N - 1; i >= 0; i--) {
  let line = "";
  for (let k = 0; k < N - i; k++) line += " ";
  for (let k = 0; k < 2 * i + 1; k++) line += "*";
  console.log(line);
}
