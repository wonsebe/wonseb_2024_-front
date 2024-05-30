
let 제품목록배열=[];


function 추가함수(){
    let RR = document.querySelector('#RR').value;  console.log('RR');
    let rr = document.querySelector('#rr').value;   console.log('rr');
    let date= new Date();    console.log(date);
    let 주문일= `${date.getFullYear()} - ${date.getMonth()+1}-${date.getDate()}`;   console.log(주문일);

    let 객체={제품명: RR, 가격: rr, 주문일:date};

    //localStorage에 있는 제품목록배열 가져오기
let 변환변수 = JSON.parse(localStorage.getItem('변환변수 '));  
console.log(변환변수 ); //null
//가져온 제품목록배열(localStorage)가 없으면 빈배열 대입
if(변환변수  ==null ){제품목록배열=[];}
else{제품목록배열 = 변환변수 ;}
제품목록배열.push(객체);  
localStorage.setItem('변환변수',JSON.stringify(제품목록배열));

alert('제품 저장 성공!!><'); 


}











출력함수();
function 출력함수(){

 let 불러오기 = document.querySelector('#'); console.log(불러오기);
 let html= ``; console.log(html);
 불러오기.innerHTML= html;
}
