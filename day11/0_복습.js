
//1. 복습 예제 : 특정 HTMl(star1 div)에 '★' 을 5개 출력하시오.

/*




*/
/* document.querySelector() :특정 선택자의 html 요소를 js 객체로 반환해주는 함수
document.querySelector('#id명')
document.querySelector('cssName')
document.querySelector('tagName') 

*
Dom 객체.innerHTMl = 마크업 사이에 넣을 HTML 형식의 문자열
* <마크업> 여기가 </마크업>
* <div></div> , <ol></ol> , <span></span> 등은 innerHTMl 사용가능
* <input/>, <img/> 등은 innerHTML 사용 불가능




*/
let html =''; // ㅁ+한자키 -> ★; //1. 데이터 구성
//2. 데이터를 1부터 5까지 1씩 증가하면서 하나씩 출력
for(let i=1; i<=5; i++){
    html += '★' //ㅁ+한자 ->8->★
     //누적합계 : 변수 += 값, 변수 = 변수 +값

}
//4. 특정 HTML에 마크업의 innerHTML속성에 변수값을 대입하기
document.querySelector('#star1').innerHTML = html;




//2. 복습예제 : 특정 html(stal1 div)에 총점 5점 만점에 고객평점을 출력하시오.
//   출력형식: 만약에 고객평점이 3점이면 ★★★☆☆
let 고객평점 =3;
let html2='';                            //구성할 html 변수 선언
for(let i=1; i<=5; i++){
    if(i <= 고객평점 ){ html2 += '★'; continue;}
    html2+= '☆'; //아니면
}
document.querySelector('#star2').innerHTML=html2;

//3. 복습예제 : 특정html(sheet div)에 좌석배열 상태에 아래와 같이 출력하시오.
/*
    -빈좌석: x ,예약된 좌석: o
    -2개씩 3줄 출력하고, 빈좌석이면 배경색을 gray 표시, 예약된 좌석이면 red표시
     ㅁ  ㅁ
     ㅁ  ㅁ
     ㅁ  ㅁ
    
*/

let sheetArray = ['o','x','o','x','o','x']
let html3='';
for(let i=0; i < sheetArray.length; i++){
    //만약에 빈 좌석이면 배경색을 gray,
    if(sheetArray[i] =='x'){
        html3 +=`<div class= 'greyBox'>빈좌석 </div>`
    }else{
        html3 +=`<div class= 'redBox'>빈좌석 </div>`
    }
   
}
document.querySelector('#sheet').innerHTML= html3

