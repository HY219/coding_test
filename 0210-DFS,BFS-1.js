function solution(numbers, target) {
  //numbers = [4, 1, 2, 1]
  //target = 4
  var answer = 0;

  var sum;

  //numbers.length 만큼 값들을 더한다.
  //+- 교체해서 경우의 수 모두 구해줌
  // 모두 +일경우, numbers[1]이 -일경우, number[2]이 -일경우,  ..., numbers[1]과 number[2]이 -일경우, numbers[1]과 numbers[3]이 -일 경우, ... //BFS 인가?
  // 모두 +일경우, numbers[1]이 -일경우 모든 경우의 수, number[2]이 -일경우 모든 경우의 수, ... //DFS 인가?

  // function(level, )
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i]; //sum = 8 //만약 4라고 할 경우,,
  }

  numbers[0] * -1 + numbers[i];
  //0번째 것을 -로 바꾼다.
  //n번째 것을 -로 바꾼다.
  //number.length번째 것을 -로 바꾼다.
  //if ... //if문을 여러개 사용해야할 경우??? -> 웹 사이트 참고(notion) !!!
  numbers[i];

  if (sum == target) {
    answer++;
  }

  return answer; //타겟 넘버를 만드는 방법의 수
}
