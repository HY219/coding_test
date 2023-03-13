//로꾸거
//문장이 입력되면 거꾸로 출력하는 프로그램을 만들자.
const input = prompt("입력하세요");

const word = input.split("").reverse().join("");

console.log(word);

// split('') : 입력된 string 값 -> 문자열로 이뤄진 배열로 분할
// reverse() : 배열 요소 반전 (거꾸로)
// join('') : 배열의 모든 요소 -> 문자열로 결합
