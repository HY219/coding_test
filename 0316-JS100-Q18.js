//평균 점수
//영하네 반은 국어, 수학, 영어 시험을 보았다.
//평균 점수를 구해주기로 했다.
//세 과목 점수가 주어지면, 전체 평균 점수 구하기 //소숫점 자리는 버린다.

// const score = [20, 30, 40];

// const array = (score[0] + score[1] + score[2]) / score.length;

// console.log(array);

const scores = prompt("세 과목 점수 입력해라", "20 30 40"); // 20 30 40

//배열로 만들기
const score = scores.split(" "); //['20', '30', '40']
//scores.split(""); //['2','0',' ','3','0',' ','4','0']

let sum = 0;
//Number을 사용하여 string -> 숫자 로 변경
for (i = 0; i < 3; i++) {
  sum += Number(score[i]);
}
//Math.floor()로 소수점 이하 버리기
const array = Math.floor(sum / score.length);

console.log(array);
