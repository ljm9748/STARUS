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


// 주문번호 출력
function showOrdernum () {

    //현재 날짜 생성
    var t = new Date();
    var nowYear = t.getFullYear(),
        nowMonth = t.getMonth(),
        nowDate = t.getDate();
    console.log(nowYear);
    console.log(nowMonth);
    console.log(nowDate);

    // 주문번호
//    var odnum = cartmenu.length();
//    if(cartmenu.length<10){
//        odnum = '00'+odnum;
//    } else if(cartmenu.length<100){
//        odnum = '0'+odnum;
//    }

//    @확인용
    var odnum = 1;
    if(odnum<10){
        odnum='00'+odnum;
    }else if(odnum<100){
        odnum='0'+odnum;
    }


    //캐스팅
    var ordernum = document.querySelector('#ordernum');

    var div = '<h1>결제완료</h1>';
    div += '<br>';
    div += '<h1>주문번호 : '+(nowYear)+(nowMonth)+(nowDate)+'-'+odnum+'</h1>';
    div += '<br>';
    div += '<h2>이용해 주셔서 감사합니다.</h2>';

    ordernum.innerHTML = div;



};
showOrdernum();


















