/*

    -회원가입 페이지
     1.회원정보 : 1. 회원번호 2. 아이디 3. 비밀번호 4. 이름 5. 연락처
     2. 입력사항 : 아이디, 비밀번호, 비밀번호 확인, 이름 , 연락처
     3. 유효성 검사:
         1. 아이디와 비밀번호는 5글자 이상 만 가능
         2. 이름은 3글이상 만 가능
         3. 연락처는 - 제외한 8자리 이상 만 가능
         4. 비밀번호와 비밀번호확인 일치 했을 때만 가능
         5. 아이디와 연락처는 중복 제외

    *회원번호는 자동 부여됩니다.
    *회원목록은 localStorage 에 저장할 것



*/

let memberList =[]; //회원목록



function signup(){
    console.log("signup()");
    //호출
    memberList= JSON.parse(localStorage.getItem('memberList'));
    if(memberList ==null){memberList= [];}
    //1. html 에서 입력받은 데이터 가져오기
    let id=document.querySelector('#id').value;
    let pw=document.querySelector('#pw').value;
    let pwconfirm=document.querySelector('#pwconfirm').value;
    let name=document.querySelector('#name').value;
    let phone=document.querySelector('#phone').value;
    

    //유효성검사
     //1. 아이디와 비밀번호는 5글자 이상만 가능
     if(id.length <5){alert('회원가입실패! 아이디는 5글자 이상만 넣어주세요'); return;}
     if(pw.length <5){alert('회원가입실패! 비밀번호는 5글자 이상만 넣어주세요'); return;}
    
     //2. 이름은 3글이상 이상 만 가능
     if(name.length <3){alert('회원가입실패! 이름은 3글자 이상만 넣어주세요'); return;}
     //3. 연락처는 - 제외한 8자리 이상 만 가능
     if(phone.length <8 || isNaN (phone)){alert('회원가입실패! 연락처는 - 제외한 8글자 이상만 넣어주세요'); return;}
     //4. 비밀번호와 비밀번호확인 일치 했을 때만 가능
     if(pw != pwconfirm){alert('회원가입실패! 두 비밀번호가 일치하지 않습니다.'); return;}

     //5. 아이디와 연락처는 중복 제외
      //아이디중복검사 : 회원목록내 i번째 회원아이디와 입력받은 아이디가 같으면
      for(let i =0; i <memberList.length; i++){
       if( memberList[i].id == id ){alert('회원가입실패: 사용중인 아이디입니다.'); return;}
      }

     


      //만약에 회원목록에 회원이 없으면 1 있으면 마지막회원의 번호 +1
      let no= memberList.length == 0? 1: memberList[memberList.length-1].no +1 //마지막 번호에 부여
      //객체화
      let member= {
        no : no , id : id, pw : pw, name : name, phone : phone
    }; console.log(member);


    //4. 저장
    memberList.push(member);
    //* localStorage 저장
    localStorage.setItem('memberList', JSON.stringify(memberList));

    //5. 결과안내 후 페이지 전환, location.href ="이동할경로"
    alert('회원가입성공'); location.href='location.html'; //페이지 이동
    


}