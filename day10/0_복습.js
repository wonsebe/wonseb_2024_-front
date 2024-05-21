

/*


복습예제1 : 주차장 차량 검색대
    조건1 : let carArray =['250어7142' , '142가7415']
    조건2 : let locationArray = [ 'A1' , 'B3' ]
    조건3 : carArray, locationArray 인덱스가 같은 정보의 차량
    조건4 : 차량번호 입력받아 내 차량 위치 찾기
     JS 문법
       -1. prompt{}
       -2. 변수란?
       -3. 배열내 데이터 찾기
            indexOf(), includes{}






*/ /*
let carArray =['250어7142' , '142가7415'];
let locationArray = [ 'A1' , 'B3' ];

let carNum =prompt('차량번호'); //차량번호 입력받아 변수에 저장

//2. 입력받은 차량번호의 배열내 인덱스 찾기
let carIndex = carArray.indexOf(carNum)
//3. 논리조건

if ( carIndex == -1) {   //만약에 carIndex가 -1 이면
    console.log('입력한 차량번호는 주차 내역에 없습니다.'); //메세지

}else{ //아니면
let carLocation =locationArray[carIndex]; //찾은 인덱스의 위치
console.log(`입력한 주차의 위치: ${carLocation}`);
}
*/


/*

  -복습예제 2: 틱택토/삼목 게임 ,9판 존재하고 연속된 3칸 만들면 승리
    -판넬 개수 : 9칸 판넬 필요 ,9칸 배열 생성
    -판넬 상태 :8(비어있는) 0(플레이어1) X(플레이어2) 
    -승리 체크 
    (연속된 판넬이 3개의 모양이 같을경우, B 제외)
      가로로 이기는 수  : [0]== [1] == [2]    [3]== [4] == [5]  [6]== [7] == [8] 
      세로로 이기는 수 :   [0]== [3] == [6]    [1]== [4] == [7]  [2]== [5] == [8] 
      대각선으로 이기는 수:  [0]== [4] == [8]   [2]== [4] == [6] 





*/

let gamePane =['B','B','B','B','B','B','B','B','B'];
//2. 9칸 배열 출력
let html = `
           ${gamePane[0]} ${gamePane[1]}  ${gamePane[2]}<br/>
           ${gamePane[3]} ${gamePane[4]}   ${gamePane[5]}<br/>
           ${gamePane[6]}  ${gamePane[7]}  ${gamePane[8]}
           `

//3. 구성된 HTML 출력
document.querySelector('#gamePane').innerHTML =html;

//------1. p1 입력받고 2. 승리체크   3. p2입력받고  4. 승리체크 이후 반복 (무승부까지)
if(gamePane[0]==gamePane[1] && gamePane[1]==gamePane[2]){}
if(gamePane[3]==gamePane[4] && gamePane[4]==gamePane[5]){}
if(gamePane[6]==gamePane[7] && gamePane[7]==gamePane[8]){}

if(gamePane[0]==gamePane[3] && gamePane[3]==gamePane[6]){}
if(gamePane[1]==gamePane[4] && gamePane[4]==gamePane[7]){}
if(gamePane[2]==gamePane[5] && gamePane[5]==gamePane[8]){}

if(gamePane[0]==gamePane[4] && gamePane[4]==gamePane[8]){}
if(gamePane[2]==gamePane[4] && gamePane[4]==gamePane[6]){}

if(gamePane.indexOf('b')==1){}