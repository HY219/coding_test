//몫과 나머지
//두 번째 수수자로 첫 번째 숫자를 나눴을 때, 그 몫과 나머지를 공백으로 구분하여 출력하세요.
const numbers = prompt("두 숫자를 입력해주세요.");

const number = numbers.split(" ");

//Math.floor() -> 소수 이하 자리 버림
const quotient = Math.floor(Number(number[0]) / Number(number[1]));

const remainder = Number(number[0]) % Number(number[1]);

console.log(quotient, remainder);
