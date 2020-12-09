$(document).ready(function() {
    $('#dt_refresh').click(function() {
        alert('replace');
    });

});
$("#dt_done").click(function() {
    alert('click');

    var $hotice = $(this).find("#hotice")
    var hotice = $hotice.value();
    console.log(hotice);
});

function dt_page(menuid) {
    //메뉴아이디 받기
    var menuid = menuid;
    //해당메뉴 그림과 이름 가격 적용


}

//장바구니에 담기 버튼 누르면
function dt_finish() {


    var hotice = $(":input:radio[name=hotice]:checked").val();
    alert(hotice);
    var size = $(":input:radio[name=size]:checked").val();
    alert(size);

    if (size == "Tall") var money = 0;
    else if (size == "Grande") var money = 500;
    else var money = 1000;

    var string = hotice + "/" + size + "+" + money + "원을 선택하셨습니다.";
    alert(string);
}