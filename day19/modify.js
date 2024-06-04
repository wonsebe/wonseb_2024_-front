



/*

수정 페이지
 1. URL 매개변수인 게시물번호(no) 호출
 2. 해당 게시물번호의 title 과 content 정보를 html 대입한다.
 3. 새롭게 입력받은 값 수정처리 

*/
//1. 현재 수정할 게시물의 번호를 URL 쿼리스트링에서 호출
let no= new URL (location.href).searchParams.get('no');
console.log(no);

//2.수정할 게시물의 기존 내용물을 넣어주는 함수 : JS가 열렸을 때
let boardList=[];
board(); 
function board(){
console.log("board()");

 //1.
 boardList= JSON.parse(localStorage.getItem('boardList'));
 if(boardList== null){boardList=[];}
 
 //2.
 for(let i=0; i < boardList.length; i++){
    if(boardList[i].no == no){

        //3.
        document.querySelector('#title').value = boardList[i].title;  //value 값에 저장
        document.querySelector('#content').value = boardList[i].content;

        //4.
        return;

    }
 }
}




//3. 수정
function modify(){
    //1.누구를 : 현재 보고 있는 게시물 =no
    //2. 어떻게: input, textarea 데이터 가져오기
    let title = document.querySelector('#title').value;
    let content= document.querySelector('#content').value;

//3. 수정처리
for(let index in boardList){
    if(boardList[index].no == no){
        boardList[index].title = title; //수정
        boardList[index].content= content;

        //최신화
        localStorage.setItem('boardList', JSON.stringify(boardList));
        //안내후 페이지 전환
        alert('수정했습니다;'); location.href= `view.html?no=${no}`;

    }
}

}