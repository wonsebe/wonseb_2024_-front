/*

매개변수와 반환값 선언                호출
     1.   function(){}                func1
     2.   function func2(매개변수1, 매개변수2){} 
     3.   function func2(매개변수1, 매개변수2){return} 
     4.   function func4() { return}

 
-함수 호출하는 방법
 1.js에서 js 함수를 호출하는 방법 : 함수명()
     1. 선언된 함수가 같은 JS에서 존재하면 : 함수명() 
 2.HTML 에서 JS 함수를 호출하는 방법
     <마크업 이벤트속성= "함수명()"></마크업>
 
 
 


*/
// 함수정의 / 만들기
//1. 선언적 함수
//매개변수x 반환값x
function func1(){console.log('func1 실행');}
//매개변수 o , 반환값 x
function func2( x , y ){ console.log(`func2 실행`+(x+y));}
//매개변수o 반환값x
function func3(x,y){console.log(`func3 실행`+ (x+y)); return x+y;}
//매개변수x, 반환값 x
function func4() { console.log(`func4 실행`); return '10';}
//함수 호풀
//0.라이브러리 : 미리 만들어둔 함수 호출
 console.log('lib 실행'); //매개변수o: f12개발자도구 출력할메시지, 반환값x
 //prompt('메시지'); //매개변수o : 알림창에 출력할메시지, 반환값o : 입력받은 값
 document.querySelector() //매개변수o : 선택자, 반환값o : DOM객체(html마크업을 js코드객체)
 Math.random();           // 매개변수x, 반환o :0~1미만 난수값
//1. 함수명(매개변수)
 // 1. 함수명() : 매개변수x 없는 함수 호출
 func1();
 //함수명 (데이터, 데이터 ): 매개변수에 대입할 데이터 대입
 func2(10,3);
 func2(5,3);
 //함수명(데이터, 데이터) : 매개변수에 데이터 대입 ,
 func3(10,3);  //10과 3을 대입해서 함수가 실행후 13 반환하지만 변수에 대입 안했기 때문에 사라짐
 let result3 =func3(10,3)
console.log(func3(10,3));
//let result4=func4();
let result4=func4();