/* 
    동기(Synchronous)와 비동기(Asynchronous)
        - 동기적 : 결과값을 기다린다.
        - 비동기적 : 결과값을 기다리지 않는다.
            => 비동기 처리를 위해서는 콜백함수로 처리하는 가장 기본적이다.
            => 비동기 처리가 중첩되는 굉장히 복잡해진다.
        - JS는 싱글 스레드 기반의 논블로킹 언어다.
*/

function sum(a, b) {
  return a + b;
}

function printNum(callback) {
  let result = callback();
  console.log(result);
}

// sum함수의 실행을 기다려야 한다.
printNum(() => sum(2, 3));
/* 
    스켈줄링 함수
        - 스케줄을 등록하는 함수.
            => 일정 시간 후에 등록한 콜백함수를 실행하거나, 일정 시간마다 실행한다.
        
    setTimeout(콜백함수, 지연시간)
        - 일정 시간 후에 콜백함수를 실행한다.
        - 스케줄링 자체는 브라우저가 담당하고, JS 등록만 한다.
        - 실행 결과를 기다리지 않고 다음 코드를 실행한다.


            
*/
console.log("실행");
setTimeout(function () {
  console.log("2초 경과");
}, 2000);
console.log("실행 완료");

let data = null;
function getData(data, callback) {
  setTimeout(function () {
    // 서버에서 데이터를 받아온다고 가정. 2초.
    callback(data);
  }, 2000);
}

getData("슬램덩크", render);

function render(data) {
  console.log(data + " 렌더링!");
}

/* 
    프로미스(Promise)
        - 비동기 처리를 쉽게 도와주는 객체.
        - 객체 생성시 함수를 전달받는데 그 함수의 첫번째 인자는 resolve 함수, 두번째는 reject함수
        - resolve는 성공했을 때 실행할 함수.
            => resolve가 된 상태를 fulfilled 상태.
            => Promise.prototype.then(콜백함수) : resolve된 이후에 실행된다. 
            => 콜백함수의 첫번째 인자로 resolve된 값을 전달한다.
        - reject : 실패했을 때 실행할 함수.
            => reject("이유") : 에러를 발생시킨다.
            => Promise.prototype.catch(콜백함수 ) : reject된 이후에 실행된다.
            => reject된 이유가 콜백함수의 첫번째 매개변수로 전달된다.
        - resolve나 reject되기 전 상태 pending 상태.
        - API 통신을 하면 Promise로 결과값을 받게 된다.
*/
let data02 = null;
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 데이터가 null일 경우 에러 발생
    if (!data02) {
      reject("찾는 데이터가 없습니다.");
    }

    resolve("데이터");
  }, 2000);
});

promise
  .then((res) => {
    console.log("result: " + res);
  })
  .catch((err) => {
    alert(err);
  });

// 서버에서 데이터를 받아서 화면에 그리는 상황 가정.
