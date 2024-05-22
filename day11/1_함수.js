/*

    -이벤트 : 행사 또는 사건
    -(컴퓨터)이벤트: 프로그램에 의해 감지되고 처리 될 수 있는 동작이나 사건
    -(컴퓨터)동작 : 행위, 이벤트 , 메소드, 함수
    - 함수/function: 
      함(공간/상자) 수(숫자) : 상자 안에 들어있는 수 -> 미리 넣어둔 수/코드 ->
      예) 라면 레시피
            -라면 스프(소금, 고춧가루, 간말분말) -> 데이터
            -면 -> 데이터
             1. 물(데이터) 넣는다. (행위)
             2. 온도 체크 (행위)
             3. 면(데이터) 또는 스프(데이터) 넣는다(행위)
             4. 먹는다 (행위)
    -지금 사용했던(미리 만들어진) 함수= 라이브러리(코드모임)
     console.log() , document.querySelector(), push() 등등
     -for() if()는 아님

    -js 데이터 타입
     1. 숫자 2. 문자 3. 논리/불리언 = 자료1개
     4.undefined =자료없다 
     5.배열 = 자료(데이터) 여러개
     6. 함수= 자료(코드)여러개


    -함수 종류
     1.남이 만든 미리 만들어진 함수 =라이브러리 함수, console.log()
     2.내가(개발자) 정의하는 함수 = 정의 함수
            1. 선언적 함수
            2.익명함수
            3. 화살표 함수

    -선언적함수 선언하는 함수
     1.function                          :함수 선언/정의하기 위한 미리 만들어진 키워드
     2.함수명                            : 여럿 함수들을 식별하기 위한 용도(키워드x, 숫자시작x, 일부특수문자, 띄어쓰기x)
     3.매개변수/인수                     : parameter /인수 : 함수 안으로 들어가는 수 , 정해져 있지 않는 수
     4.{ 다양한 실행코드; }              : 함수 호출되면 실행되는 구역
     5. return                           : 반환/리턴 : 함구가 종료 되면서 *함수가 호출했던 곳으로 수 반환
    
    
    
    -익명함수 선언하는 함수
     1.function
     2.함수명
     3.매개변수/인수
     4.{ 다양한 실행코드;}
     5. return
    

    
    -화살표함수 선언하는 함수
     1.(매개변수, 매개변수)
     2.=>
     3.{ 다양한 실행코드;}
     4. return
    




*/

//1. 선언적 함수 선언 방법
function 함수명 (매개변수){console.log('함수실행'); return '반환값';}
//2. 익명함수 선언 방법
function (매개변수){console.log('함수실행'); return '반환값';}
//3. 화살표 함수 선언 방법
(매개변수) => {console.log('함수실행'); return '반환값'}
