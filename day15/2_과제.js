
/*


    롯데시네마

    1.지역  2.지점 3.상영중인 영화 4.날짜 5.관마다 시간
    -변수 ,배열, 객체를 이용한 설계
    ----------------------------------------------------
    데이터예시]
    -인천 부평역사점 범죄도시4  2024-05-28 2관 13:30
    -인천 부평역사점 범죄도시4  2024-05-28 9관 14:25
    -인천 부평역사점 범죄도시4  2024-05-28 6관 15:45
    -인천 부평역사점 범죄도시4  2024-05-28 6관 18:10
    -인천 부평역사점 퓨리오시;매드맥스 사가  2024-05-28 6관 13:30

    -인천 부평점 범죄도시4  2024-05-28 7관 12:55
    -인천 부평점 범죄도시4  2024-05-28 7관 15:15
    -인천 부평점 퓨리오시;매드맥스 사가  2024-05-28 6관 12:40

    -서울 가양점 범죄도시4 2024-05-28 5관 11:45
    -서울 가양점 범죄도시4 2024-05-28 5관 11:45
    -서울 가양점 퓨리오시;매드맥스 사가 2024-05-29 2관 10:25






    게시판(네이버 증권 게시판)
    1. 카테고리/종목명
    2. 게시물/ 제목,내용,작성일, 조회수
    3. 댓글 /내용 , 작성일

    실습과제 : 키오스크 
        실행순서: 1. 카테고리 -> 2. 제품 -> 3.장바구니 -> 4.주문
        1.카테고리    :카테고리명
        2.제품        : 제품명, 가격
        3. 장바구니   : 사이즈(M,L)
        
        -----------------------------+----------------------------
        4. ++ 주문현황: 주문시간, 주문된제품들
        1.위와 같이 필수 속성을 이용한 메모리 설계하고 샘플 배열당 3~4개
        2.구현
            1. 카테고리를 모두 출력된 상태에서
            2. 특정 카테고리를 클릭하면 해당 카테고리의 제품 모두 출력한다.
            3. 그 제품을 클릭하면 prompt()로 사이즈 받고 장바구니에 담는다.
            4. 장바구니 현황을 출력한다.
        +관리자 입장에서 카테고리 등록, 제품 등록 기능 추가







*/
/*
let 카테고리목록 =[ {cno : 1, cname : '삼성전자'},{cno : 2, cname : 'LG 전자'}]
let 게시물목록 =[
    {bno : 1, btitle : '올랐다', bcontent :'좋아요', bpassword : '1234', bdate: '2024-05-28',cno:1},
    {bno : 2, btitle : '내렸다', bcontent :'싫어요', bpassword : '4567', bdate: '2024-05-27',cno:1},
]
let 댓글목록 =[
    {rno : 1, rcontent : '좋겠네', rdate : '2024-05-28', bno :1},
    {rno : 2, rcontent : '싫겠네', rdate : '2024-05-28' , bno :2},
    {rno : 3, rcontent : '하하하', rdate : '2024-05-29', bno :2},

]
//1. 1번 게시물의 댓글 출력해보자.
let clickBno =1;
for(let i=0; i<댓글목록.length; i++){ //댓글목록 모두 순회
    //조건: 1번 게시물만.
    if(댓글목록[i].bno ==clickBno){
        console.log(댓글목록[i]);
    }
}
//2. 삼성전자의 게시물과 댓글 출력해보자.
let clickCno= 1;
for(let i=0; i<게시물목록.length; i++)//게시물목록 모두 순회
{
    
    if( 게시물목록[i].cno==clickCno){
        console.log(게시물목록[i]);

        console.log('-------------------------------------------------------')

        for(let j=0; j<댓글목록.length; j++){
            //조건2 : 위에 있는 i번째 게시물번호와 댓글에 있는 게시물번호와 같으면
            if(게시물목록[i].bno==댓글목록[j].bno){
                console.log(댓글목록[j]);
            }

        }//for 2 end

        console.log('-------------------------------------------------------')

    }//for 1 end
    
}//for end
*/



/*
    실습과제 : 키오스크
        실행순서 : 1. 카테고리 -> 2. 제품 -> 3. 장바구니 -> 4. 주문
        1. 카테고리     : 카테고리명 
        2. 제품         : 제품명 , 가격
        3. 장바구니     : 사이즈(M,L)
    =============================================================================
        1. 위와 필수 속성을 이용한 메모리 설계하고 샘플 배열당 3~4개 객체
        2. 구현
            1. 카테고리를 모두 출력된 상태에서
            2. 특정 카테고리를 클릭하면 해당 카테고리의 제품 모두 출력한다.
            3. 해당 제품명을 클릭하면 prompt()로 사이즈 받고 장바구니에 담는다.
            4. 장바구니 현황을 출력한다. 

        + 관리자 입장에서 카테고리 등록 , 제품 등록 기능 추가

*/


