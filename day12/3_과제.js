



/*

1.요구사항 작성
2. 요구사항 파악
    1. 메모리 구성
    [백엔드]
    2. 기능 구성
    3. 기능 구현 로직 순서

    [프론트엔드]
    1.HTMl 구성

    [구현]
    1.js 구현
    2.html 구현

    [연동]

    [테스트]

    [유지보수]


    */

let todoList=[];
let doo=[];

//1.입력 받기/배열저장/안내
function add(){

let todoInput = document.querySelector('#todoInput');


let todo= todoInput.value;

todoList.push(todo);
doo.push(0);

alert('할 일 저장 성공');
print();

}
//출력
function print(){

let ulli = document.querySelector('#ulli');

let html=``;

for(let i =0; i <todoList.length; i++){

    let currentTodo =todoList[i];

    html += ` <li> ${currentTodo}
                 <button onclick="change( ${ i } )" type="button">변경</button>
                 <button onclick="remove( ${ i } )" type="button">삭제</button>

            </li> `


}

console.log(html); 
ulli.innerHTML=html; console.log(html);


}
//삭제
function remove(deleteIndex ){

    todoList.splice( deleteIndex,1 );
    doo.splice( deleteIndex,1 );
    print();


}
//변경
function change(changeIndex){
if(doo[changeIndex]==0){
    

}



}