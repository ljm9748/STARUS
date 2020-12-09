
// 동적 메뉴 생성
var coffees = [];
var nonCoffees = [];
var sandwiches = [];
var cakes = [];

// 각 카테고리의 배열을 담는 배열
var category = [];


// JSON 파일 로드 --> JS배열로 변환
function jsonParse() {
    // JSON 파일을 get 해서 로컬스토리지에 set하기
    // 각 카테고리별로 배열 만들어 parsing하기
    // 메뉴생성 메서드 호출
    $.getJSON('coffee.json', function(data){
        localStorage.setItem('coffees', JSON.stringify(data));
        coffees = JSON.parse(localStorage.getItem("coffees"));
        category.push(coffees);
    });
    
    $.getJSON('nonCoffee.json', function(data){
        localStorage.setItem('nonCoffees', JSON.stringify(data));
        nonCoffees = JSON.parse(localStorage.getItem("nonCoffees"));
        category.push(nonCoffees);
    });
    
    $.getJSON('sandwich.json', function(data){
        localStorage.setItem('sandwiches', JSON.stringify(data));
        sandwiches = JSON.parse(localStorage.getItem("sandwiches"));
        category.push(sandwiches);
    });
    
    $.getJSON('cake.json', function(data){
        localStorage.setItem('cakes', JSON.stringify(data));
        cakes = JSON.parse(localStorage.getItem("cakes"));
        category.push(cakes);
    });
    
}



// 메뉴이미지 선택 이벤트 : 클릭 시 옵션페이지 로드 
$(document).on('click', function() {
    location.replace('../jungmin/detail.html');
});



// 홈 버튼 이벤트 : 클릭 시 매장/포장 선택 가능한 mainpage 로드
$(document).on('click', function(){
    location.replace('../uri/mainpage.html');
});

// 주문 버튼 이벤트 : 클릭 시 결제 가능한 pay 페이지 로드
$(document).on('click', function(){
    location.replace('');
});



// 장바구니에 메뉴 추가 이벤트 
function addMenu {
    
}

// 장바구니 수량 변경 이벤트
function changeQty {
    
}

// 장바구니 수량 변경시 금액 변경 이벤트
function changePriceByQ {
    
}

// 장바구니 총주문금액 변경 이벤트
function changeTotalPrice {
    
}