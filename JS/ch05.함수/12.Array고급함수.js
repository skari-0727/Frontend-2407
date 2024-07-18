// 배열에 대한 고급 함수

// forEach
let fruits = "수박,복숭아,체리,딸기,바나나,오렌지,자두,우영우,패션후르츠".split(
  ","
);
console.log(fruits);
for (let fruit of fruits) console.log(fruit);
fruits.forEach((fruit, index) => {
  console.log(`인덱스: ${index}, 아이템: ${fruit}`);
});

let numbers = [12, 27, 55, 74, 81, 94, 2435];
numbers.map((num) => {
  console.log(`${num}, ${num * num}`);
});

// 과일의 글자수가 3인 과일만 선택
let newFruits = fruits.filter((fruit) => fruit.length == 3);
console.log(newFruits);
