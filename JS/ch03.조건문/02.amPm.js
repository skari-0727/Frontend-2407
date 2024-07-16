// 현재 날짜 및 시간을 아는 방법

let today = new Date();
console.log(today); // 2024-07-16T01:09:46.919Z

let hour = today.getHours();
console.log(hour); // 10
console.log(new Date().getHours());

if (hour < 12) console.log(`오전 ${hour}시 ${today.getMinutes()}분 입니다.`);
else console.log(`오전 ${hour - 12}시 ${today.getMinutes()}분 입니다.`);
