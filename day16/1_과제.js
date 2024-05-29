let 아이디비밀번호 =[{num:1, id:'',password:  1234},
                    {num:2, id:'',password: 5678}];
 //객체선언

let aNum = 2;


function signup(){ console.log('signup()');
    //2-1 호출
    let signupId =document.querySelector('#signupId').value;   console.log(signupId);
    let signupPw =document.querySelector('#signupPw').value;    console.log(signupPw);



    let 아패 = {num : +aNum, id : signupId, password: signupPw};
    아이디비밀번호.push(아패);
    //3-4
    alert('회원가입 성공');

    console.log(아이디비밀번호);


}

function login(){
    //2-1
    let loginId = document.querySelector('#loginId').value;
    let loginPw = document.querySelector('#loginPw').value;
    //2-2 배열 순회
    for(let i=0; i<아이디비밀번호.length; i++){

        if(loginId==아이디비밀번호[i].id){


            if(loginPw==아이디비밀번호[i].password){
                alert('로그인 성공'); 
                return; }
      else{
        alert('패스워드가 다릅니다.');
        return;}
    }
    

}
{
    alert('없는 아이디 입니다.');
}
}
