//js파일 로드
//document.write("<script type='text/javascript' src='불러올js파일명.js'><" + "/script>");

// 회원정보 ordermenu 객체들을 저장하는 배열
var ordermenu = [];

// 생성자 함수 Ordermenu
function Ordermenu(odimg, odname, odhotice, odsize, odqnt, odprice) {
    this.img = odimg;
    this.name = odname;
    this.온도 = odhotice;
    this.사이즈 = odsize;
    this.수량 = odqnt;
    this.price = odprice;
};

// 장바구니에서 주문 목록 가져오기
window.onload = function () {

    // localStorage 저장
    if (localStorage.getItem('cartmenu') == null) {
        localStorage.setItem('cartmenu', JSON.stringify(cartmenu));
    } else {
        ordermenu = JSON.parse(localStorage.getItem('cartmenu'));

        console.log(cartmenu);

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
        tbody += '<td class="otft"><img src="' + ordermenu[i].img + '">' + ordermenu[i].name + ordermenu[i].온도 + '/' + ordermenu[i].사이즈 + '</td>';
        tbody += '<td class="ottd">' + ordermenu[i].수량 + '</td>';
        tbody += '<td class="ottd">' + ordermenu[i].price + '원</td>';
        tbody += '</tr>';
    }

    orderlistrow.innerHTML = tbody;

};
showOderlist();

// 총 금액 보여주기
function showPricesum() {

    // 캐스팅
    var pricesum = document.querySelector('#pricesum');

    var div = '<span>총 금액 :</span>';
    div += '<span>'+ordermenu[i].총 금액+'원</span>';

    pricesum.innerHTML = div;

};
showPricesum();

























