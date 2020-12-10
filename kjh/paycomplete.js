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
    if (localStorage.getItem('menu') == null) {
        localStorage.setItem('menu', JSON.stringify(menu));
    } else {
        members = JSON.parse(localStorage.getItem('menu'));

        console.log(menu);

        showOrderlist();
    }

};
