/* 
    1. 필요한 요소 가져오기
    2. 이벤트 바인딩 => 클래스명 추가 및 제거
*/
let btnSide = document.querySelector(".btnSide");
let nav = document.querySelector("nav");
btnSide.addEventListener("click", function () {
  nav.classList.add("on");
});

nav.addEventListener("click", function (e) {
  // 이벤트가 바인딩된 타겟과 이벤트가 실제 발생한 타겟을 비교
  if (e.target === e.currentTarget) {
    nav.classList.remove("on");
  }
});
