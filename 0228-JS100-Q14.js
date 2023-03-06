//3의 배수 인가요?
//369게임
//입력으로 랜덤 숫자 n이 주어짐.
//n이 3의 배수라면 '짝', 아니면 n 출력

const n = prompt("숫자를 입력해주세요", "1");

if (n % 3 === 0) {
  console.log("짝");
} else {
  console.log(n);
}
