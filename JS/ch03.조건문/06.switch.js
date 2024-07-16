// 여러개 값중에 하나를 선택

let score = Math.ceil(Math.random() * 100) + 1;
let grade = "";

switch (
  parseInt(score / 10) // score 값은 1,2,3,4,5,6,7,8,9,10 으로 변환됨
) {
  case 10:
  case 9:
    grade = "A";
    break; // swich 문을 벗어나게 해줌
  case 8:
    grade = "B";
    break;
  case 7:
    grade = "C";
    break;
  case 6:
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log(`점수: ${score}, 학점: ${grade}`);

// +, 0, - 성적 시스템
let sign = "";
switch (score % 10) {
  case 9:
  case 8:
  case 7:
    sign = "+";
    break;
  case 6:
  case 5:
  case 4:
  case 3:
    sign = "0";
    break;
  case 2:
  case 1:
  case 0:
    sign = "-";
}
console.log(`점수: ${score}, 학점: ${grade}${sign}`);
