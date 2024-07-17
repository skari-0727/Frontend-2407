// while  반복문

let summerFruits = ["수박", "참외", "복숭아", "포도"];

let index = 0;
while (index < summerFruits.length) {
  console.log(summerFruits[index]);
  index++;
}

let sumDice = 0;
let diceArray = [];
while (sumDice <= 21) {
  let dice = Math.ceil(Math.random() * 6);
  // console.log(dice);
  diceArray.push(dice);
  sumDice += dice;
}
console.log(diceArray);
console.log(sumDice);
