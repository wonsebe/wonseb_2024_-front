



let studentList=[];
function login(){console.log("login()");
//기존 localStorage 저장된 회원목록을 가져오기
studentList=JSON.parse(localStorage.getItem('studentList'));
if(studentList==null){studentList=[];}

let sInfo = document.querySelector('#sInfo').value;
let pw = document.querySelector('#pw').value;

//어디에
for(let i=0; i < studentList.length; i++){
    let student=studentList[i];
    if(student.sInfo == sInfo && student.pw ==pw){
        alert('로그인 성공');
        //만약에 로그인 성공시 세션저장소 부여
        sessionStorage.setItem('loginNo', student.no);
        location.href= "main.html";
        return;
    }

}
alert('로그인 실패');
//저장

}