// 1. 1에서 1000사이에 0은 몇 번, 1은 몇 번, ..., 9는 몇 번 사용되었는가?

function countNum() {
  let counts = Array(10).fill(0);
  for (let i = 1; i <= 1000; i++) {
    let numStr = i.toString();
    for (let char of numStr) {
      counts[parseInt(char)]++;
    }
  }
  for (let i = 0; i < counts.length; i++) {
    console.log(`${i}은(는) ${counts[i]}번 사용됨.`);
  }
}
countNum();

// 2. C:/Workspace/FrontEnd/JS/ch06.객체/Q2.연습문제.js
//    위 문자열에서 파일명 Q2.연습문제.js 만 분리하세요.
let sample2 = "C:/Workspace/FrontEnd/JS/ch06.객체/Q2.연습문제.js";
console.log(sample2.substring(33));

// 3. 두 개의 세자리수를 곱해서 나온 결과가 palindrome일 때
//    가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?
function isPalindrome(num) {
  let str = num.toString();
  return str === str.split("").reverse().join("");
}

function maxPalindromeProduct() {
  let maxPalindrome = 0;
  let factors = [];

  for (let i = 999; i >= 100; i--) {
    for (let k = i; k >= 100; k--) {
      let product = i * k;
      if (isPalindrome(product) && product > maxPalindrome) {
        maxPalindrome = product;
        factors = [i, k];
      }
    }
  }

  return { maxPalindrome, factors };
}

let result = maxPalindromeProduct();
console.log(
  `${result.factors[0]} X ${result.factors[1]} = ${result.maxPalindrome}`
);

// 4. 다음 문장에서 the 단어는 몇 번 사용되었는가?
let sample = `the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to the.`;
function countThe(word) {
  let regex = /\bthe\b/gi;
  let matches = sample.match(regex);
  return matches ? matches.length : 0;
}
console.log(`'the' 단어는 ${countThe("the")}번 사용되었음.`);