let 카테고리목록 =[ { cno : 1 , cname : '커피' },{ cno : 2 , cname : '티' },{ cno : 3 , cname : '에이드' },{ cno : 4 , cname : '스무디' }];
let 제품목록 = [
    { pno : 1 , pname : '할메가커피' , pprice : '2600원' , cno : 1 } , 
    { pno : 2 , pname : '왕할메가커피' , pprice : '3600원' , cno : 1 } , 
    { pno : 3 , pname : '(ICE)메가리카노' , pprice : '3700원' , cno : 1 } , 
    { pno : 4 , pname : '(HOT)아메리카노' , pprice : '2000원' , cno : 1 } , 
    { pno : 5 , pname : '복숭아아이스티' , pprice : '3700원' , cno : 2 } ,
    { pno : 6 , pname : '(HOT)사과유자차' , pprice : '4200원' , cno : 2 } ,
    { pno : 7 , pname : '(ICE)사과유자차' , pprice : '4200원' , cno : 2 } ,
    { pno : 8 , pname : '레드오렌지자몽주스' , pprice : '4700원' , cno : 3 } ,
    { pno : 9 , pname : '샤인머스캣그린주스' , pprice : '4700원' , cno : 3 } ,
    { pno : 10 , pname : '체리콕' , pprice : '4000원' , cno : 3 } ,
    { pno : 11 , pname : '플레인요거트스무디' , pprice : '4600원' , cno : 4 } ,
    { pno : 12 , pname : '망고요거트스무디' , pprice : '4600원' , cno : 4 } ,
    { pno : 13 , pname : '딸기요거트스무디' , pprice : '4600원' , cno : 4 } ,
];

let 장바구니 = [
    { pno : 1 , size : 'M' } ,
    { pno : 8 , size : 'L' }
];

// 카테고리 출력
cPrint();
function cPrint(){
    // 어디에
    let category = document.querySelector('#category');
    // 무엇을 
    let html = ``;
    for( let i = 0 ; i < 카테고리목록.length ; i++){
        html += `<div onclick="pPrint(${카테고리목록[i].cno})">${카테고리목록[i].cname}</div>`;      
    }
    // 출력
    category.innerHTML = html;
}
// 특정 카테고리를 클릭하면 해당 카테고리의 제품 모두 출력한다.
function pPrint(clickCno){
    // 어디에
    let productList = document.querySelector('#productList');
    let html = ``;
    // 무엇을
    for(let i = 0 ; i < 제품목록.length ; i++){
        if( clickCno == 제품목록[i].cno){
            html += ` <div onclick=" addSize(${제품목록[i].pno})">${제품목록[i].pname}</div>
                    <div>${제품목록[i].pprice}</div>
            `;
        }
    }
    // 출력
    productList.innerHTML = html;
}
// 해당 제품명을 클릭하면 prompt()로 사이즈 받고 장바구니 배열에 저장한다.(담는다)
function addSize(clickPno){ // 제품목록 클릭한 넘버를 가져온다
    // 사이즈를 저장한다.
    let addSize = prompt('사이즈 M or L');    
    // 가져온 제품목록 넘버와 입력받은 사이즈를 하나의 객체로 만든다.
    let addCart = { pno : clickPno , size : addSize };      console.log( addCart );
    // 만든 객체를 장바구니 배열에 저장한다.
    장바구니.push(addCart);                                 console.log( 장바구니 );
    cartPrint();
}
// 장바구니 현황을 출력한다. 
function cartPrint(){
    // 어디에
    let cartList = document.querySelector('#cartList');
    // 무엇을
    let html = ``;
    for(let i = 0 ; i < 장바구니.length ; i++){
        for(let j = 0 ; j < 제품목록.length ; j++){
            if(장바구니[i].pno == 제품목록[j].pno){
                html += `<div>                       
                        ${제품목록[j].pname}
                        ${장바구니[i].size}
                        ${제품목록[j].pprice}
                        </div>`;
            }
        }
    }
    // 출력
    cartList.innerHTML = html;
}
cartPrint();
// +관리자 입장에서 카테고리 등록 , 제품 등록 기능 추가
let autoNum = 4;

function addCategory(){
    let addCategory = document.querySelector('#addCategory').value;     console.log( addCategory );
    let autoNum = 4;
    autoNum += 1; //4개이후로 1씩 증가함.
    let newCategory = { cno : autoNum , cname : addCategory };     
    카테고리목록.push(newCategory);          console.log( 카테고리목록 );
    cPrint();
}
function addProduct(){
    let addProduct = document.querySelector('#addProduct').value;
    let autoNum = 13;
    autoNum += 1;
    let newPprice = prompt('가격책정');
    let newCno = prompt('카테고리')*1;
    let newProduct  = { pno : autoNum , pname : addProduct , pprice : newPprice , cno : newCno };       console.log(newProduct);
    제품목록.push(newProduct);              console.log( 제품목록 );
}