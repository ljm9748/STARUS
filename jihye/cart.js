
//플러스 버튼
/*$(document).on('click', '.plus', function () {
    //QTY와 Price를 +해줘야 함!!

    // 플러스버튼이 있는 div의 부모태그를 선택 
    //      --> 그 부모태그에서 find()함수를 통해 QTY와 PRICE를 담고있는 태그를 선택
    let $orderqty = $(this).parent().find('.orderqty');
    let $orderprice = $(this).parent().find('.orderprice');

    //연산
    let currentprice = (parseInt($orderprice.text()) / parseInt($orderqty.text())) + parseInt($orderprice.text());
    let currentQty = parseInt($orderqty.text()) + 1;

    //연산결과를 덮어씌움
    $orderprice.text(currentprice);
    $orderqty.text(currentQty);

    //total price 갱신
    let sum = totalPrice($('.order-list').find('.orderprice'));
    $('.finalprice-price').text(sum);*/
});