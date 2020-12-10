// 회원정보 ordermenu 객체들을 저장하는 배열
var ordermenu = [];


window.onload = function () {
    // 장바구니에서 주문 목록 가져오기
    ordermenu = JSON.parse(localStorage.getItem('buyList'));

    console.log(ordermenu[0]);

    var sum = 0;
    for (var i = 0; i < ordermenu.length; i++) {
        sum = sum + Number(ordermenu[i].price);
    }


    // 주문 목록 보여주기
    function showOderlist() {

        // table ordertbody 캐스팅
        var orderlistrow = document.querySelector('#orderlistrow');

        var tbody = '';

        for (var i = 0; i < ordermenu.length; i++) {
            tbody += '<tr>';
            tbody += '<td class="otft">';
            tbody += '<img src="' + ordermenu[i].img + '">';
            tbody += '<span>' + ordermenu[i].name + '</span>';
            tbody += '<span>' + ordermenu[i].hotice + '</span>';
            tbody += '<span>' + ordermenu[i].size + '</span>';
            tbody += '</td>';
            tbody += '<td class="ottd">1</td>';
            tbody += '<td class="ottd">' + ordermenu[i].price + '원</td>';
            tbody += '</tr>';
        }

        orderlistrow.innerHTML = tbody;

    };
    showOderlist();


    // 총 금액 보여주기
    function showPricesum() {

        var odsum = 0;
        for (var i = 0; i < ordermenu.length; i++) {
            odsum += Number(ordermenu[i].price);
        }

        // 캐스팅
        var pricesum = document.querySelector('#pricesum');

        var div = '<span>총 금액 :</span>';
        div += '<span>' + odsum + '원</span>';

        pricesum.innerHTML = div;

    };
    showPricesum();


};








