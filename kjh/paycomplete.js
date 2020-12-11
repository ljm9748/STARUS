window.onload = function () {

    var odnum = '';

    if (localStorage.getItem('odnum') == null | localStorage.getItem('odnum')>998) {
        localStorage.setItem('odnum', '1');
    } else {

        odnum = JSON.parse(localStorage.getItem('odnum'));

        console.log('odnum =>', odnum);
        console.log(typeof (odnum));

    }

    console.log('확인', odnum);
    console.log('확인', typeof (odnum));

    odnum += 1;

    //주문 번호 출력
    localStorage.setItem('odnum', odnum);

    console.log(odnum);

    if (odnum < 10) {
        odnum = '00' + odnum;
    } else if (odnum < 100) {
        odnum = '0' + odnum;
    }

    console.log(odnum);

    //현재 날짜 생성
    var t = new Date();
    var nowYear = t.getFullYear(),
        nowMonth = t.getMonth(),
        nowDate = t.getDate();
    console.log(nowYear);
    console.log(nowMonth);
    console.log(nowDate);

    //캐스팅
    var ordernum = document.querySelector('#ordernum');

    var div = '<h1>결제완료</h1>';
    div += '<br>';
    div += '<h1>주문번호 : ' + (nowYear) + (nowMonth) + (nowDate) + '-' + odnum + '</h1>';
    div += '<br>';
    div += '<h2>이용해 주셔서 감사합니다.</h2>';

    ordernum.innerHTML = div;



    // buyList 삭제
    localStorage.removeItem('buyList');


};
