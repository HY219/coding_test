//객체의 키 이름 중복
//JS 객체를 다음과 같이 만들었다. 출력값은?(공백x)

var d = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
};

console.log(d["weight"]); //84

//객체의 키와 값 배열로 얻기!!
console.log(Object.keys(d)); //["height", "weight", "temperature", "eyesight"]
console.log(Object.values(d)); //[180, 84, 36, 1]
