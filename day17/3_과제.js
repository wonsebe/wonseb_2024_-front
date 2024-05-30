// 배열 구성
let todoList = [];
print();


// 입력/저장 함수
function add() {
// 1.
let todoInput = document.querySelector('#todoInput').value; 
let 할일할일={ 할일: todoInput, 수정: 0 };


//localStorage에 있는 todoList 가져오기
let localData = JSON.parse(localStorage.getItem('localData '));
console.log(localData ); //null
//가져온 todoList(localStorage)가 없으면 빈배열 대입
if(localData  ==null ){todoList=[];}
else{todoList = localData ;}


//3.넣기
todoList.push(할일할일);  
localStorage.setItem('localData ',JSON.stringify(todoList));

alert('할 일 저장 성공'); 


print();


}
function print() {
    let localData  = JSON.parse(localStorage.getItem('localData'));
    if(localData  == null ){todoList=[]}
    else{todoList= localData ;}
    
// 1. 어디에
let ulli = document.querySelector('#ulli');  

// 2. 무엇을
let html = ``;     console.log(html);
//어떻게
for(let i = 0; i < todoList.length ; i++) {


if (todoList[i].수정 == 0) {
html += `
        <li class="pink">
            <p>${ todoList[i].할일}</p>
            <div>
                <button onclick="change(${i})" type="button">변경</button>
                <button onclick="remove(${i})" type="button">삭제</button>
            </div>
        </li>
        `;
} else {
html += `
<li class="black">
    <p>${ todoList[i].할일 }</p>
    <div>
        <button onclick="change(${i})" type="button">변경</button>
        <button onclick="remove(${i})" type="button">삭제</button>
    </div>
</li>
`;
}  

}  
ulli.innerHTML = html;     console.log( html ); 

}

// 삭제 함수
function remove(deleteIndex) {
todoList.splice(deleteIndex, 1);

localStorage.setItem('localData', JSON.stringify(todoList));

print();
}
// 변경 함수
function change(changeIndex) {

if (todoList[changeIndex].수정 == 0) {
 
todoList[changeIndex].수정 = 1; 
} else{  
todoList[changeIndex].수정 = 0;     console.log(todoList);

}
localStorage.setItem('localData', JSON.stringify(todoList));

print();
}

