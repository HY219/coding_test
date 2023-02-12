//false
//다음은 JS문법 중에서 true를 찾아주세요. //2

/*
1) NaN
2) 1
3) ""
4) 0
5) undefined
 */

// if (NaN === "ture") {
//   return console.log(ture);
// } else {
//   return console.log(false);
// }

NaN === "ture" ? console.log(true) : console.log(false);

// 빈 문자열 -> false
// JS에서는 null, undefined, 0, 빈문자열, NaN, false를 제외하고는 모두 true(참인 값)으로 평가한다.
