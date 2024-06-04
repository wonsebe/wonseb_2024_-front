/*

    내정보 페이지
     1.현재 로그인된 회원의 번호, 아이디, 이름, 연락처를 출력하라
     2. 회원탈퇴 버튼을 클릭하면 confirm 함수 사용해서 확인 선택시 탈퇴처리
     * 로그인된 회원번호가 세션 저장소 사용
     *탈퇴시 로그아웃 처리 
     */
    //1. js가 열렸을 때 
    let memberList=[];
    print();
   
     function print(){console.log("print()");
    let loginNo= sessionStorage.getItem('loginNo');
    if(loginNo == null){
        alert('로그인 후 가능한 페이지 입니다.');
        location.href='login.html';
    }
    //현재 로그인된 회원번호를 가지고 회원목록에서 동일한 회원객체 찾기
   
    memberList =JSON.parse(localStorage.getItem('memberList'));
    if(memberList == null){memberList=[]}
        //찾기
        for(let i=0; i< memberList.length; i++){
            if(memberList[i].no ==loginNo){
            document.querySelector('#noBox').innerHTML = memberList[i].no;
            document.querySelector('#idBox').innerHTML = memberList[i].id;
            document.querySelector('#nameBox').innerHTML = memberList[i].name;
            document.querySelector('#phoneBox').innerHTML = memberList[i].phone;
            return;
        }
     }
    }


    //회원탈퇴 버튼을 클릭했을 때. :삭제버튼을 클릭했을 때
    function _delete(){console.log('_delete()');

    //1.정말 탈퇴하는지 확인받기
    let msg= confirm('정말 회원탈퇴 할구야?'); console.log(msg);
    if(msg == false)return;
    //3.확인했으면 탈퇴진행
        //누구를 탈퇴할건지()
        let loginNo= sessionStorage.getItem('loginNo');
            //2. 해당 loginNo의 회원객체 찾기
             //1. 회원목록내 에서 로그인된 회원번호와 동일한 회원찾기
            for(let i=0; i< memberList.length; i++){
                if(memberList[i].no ==loginNo){
                    //찾은 i번째 인덱스의 회원객체를 회원목록에서 삭제
                    memberList.splice(i,1);
                    //회원목록/배열 의 변화가 있기 때문에 localStrage에적용하기 위해 setItem 사용
                    localStorage.setItem('memberList', JSON.stringify(memberList)); //저장
                    //한 번만 탈퇴하기 때문에 탈퇴했을 경우 다음 반복문을 실행할 필요 없음
                    alert('회원탈퇴 되었습니다');
                    break; //for 문 탈출

                }
            }


            logout();

    }

    function update(){
        location.href="update.html";
    }