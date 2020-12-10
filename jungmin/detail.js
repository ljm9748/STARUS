let nowitem;
$(document).ready(function() {
    alert("hi");
    nowitem = JSON.parse(localStorage.getItem('coffee'))[0];
    console.log(nowitem);
    dt_page();

    $('#dt_refresh').click(function() {
        alert('replace');
        location.replace('detail.html');
    });

    $('#dt_finish').click(function() {
        dt_finish();

    })

});
$("#dt_done").click(function() {
    alert('click');

    let $hotice = $(this).find("#hotice")
    let hotice = $hotice.value();
    console.log(hotice);
});

function dt_page() {

    $("#dt_menuimg").attr();

    //해당메뉴 그림과 이름 가격 적용


}

//장바구니에 담기 버튼 누르면
function dt_finish() {

    let hotice = $(":input:radio[name=hotice]:checked").val();
    let size = $(":input:radio[name=size]:checked").val();

    if (hotice == null) {
        alert("HOT/ICE를 선택해 주세요");
        return false;
    }
    if (size == null) {
        alert("size를 선택해 주세요");
        return true;
    }

    if (size == "Tall") let money = 0;
    else if (size == "Grande") let money = 500;
    else let money = 1000;

    let string = hotice + "/" + size + "+" + money + "원을 선택하셨습니다.";
    alert(string);

    $(document).location.replace('../jungeun/menuManager.html');

}