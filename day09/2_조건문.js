

/*



*/
/*
//1. 문제 1
let score1 = prompt('점수 :');
let score2 = prompt('점수 :');
let score3 = prompt('점수 :');
let total =  score1 +score2 +score3;
if(total>=80) {console.log('1. 참입니다');}
else if(total<80){console.log('1. 거짓입니다');}  

//2. 문제 2
let int1 = prompt('정수1 :');
let int2 = prompt('정수2 :');
if(int1 >int2) {console.log('정수1>정수2');}
else if(int1 <int2){console.log('정수1<정수2');}

//3. 문제 3 -모름
let int4 = prompt('정수3 :');
let int5 = prompt('정수4 :');
let int6 = prompt('정수5 :');
if(int4 >int5<int6) {console.log('정수3>정수4<정수5');}
*/
/*
//4. 문제 4 -모름 그냥
let a = prompt('정수3 :')*1;
let b = prompt('정수4 :')*1;
let c = prompt('정수5 :')*1;

if(a>b){
    let temp =a;
    a=b;
    b=temp;
}

if(a>c){
    let temp =a;
    a=c;
    b=temp;
}

if(b>c){
    let temp =b;
    b=c;
    c=temp;
}

console.log('오름차순: ${a} ${b} ${c}');

*/ /*
//5. 문제 5
let num= prompt('점수 :');
if(num >=90) {console.log('A등급');}
 else if(num>=80) {console.log('B등급');}
 else if(num>70) {console.log('C등급');}
 else {console.log('재시험')}
/*
 //6. 문제 6 
let id = prompt('아이디 :');
let password = prompt('비밀번호 :');
if (id = admin && password= 1234) {console.log(`로그인 성공`);}
else{console.log(`로그인 실패`);} 
*/
/*
//문제 7
let fruitlist =['바나나' , '사과'];
 let fruit = prompt('과일명');
 if (fruitlist.indexOf(fruit)>=0){console.log('이미 존재하는 과일입니다.');}
 else {frutlist.push(fruit); console.log(fruitlist);}
*/
//8.
/* 
let num = prompt('주민등록번호 :');
 let color = '';
 if(num[7] == 1 || num[7] ==3) color= 'blue';
 else if(num[7] ==2 || num[7] == 4) color= 'red';
 console.log(color);
let html =`<h3 style='color : ${color}'> 주민등록번호 : ${number} </h3>`;
 console.log(html);
 document.querySelector('#result1').innerHTML = html;
*/
/* //9. 경우의 수 판단하기
 1.p1승리(p1가위p2보, p1바위p2가위, p1보p2바위) 2. 패배(그외)  3. 무승부(p1 가위p2가위,p1 바위p2바위,p1 보p2보) */
 /*
 let p1= prompt('가위[0] 바위[0] 보[0] : ');
 let p2= prompt('가위[0] 바위[0] 보[0] : ');
 //2.
 //2-1 p1 승리했을 때
 if((p1 ==0 && p2 ==2)  || (p1 ==1 && p2 ==0) ||(p1 == 2 && p2 ==1)){
console.log('p1 win');
 }
 else if((p1 == 0 && p2 ==0) || (p1 ==1 && p2 ==1)|| (p1 ==2 && p2==2)){
console.log ('draw')
 }
 else{
    console.log('p2 win');
 }

 //2.경우의 수 패턴 식 만들기
 let answer= p1 == p2 ? 'draw' : p1 == (p2+1)%3? 'p1 win' : 'p2 win';
 console.log((p2+1)%3);
 console.log(p1 ==(p2+1)%3);
 console.log(answer); */


 /*10. 좌석 3개의 상태를 가지는 배열 선언하고 let sheetList = [ 'O' , 'X' , 'O' ]
 하나의 좌석 순서번호를 입력받아 빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하고
 빈좌석 : 'X'  사용중인좌석 : 'O' */
 /*
let sheeetList =['O','x','O'];
 let sheetNum = prompt('좌석1',' 좌석2' , '좌석3');
//2.만약 배열에서 내가 선택한 좌석번호에 '0'이면
if( sheetList[sheetNum-1]=='O') {
    console.log('예약불가');

}else if(sheet[sheetNum -1]=='X'){
    console.log('예약성공'); sheetList[sheetNum-1]= 'O'
}
*/



