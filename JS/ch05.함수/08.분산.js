//

let arr = [1, 2, 3, 4, 5, 6];

function sumOfSquare(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num * num;
  }
  return sum;
}

function squareOfSom(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum * sum;
}

console.log(sumOfSquare(arr), squareOfSom(arr));
