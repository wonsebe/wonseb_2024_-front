    /*


    C(저장): 회원가입                       글쓰기                제품등록           주문등록
     js메모리저장 : .push
     브라우저(크롬) 메모리 저장  .setItem('key',value);  
    R(호출): 로그인,내정보                  전체글출력,개별글출력  제품출력           주문출력
      js메모리 호출: 전체호출; for문, 개별호출 : 배열명[]
     브라우저(크롬) 메모리 저장 .getItem
    U(수정): 회원수정                       글수정                 제품수정           주문수정
     js 메모리 수정 : 배열명[].속성명 =새로운값;

    D(삭제): 회원탈퇴                       글삭제                 제품삭제           주문삭제
     js 메모리 삭제 : 배열명.splice(인덱스 , 1);



    */

     /*--------------로그인 상태 유효성검사---------------*/
     //브라우저 세션에 저장된 로그인된 회원번호
     let loginNo= sessionStorage.getItem('loginNo'); console.log('loginNo');
     if(loginNo ==null){
        alert('로그인 후 글쓰기가 가능합니다');
        location.href="login.html";
     }
    let boardList=[];

     function write(){
        console.log("write()");

        //* 
        boardList= JSON.parse(localStorage.getItem('boardList'));
        if(boardList ==null){boardList=[]; }

        //1. HTMl 입력된 데이터 가져오기
        let title= document.querySelector('#title').value;
        let content= document.querySelector('#content').value;

        //3. 데이터 가공
        //작성자 (로그인된 회원= sessionStorage에 회원번호)
       let writer=``; //로그인된 회원의 아이디를 찾아서 넣을 변수 준비

       
       let memberList=[]; //localStorage 에있는 회원목록 호출
       memberList= JSON.parse(localStorage.getItem('memberList'));
       if(memberList == null){memberList=[];}
       //회원목록에서 로그인된 회원번호와 같은 객체 찾기

      for(let i=0; i < memberList.length; i++){
        if(memberList[i].no==loginNo){
            writer =memberList[i].id; //찾은 객체의 아이디를 write변수에 대입

            break; //for 문 탈출
            //return; 함수 탈출

        }
      }console.log(boardList);
        let board= {
            no : boardList.length == 0 ? 1: boardList[boardList.length-1].no +1,
            title: title,
            content: content,
            writer : writer ,
            date: new Date(),
            view : 1
        }; console.log(board);
        //4.저장
        boardList.push(board);
        localStorage.setItem('boardList', JSON.stringify(boardList));
        //5. 안내 후 이후 처리
        alert('글쓰기 성공'); console.log(boardList);
        location.href="board.html"; //js에서 페이지 전환할 때 사용되는 속성

     }