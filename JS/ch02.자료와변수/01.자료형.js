/*
 * 자바스크립트의 자료형
 */

// 1. 문자열(String)

console.log("He said 'I love you.'");
console.log('He said "I love you."');
console.log("I'll be back.");

// 특수 문자 - 백슬래시(\) + 문자

console.log('\tabc\tdef"ghi\njkl\\');

// 문자열 연산자(+)
console.log("가나다" + " " + "라마바");

// 문자열 선택
let hello = "안녕하세요?";
console.log(hello, hello[2], hello[4]); // 안녕하세요? 하 요

// 문자열 길이
// 문자열: 속성(attribute), method
console.log(hello.length, hello.charAt(2), hello.charAt(4));

let a = 'this is "string"';
