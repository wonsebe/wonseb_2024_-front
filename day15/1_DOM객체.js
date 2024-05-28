
/*
document : HTMl 전체 요소
document.querySelector('선택자')   :요소1개
document.querySelector('선택자')   : 요소 여러개를 객체를 배열로 반환
    -선택자
     1. 마크업 2. 클래스명 3. id명 4. 자식 > , 자손 띄어쓰기


    -요소 조작 속성/함수
     .innerHTML 속성
        사용가능 요소: <div>, <table>, <ol> 등등 </>닫는 마크업이있는 마크업들
        사용불가능 요소: <input/> ,<img />, <br/> 등등
        <호출> document.querySelector('선택자').innerHTML =데이터

     .value 속성
        -사용가능 요소 :<input /> ,<select> , <textarea> 등등
        -사용불가능요소: <div>, <table> 등등
         <호출> document.querySelector('선택자').value =데이터
         <선언> document.querySelector('선택자').value =HTML형식의문자열데이터
     .src 속성
        -사용가능요소: <img />, <audio />, <video /> 등등
        <호출> document.querySelector('선택자').src 
        <수정> document.querySelector('선택자').src ='파일경로'


     .style 속성
      <전체호출>
      document.querySelector('선택자').style
      document.querySelector('선택자').style= 'css속성코드';
      <전체수정>
      document.querySelector('선택자').style.css= 속성명
      document.querySelector('선택자').style.css= 속성명='속성값'

      -css속성명 작성시 카멜표기법 예시
       1. background-color -> backgroundColor
       2. margin-left= marginLeft


*/



//DOM 객체 확인
console.log(document); //현재 실행된 HTML 뜻
console.log(document.body);
console.log(document.querySelector('body'));
 //2.document.querySelector('선택자')
  //마크업선택자: '마크업명'
 console.log(document.querySelector('div'));
 console.log(document.querySelectorAll('div'));
 //클래스 선택자: '.클래스명'
 console.log(document.querySelector('.box2'));
  //아이디선택자 : '#아이디명'
  console.log(document.querySelector('#box3'));
//자식, 자손선택자
console.log(document.querySelector('body > div'));

//3.선택된 요소(마크업)를 저장
let box3 =document.querySelector('#box3');
console.log(box3);


//4. innerHTML :문서의 요소 필요
console.log(document.querySelector('.box2').innerHTML);
document.querySelector('.box2').innerHTML ='box2';

//5 value :
console.log(document.querySelector('input').value);
document.querySelector('input').value ='강호동';

let select= document.querySelector('select');
console.log(select.value);
select.value='수박'; //목록을 수박으로 수정/대입




console.log(document.querySelector('textarea').value);
document.querySelector('textarea').value= '긴글텍스트';

//6. src: 
document.querySelector('img').src='../다운로드.jpg'

//7. style :
//전체 스타일
console.log(document.querySelector('#box4').style);
document.querySelector('#box4').style =`color:white;background-color:blue`;
//일부 스타일: css속성명을 작성할때 '-' 사용하면 안된다.
    //카멜 표기법: 낙타 등 모양처럼
     //carspeed: carSpeed,   background-color -> backgroundColor
console.log(document.querySelector('#box4').style.backgroundColor);
document.querySelector('#box4').style.backgroundColor='red';