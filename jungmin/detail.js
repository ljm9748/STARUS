let nowitem;
nowitem = JSON.parse(localStorage.getItem('nowitem'));
console.log(nowitem);
dt_page();
$(document).ready(function() {
    dt_page()
    $('#dt_refresh').click(function() {
        alert('메뉴로 돌아갑니다.');
        location.replace('../jungeun/menuManager.html');
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
//선택상품으로 화면구성
function dt_page() {
    $("#dt_menuimg").attr('src', nowitem.img);
    $("#dt_menu_name").text(nowitem.name);
    $("#dt_menu_name_eng").text(nowitem.id);
    $("#dt_money").text(nowitem.price);

    if (nowitem.isdrink) {} else {
        $("#dt_table2").hide();
        $(".detail_bottom").hide();
    }

}

//장바구니에 담기 버튼 누르면
function dt_finish() {
    if (nowitem.isdrink) {
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
        let money;
        if (size == "Tall") { money = 0; } else if (size == "Grande") { money = 500; } else { money = 1000; }

        let string = hotice + "/" + size + "+" + money + "원을 선택하셨습니다.";
        alert(string);
        nowitem.hotice = hotice;
        nowitem.size = size;
    }
    nowitem.count = 1;
    console.log(nowitem);
    setmylist();
    location.replace('../jungeun/menuManager.html');

}
//장바구니 로컬 데이터에 넣기
function setmylist() {
    let totalList = []
    if (localStorage.getItem('buyList') == null) { //하나만 있을 경우는 없으므로 그냥 한개만 확인해 판별
        //바로넣기
        totalList.push(nowitem);
        localStorage.setItem('buyList', JSON.stringify(totalList));
    } else {
        totalList = JSON.parse(localStorage.getItem('buyList'));
        totalList.push(nowitem);
        localStorage.setItem('buyList', JSON.stringify(totalList));
    }
    return false;
}