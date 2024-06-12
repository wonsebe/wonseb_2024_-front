/*
로그인 페이지
    1. 아이디 i 와 비밀번호 입력받아 기존 회원 목록에 일치한 목록 정보 찾기
    2. 로그인 성공시
        0.결과 안내
        1. 세션저장소 로그인 성공 여부(회원번호) 저장하기
        2. 메인(index.html)페이지로 이동하기
    3.로그인 실패시
     0.결과안내


    *단 회원 목록은 localStorage 사용할 것
    sessionStorage 으로 저장
    브라우저가 꺼지면 자동으로 로그아웃 되게



*/



let boardList=[];
function login(){console.log("login()");
//기존 localStorage 저장된 회원목록을 가져오기
boardList=JSON.parse(localStorage.getItem('boardList'));
if(boardList==null){boardList=[];}

let id = document.querySelector('#id').value;
let pw = document.querySelector('#pw').value;

//어디에
for(let i=0; i < boardList.length; i++){
    let board=boardList[i];
    if(board.sInfo == id && board.pw ==pw){
        alert('로그인 성공');
        //만약에 로그인 성공시 세션저장소 부여
        sessionStorage.setItem('loginNo', board.no);
        location.href= "main.html";
        return;
    }

}
alert('로그인 실패');
//저장

}
