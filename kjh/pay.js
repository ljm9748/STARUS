<!--jquery 라이브러리 로드-->
<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>

// 장바구니 메뉴 객체들을 저장하는 배열
var cartmenu = [];

// 생성자 함수 Cartmenu
function Cartmenu(menuimg, menuname, hotice, qnt, price){
    this.beforeimg = menuimg;
    this.beforename = menuname;
    this.beforehi = hotice;
    this.beforeqnt = qnt; // 수량
    this.beforeprice = price;
};

Cartmenu.prototype.makeHtml = function(index){
    // 콘솔 확인
    console.log(this.beforeimg +':'+this.beforename + ':' + this.beforehi + ':' + this.beforeqnt + ':' + this.beforeprice);

    var cartmenuHtml = '';
    cartmenuHtml += '<tr>';

    cartmenuHtml += '   <th>'+this.beforeimg+'<th>';
    cartmenuHtml += '   <th>'+this.beforename+'<th>';
    cartmenuHtml += '   <th>'+this.beforehi+'<th>';
    cartmenuHtml += '   <th>'+this.beforeqnt+'<th>';
    cartmenuHtml += '   <th>'+this.beforeprice+'<th>';

    cartmenuHtml += '</tr>';

    return cartmenuHtml;
};

window.onload = function(){
    // localStorage 저장
    if(localStorage.getItem('cartmenu')==null) {
        localStorage.setItem('cartmenu', JSON.stringify(cartmenu));
    } else {
        cartmenu = JSON.parse(localStorage.getItem('cartmenu'));

        // 콘솔 확인
        console.log(cartmenu);

        //@리스트 출력 메서드 입력해야함
    }
};

