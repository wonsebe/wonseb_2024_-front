
/*
요구사항 확인 
         [비회원 게시판]
         1. 글 등록 하는 데 비회원제 이면서 제목과 내용과 비밀번호 입력받으세요.
         2. 모든 글 출력하는데 등록날짜, 제목, 조회수 순으로 출력해주세요.
         3. 모든 글에서 제목을 클릭하면 상세 글이 출력되고 모든 정보가 출력 될 수 있도록 해주세요.
         <날짜>,<제목>,<조회수>, <내용>
         4. 상세 글에서 수정시 비밀번호를 입력받아 일치하면 새로운 내용을 입력받고 수정해주세요. 아니면 불가능
         5. 상세 글에서 삭제시 비밀번호를 입력받아 일치할 경우에만 삭제
       -요구사항 분석 -> 설계
         1. 메모리 구성
             1. 등록용: 제목, 내용, 비밀번호
             2. 출력용: 날짜, 조회수
                 -1안(배열)
                     1.title=[title1,title2,title3] ,content=[content1,content2,content3], password= [password1,password2,password3];
                     date= [date1,date2,date3], view=[view1, view2, view3]
                     2. board=[
                            [title1,content1, password1,date1],
                            [title2,content2, password2,date2],
                            [title3,content3,password3,date3]
                         ]

                 -2안(문자열)
                 ["title1,content1,password1,date1","title2,content2,password2,date2","title3,content3,password3,date3"]
                 "" 하나의 문자열이 하나의 게시물이 되고, 쉼표기준으로 게시물의 정보 구분한다.
                "title1,content1,password1,date1\ntitle2,title2,content2,password2,date2\ntitle3,title3,content3,password3,date3

                 -3안(객체) 

         2. 기능 구성
             1. 등록 add()
             2. 모든글 출력 allRead()
             3. 상세글 출력 read()
             4. 수정 update()
             5. 삭제 delete() 

         3. 기능 마다의 로직 순서도
             1. create() : 1. HTML에서 입력받은 값 가져오기 2. 유효성 검사 3. 배열 저장 4. 안내
             2. allRead() : 1. (어디에) 출력할 html요소호출 2.(무엇을) 반복문 이용한 배열내 데이터를 HTMl 형식 구성 3. (출력/대입) 구성한html를 요소에 대입 <새로고침>
             3. read() : 1. 상세정보의 인덱스를 받고 2. 해당 인덱스의 정보를 출력한다.(어디에 무엇을 출력)                                                 <새로고침>
             4.update() : 1. 업데이트할 인덱스를 받고 2. 비밀번호를 새롭게 입력받아 3. 입력받은 비밀번호와 해당 인덱스가 일치하면 4. 해당 인덱스 수정       <새로고침>
             5. delete() : 1. 삭제할 인덱스를 받고 2. 비밀번호를 새롭게 입력받아 3. 입력받은 비밀번호와 인덱스의 비밀번호와 일치하면 4. 해당 인덱스 삭제    <새로고침>



         [프론트엔드]
         1.HTML 구성
         


        개발/구현
         [각 파트별 구현]

 */




let boardList=["제목입니다, 내용입니다, 1234-2024-05-24,3", "두번째 제목이야, 또내용입니다, 4567,2024-05-25,0"]

//1. 등록함수 실행조건 : 1. 등록버튼을 클릭했을 때
function _create() {


    let title= document.querySelector('#titleInput').value;
    let content= document.querySelector('#contentInput').value;
    let password= document.querySelector('#passwordInput').value;

    let date =new Date(); //new Date() : 현재 날짜를 반환해주는 클래스;
    console.log(date);
    console.log(date.getFullYear()); //연도만 
    console.log(date.getMonth()); // 월만
    console.log(date.getDate()); //일만

    console.log(date.getHours()) ; //시간만
    console.log(date.getMinutes);  //분만
    console.log(date.getSeconds()); // 초만
    let currentYear = date.getFullYear();
    //날짜 5월 앞에 0을 붙이는 방법
    let currentMonth= date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
    let currentDay= date.getDate() <10 ? "0"+date.getDate() : date.getDate();
date = `${ currentYear }-${ currentMonth }-${ currentDay }`
    let view =0; // 처음 등록시 조회수는 0으로 시작
    //3. ,쉼표 구분해서 하나의 문자열로 만들자
    let board= `${title},${content},${password},${date},${view}` ; console.log(board);
    //4. 배열 등록
    boardList.push(board); console.log(boardList);
    //5.등록 성공
    alert('등록성공')
    _allRead();

}



//2. 전체출력 실행조건 : 1. 페이지가 열렸을 때(HTML 실행 -> JS실행) 2. 데이터가 변화(수정/삭제/등록)가 있을때
_allRead(); //js에서 해당 함수 1번 실행

function _allRead() {
    //어디에
    let tableBody= document.querySelector('#tableBody');
   let html='';
    for(let i=0; i< boardList.length; i++){
        let board= boardList[i]; console.log(board);
        let boardArray =board.split(',');
        //개시물의 정보 분류 : 특정 문자 기준으로 분류 .split
        console.log( boardArray[0] );  console.log( boardArray[3] );  console.log( boardArray[4] );
   
    //무엇을
     html+=` <tr>
     <td>${i}</td>
     <td onclick="_read(${i})">${boardArray[0]}</td> 
     <td>${boardArray[3]}</td>
     <td>${boardArray[4]}</td>
     </tr>`
    }
    //3.출력/대입
    tableBody.innerHTML =html;
}





function _read(index) { //실행조건 : 제목 클릭했을 때
    let boardArray = boardList[index].split(',');
    let viewPage= document.querySelector('#viewPage');
    let html =`<h3>상세 페이지</h3>
                <div>${boardArray[0]}</div>
                <div>
                    <span>조회수 :${boardArray[0]}</span>
                    <span>작성일 : ${boardArray[4]}</span>
                </div>

                <div>${boardArray[1]}</div>
                <button onclick="_update(${index})">수정</button>
                <button onclick="_delete(${index})">삭제</button>`;
    //출력/대입
    viewPage.innerHTML =html;
}




//4.수정함수 실행조건 : (누구를) 1. 수정버튼 클릭할 때
function _update(){
    



 if(_pwConfirm(index)==false) return;
    //배열내 특정 데이터 수정
     //1.해당 게시물 분류 
   
    let utitle=prompt('수정할제목');
    let ucontent=prompt('수정할내용');
     //수정된 정보로 구성
     let board =boardList[index].split(',');

     let uboard =`${utitle},${ucontent},${board[2]},${board[3]},${board[4]}`;

     boardList[index] =uboard;
     _allRead();
     _read(index);
}




//5. 삭제함수 실행조건 :(누구를) 1. 삭제버튼 클릭할 때
function _delete(index) {

  
    if(_pwConfirm(index)==false) return;
    //배열내 특정 인덱스 삭제
    boardList.splice(index, 1);
    _allRead();
    document.querySelector('#viewpage').innerHTML=``;
}
//6.패스워드 체크 함수
function _pwConfirm(index){
      //패스워드 검증
     //1. 검증받을 패스워드 입력받는다.
     let confirmPw= prompt('비밀번호');
      //해당 인덱스의 비밀번호와 입력받은 비밀번호가 일치한지 체크
      if(confirmPw!=boardList[index].split(','[2])){
        alert('패스워드가 다릅니다');
            return true; //패스워드 일치 실패 뜻함수 종료, 이하 아래 코드는 실행이 안됨.
      }


}