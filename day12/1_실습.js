

/*

1.메모리 구성
 1.여럿 아이디와 비밀번호를 저장하는 저장소 필요
 let idList =
 let pwLIst =

2. 기능/서비스 구성
 1. 회원가입 처리 == 함수
   1.signup
         [로직 순서도]
         1.아이디/비밀번호 입력
         2. 입력받은 데이터 각 배열에 저장
         3.안내 메시지
 2. 로그인 처리 ==함수
         login
         [로직 순서도]
         1.아이디/비밀번호 입력
         2. 입력받은 데이터 각 배열에 저장
         3.안내 메시지
 3. 함수 구현



*/


//메모리 구성
let idList =[]; 
let  pwList =[];

//2. 함수구성
function signup(){ console.log('signup()');
    //2-1
    let signupId =document.querySelector('#signupId');   console.log(signupId);
    let signupPw =document.querySelector('#signupPw');    console.log(signupPw);
    //2-2
    let id= signupId.value;   
    let pw= signupPw.value;
    //2-3
    idList.push(id);
    pwList.push(pw);
    //3-4
    alert('회원가입 성공');


}


function login(){
    //2-1
    let idInput = document.querySelector('#signupId');
    let signupPw = document.querySelector('#signupPw');
    //2-2
    let id= loginId.value;
    let pw= loginPw.value;
    //3-3 비교
     //3-1 아이디가 기존 배열 내 존재하는지
    let index= idList. indexOf(id);
    if(index !=-1){
        //3-2 아이디가 존재하면 패스워드 검증
         //만약에 아이디가 위치한 인덱스의 패스워드도
         //위치한 인덱스의 패스워드가 입력받은 패스워드 같으며
        if( pwList[index] == pw){
            alert('로그인 성공');

        }
      else{
        alert('패스워드가 다릅니다.')
    }
    } else{
        alert('없는 아이디 입니다.')
    }

    }