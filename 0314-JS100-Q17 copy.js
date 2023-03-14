//놀이기구 키 제한
//150cm 이상만 탑승
//키가 150이 넘으면 YES, 틀리면 NO

const height = prompt("키가 몇이야?", "150");

if (height >= 150) {
  console.log("YES");
} else {
  console.log("NO");
}
