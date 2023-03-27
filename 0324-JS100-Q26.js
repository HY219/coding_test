//행성 문제2
//수,금,지,화,목,토,천,해
//Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune
//행성의 한글 이름을 입력하면 -> 영어 이름을 반환

const planet = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "MediaStream",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

const input = prompt("행성의 이름을 입력하세요");
console.log(Object(planet[input]));

//객체의 값 가져오기
