//concat을 활용한 출력방법
//날짜와 시간을 출력하라.

var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

// var result = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
var result = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second
);
//concat 메서드는 매개변수로 전달된 문자열을 호출한 문자열에 붙여 새로운 문자열로 반환한다.

console.log(result); //2019/04/26 11:34:27
