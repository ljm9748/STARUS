//js파일 로드
document.write("<script type='text/javascript' src='불러올js파일명.js'><" + "/script>");

// 장바구니에서 주문 목록 가져오기
window.onload = function () {

    // localStorage 저장
    if (localStorage.getItem('menu') == null) {
        localStorage.setItem('menu', JSON.stringify(menu));
    } else {
        members = JSON.parse(localStorage.getItem('menu'));

        console.log(menu);

        showOrderlist();
    }

};

// 주문 목록 보여주기
function showOderlist() {

    // table ordertbody 캐스팅
    var orderlistrow = document.querySelector('#orderlistrow');

    var tbody = '';

    for (var i = 0; i < menu.length; i++) {
        tbody += '<tr>';
        tbody += '<td class="otft"><img src="' + this.img + '">' + this.name + 온도 + '/' + 사이즈 + '</td>';
        tbody += '<td class="ottd">' + 수량 + '</td>';
        tbody += '<td class="ottd">' + this.price + '원</td>';
        tbody += '</tr>';
    }

    orderlistrow.innerHTML = tbody;

};

// 총 금액 보여주기
function showPricesum() {

    // 캐스팅
    var pricesum = document.querySelector('#pricesum');

    var div = '<span>총 금액 :</span>';
    div += '<span>'+총 금액+'원</span>';

    pricesum.innerHTML = div;

};

























