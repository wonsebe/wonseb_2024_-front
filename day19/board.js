/*




전체 글 출력 페이지
 1.글 등록시 모든 게시물이localStorage 저장된 상태





*/
//1.출력함수 :js가 열렸을 때
boardPrint();
function  boardPrint(){ console.log(boardPrint);
    boardList= JSON.parse(localStorage.getItem('boardList'));
    if(boardList==null){boardList=[];}
    //어디에
    let boardTbody= document.querySelector('#boardTbody'); 
    //무엇을
    let html='';
    for(let i=0; i < boardList.length; i++){
        html += `<tr>
                    <th>${boardList[i].no}</th> 
                    <th><a href="view.html?no=${boardList[i].no}">${boardList[i].title}</th>
                    <th>${boardList[i].writer}</th> 
                    <th>${boardList[i].date}</th>
                    <th>${boardList[i].view}</th>
                </tr>`
    }
    //출력
    boardTbody.innerHTML=html;
}
