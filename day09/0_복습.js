/*

//복습예제1 : 1차점수, 2차점수 입력받아 총점이 150점이상이면 '성공' 아니면 '실패'


*/

// 1.입력받은 데이터를 변수에 저장
/*
let point1= prompt('1차점수')*1;
let point2= Number(prompt('2차점수'));

//2. 연산
let total =  point1 +point2;                 console.log(total)

//3.논리조건
let msg = total >= 150? '성공 ' : '실패';     console.log(msg)
//4.문자열 템플릿
let html =`결과 : ${msg}`;                    console.log(html)
let result1= document.querySelector('#result1');  console.log(divVar) 
//document : 문서 ,HTML 뜻
//query(질의)selector( 선택자 )
 //CSS 선택자 동일 : 1. 마크업 2. .class 3. #id
//innerHTML : <마크업> 여기가 inner (/마크업) , 마크업 안에 HTML 형식의 문자열 */

/* 복습예제2
*/
let name1= prompt('이름1: ');  console.log(name1)
let name2= prompt('이름2 :');     console.log(name2)
//논리 조건에 따른 문자열 연결과 변수 수정 (삼향 연산자 사용)
name1 =name1 == '유재석' ? name1 + '(방장)' : name1 ;    console.log(name1)

name2 =name2 == '유재석' ? name2 + '(방장)' : name1 ;     console.log(name2)

    let html2 =
                 `
                 <li>${name1}</li>
                 <li>${name2}</li>                     
                 `                     
                                                        console.log(html2)


//3.HTML의 출력하기
 //1.해당 마크업을 JS로 가져오기
let result2 = document.querySelector('#result2');        console.log(result2)
 //2. 가져온 마크업의 innerHTML 에 데이터(변수) 대입
 result2.innerHTML =html2;



