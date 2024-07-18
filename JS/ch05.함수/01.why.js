// 소수(prime number) 판별
let num = 13;
// for (let i = 2; i < num; i++) {
//   if (num % i == 0) {
//     console.log(`${num} 은/는 소수가 아님.`);
//     break;
//   }
// }

function isPrimeNumber(num) {
  let sqrtNum = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i == 0) return false;
  }
  // for (let i = 2; i < num; i++){
  //   if (num % i == 0)
  //     return false;
  // }

  return true;
}

console.log(isPrimeNumber(12, 12));
console.log(isPrimeNumber(13, 13));

// 2에서 부터 100 까지의 소수
let PrimeNumbers = [];
for (let i = 2; i <= 100; i++) {
  if (isPrimeNumber(i)) PrimeNumbers.push(i);
}
console.log(PrimeNumbers);
