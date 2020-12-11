// 회원정보 ordermenu 객체들을 저장하는 배열
var ordermenu = [];


window.onload = function () {
    // 장바구니에서 주문 목록 가져오기
    ordermenu = JSON.parse(localStorage.getItem('buyList'));

    var sum = 0;
    for (var i = 0; i < ordermenu.length; i++) {
        sum = sum + Number(ordermenu[i].price);
    }

    // 주문목록 출력
    var tbody = '';

    for (var i = 0; i < ordermenu.length; i++) {

        var orderlistrow = document.querySelector('#orderlistrow');

        if (!ordermenu[i].isdrink) {
            console.log('음료아님', ordermenu[i]);

            tbody += '<tr>';
            tbody += '<td class="otft">';
            tbody += '<img src="' + ordermenu[i].img + '">';
            tbody += '<span>' + ordermenu[i].name + '</span>';
            tbody += '</td>';
            tbody += '<td class="ottd">' + ordermenu[i].count + '</td>';
            tbody += '<td class="ottd">' + ordermenu[i].price + '원</td>';
            tbody += '</tr>';
            orderlistrow.innerHTML = tbody;


        } else {
            console.log('음료', ordermenu[i]);

            tbody += '<tr>';
            tbody += '<td class="otft">';
            tbody += '<img src="' + ordermenu[i].img + '">';
            tbody += '<span>' + ordermenu[i].name + '</span>';
            tbody += '<span>' + ordermenu[i].hotice + '</span>';
            tbody += '<span>/</span>';
            tbody += '<span>' + ordermenu[i].size + '</span>';
            tbody += '</td>';
            tbody += '<td class="ottd">' + ordermenu[i].count + '</td>';
            tbody += '<td class="ottd">' + ordermenu[i].price + '원</td>';
            tbody += '</tr>';
            orderlistrow.innerHTML = tbody;

        }


    }

    // 총 금액 출력

    var odsum = 0;
    for (var i = 0; i < ordermenu.length; i++) {
        odsum += Number(ordermenu[i].price*ordermenu[i].count);
    }

    // 캐스팅
    var pricesum = document.querySelector('#pricesum');

    var div = '<span>총 금액 :</span>';
    div += '<span>' + odsum + '원</span>';

    pricesum.innerHTML = div;


};
