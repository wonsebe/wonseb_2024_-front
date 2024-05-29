// 배열 구성
let todoList = [
                {할일:'1교시 수업듣기',수정:'0'},
                {할일:'밥먹기',수정:'0'},
                {할일:'공부하기',수정:'0'}
            ];



// 입력/저장 함수
function add() {
    // 1.
    let todoInput = document.querySelector('#todoInput').value;

    let 할일할일={ 할일: todoInput, 수정:'0' };

    todoList.push(할일할일);

    alert('할 일 저장 성공');

    print();

  
}
function print() {
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
                    `
        } else {
            html += `
            <li class="black">
                <p>${ todoList[i].할일 }</p>
                <div>
                    <button onclick="change(${i})" type="button">변경</button>
                    <button onclick="remove(${i})" type="button">삭제</button>
                </div>
            </li>
            `
        }  
        
    }  
    ulli.innerHTML = html;     console.log( html ); 

    // 3. 대입 


   
  
}

// 삭제 함수
function remove(deleteIndex) {
    todoList.splice(deleteIndex, 1);

    print();
}
// 변경 함수
function change(changeIndex) {
    if (todoList[changeIndex].수정 == 0) {
        todoList[changeIndex].수정 = 1;
    } else{  
        todoList[changeIndex].수정 = 0;     console.log(todoList);
    }

    print();
}

