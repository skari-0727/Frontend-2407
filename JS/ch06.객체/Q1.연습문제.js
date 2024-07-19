// 디지털 시계에서 하루에 3이 표시되는 시간은 총 몇초인가

let sum = 0;
for (let hour = 0; hour <= 23; hour++) {
  for (let min = 0; min <= 59; min++) {
    let timeStr = hour + ":" + min;
    if (timeStr.indexOf("3") >= 0) sum += 60;
  }
}
console.log(sum);
