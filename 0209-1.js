//s에서 한 번만 등장하는 문자를 사전 순으로 정렬하여 return
function solution(s) {
  //var s = hello
  var array = [...s]; //['h','e','l','l','o']
  var dup = [];

  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        dup.push(array[j]);
      }
    }
  }

  for (i = 0; i < dup.length; i++) {
    for (j = i + 1; j < dup.length; j++) {
      if (dup[i] == dup[j]) {
        dup.splice(i, 1);
      }
    }
  }

  for (i = 0; i < dup.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (dup[i] == array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }

  var result = array.sort().join("");

  //var answer = '';
  var answer = result;
  return answer;
}
