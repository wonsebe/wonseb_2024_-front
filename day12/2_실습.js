
/*

실습2: 웹 가계부 만들기
 [요구사항]
 1. 항목마다 날짜 ,항목명 , 금액 3가지를 저장
 2. 등록된 금액의 총합계를 하단에 출력해주세요
 3. 출력은 <table> 사용해주세요


 (요구사항)
1.테이블에 항목 내역을 아래와 같이 출력 해주세요
날짜         항목    금액
2024-05-23    콜라    1000
2024-05-24    커피     2500


2. 내역에서 특정 항목 삭제하는 버튼 기능 구현 해주세요


3. 금액의 천단위 마다 ,(쉼표) 처리해주세요.
    toLocaleString()
 



 (설계)
 [백엔드]
 1.메모리 구성
 


 2.기능 구성

 [프론트엔드]
 1.HTML 구성




*/

let dateList=[];
let nameList=[];
let moneyList=[]
 
function add(){
    //[로직순서] 1. 입력받고 2. 배열저장 3. 안내
    let dateInput= document.querySelector('#dateInput');
    let nameInput=document.querySelector('#nameInput');
    let moneyInput= document.querySelector('#moneyInput');

    let date = dateInput.value;
    let name= nameInput.value;
    let money= Number(moneyInput.value);
    
    //2.
    dateList.push(date);
    nameList.push(name);
    moneyList.push(Number(money));
    //3.
    alert('항목 저장 성공');
    //4. 
   print();
}

    function total() {
        //[로직 순서] 1. 배열에 있는걸 가져와서 다 더해준다. 2. 총합
        let sum=0;
        //i부터 0부터 마지막 인덱스까지 = 배열을 순차적으로 순회(하나씩 금액 호출)
        for(let i =0; i <moneyList.length; i++){
            //배열의 i 번째 인덱스의 금액 호출
            sum += moneyList[i];
        } //for end
    //호출했던 곳으로 데이터 보내주기 = 반환
    return sum;

    }
    function print(){
    
    //HTML 출력
     //1.어디에
    let moneyTable = document.querySelector('#moneyTable');
     //2. 무엇을
    let html='';
        html+=  `<tr>
                 <th>날짜</th><th>항목</th> 
                 <th>금액</th><th>비고</th>
                 </tr>`
    //2. 테이블의 내용 부분 : 항목 내역 들 = 배열내 전체 = 반복문
    for(let i=0; i <moneyList.length; i++){



        let currentMoney =moneyList[i];
        let currentname =moneyList[i];
        let currentdate =moneyList[i];

      html+= ` <tr>
      <td>${currentdate}</td> 
      <td>${currentname}</td>
      <td>${currentMoney.toLocaleString()}</td>
      <td><button onclick="remove( ${ i } )">삭제</button></td>
    </tr>`  
    }
    //하단 부분
    html += ` <tr>
    <td colspan="2">합계</td>
    <td colspan="2">${total().toLocaleString()}</td>
    </tr>`

    //1. 테이블의 제목부분
     console.log(html);
      //3. 대입
      moneyTable.innerHTML= html; console.log(html);

}

//삭제:인덱스를 이용한 삭제 구현
    function remove( deleteIndex ){

    ////
   // let deleteIndex =0

    //배열내 특정 인덱스의 요소 삭제
    dateList.splice( deleteIndex,1 );
    moneyList.splice( deleteIndex,1 );
    nameList.splice( deleteIndex,1 );

    //2. 삭제가 되면 배열의 상태가 변경 되므로 
    // 배열 상태를 다시 출력 -화면 업데이트
    print();

}

