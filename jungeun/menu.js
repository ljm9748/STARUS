// NAVI 바
   
    
$(document).ready(function() {

    $('#nav_detail_bev').show();
    
    $('.coffee').css('display', 'inline-block');
    $('.noncoffee').css('display', 'none');
    $('.sandwitch').css('display', 'none');
    $('.cake').css('display', 'none');
    
    /*각 세부 메뉴들에대해 터치가되면 색이 반전된다*/
    $('#nav_coffee').on({
        
        mouseenter: function() {
            $('#nav_coffee').addClass('over3');
        },
        mouseleave: function() {
            $('#nav_coffee').removeClass('over3');
        },
        click: function() {
            $('#nav_coffee').addClass('underline1');

            $('#nav_noncoffee').removeClass('underline2');
            $('#nav_sandwitch').removeClass('underline3');
            $('#nav_cake').removeClass('underline4');
            
            $('.coffee').css('display', 'inline-block');
            $('.noncoffee').css('display', 'none');
            $('.sandwitch').css('display', 'none');
            $('.cake').css('display', 'none');
    
        }
    });
    

    
    $('#nav_noncoffee').on({
        mouseenter: function() {
            $('#nav_noncoffee').addClass('over1');
        },
        mouseleave: function() {
            $('#nav_noncoffee').removeClass('over1');
        },
        click: function() {
            $('#nav_noncoffee').addClass('underline2');

            $('#nav_coffee').removeClass('underline1');
            $('#nav_sandwitch').removeClass('underline3');
            $('#nav_cake').removeClass('underline4');
            
            /*$('.coffee').removeAttr('display');*/
            
            $('.coffee').hide();
            $('.noncoffee').show();
            $('.sandwich').hide();
            $('.cake').hide();

        }
    });

    $('#nav_sandwitch').on({
        mouseenter: function() {
            $('#nav_sandwitch').addClass('over2');
        },
        mouseleave: function() {
            $('#nav_sandwitch').removeClass('over2');
        },
        click: function() {
            $('#nav_sandwitch').addClass('underline3');

            $('#nav_coffee').removeClass('underline1');
            $('#nav_noncoffee').removeClass('underline2');
            $('#nav_cake').removeClass('underline4');
            
            $('.coffee').hide();
            $('.noncoffee').hide();
            $('.sandwich').show();
            $('.cake').hide();
        }
    });

    $('#nav_cake').on({
        mouseenter: function() {
            $('#nav_cake').addClass('over4');
        },
        mouseleave: function() {
            $('#nav_cake').removeClass('over4');
        },
        click: function() {
            $('#nav_cake').addClass('underline4');
            $('#nav_coffee').removeClass('underline1');
            $('#nav_noncoffee').removeClass('underline2');
            $('#nav_sandwitch').removeClass('underline3');
            
            $('.coffee').hide();
            $('.noncoffee').hide();
            $('.sandwich').hide();
            $('.cake').show();
        }
    });

    /*음료나 푸드를 클릭(터치)하면 세부메뉴가 보여진다
            그리고 아래 하이라이트 언더라인이 생기고 다른메뉴를
            클릭할시 언더라인이 사라진다*/
    $('#nav_category_bev').click(function() {
        $('#nav_detail_bev').show();
        $('#nav_detail_food').hide();
        $('#nav_category_bev').addClass('underline_a');
        $('#nav_category_food').removeClass('underline_b');

        $('#nav_coffee').removeClass('underline1');
        $('#nav_noncoffee').removeClass('underline2');
        $('#nav_sandwitch').removeClass('underline3');
        $('#nav_cake').removeClass('underline4');
    });

    $('#nav_category_food').click(function() {
        $('#nav_detail_food').show();
        $('#nav_detail_bev').hide();
        $('#nav_category_food').addClass('underline_b');
        $('#nav_category_bev').removeClass('underline_a');

        $('#nav_coffee').removeClass('underline1');
        $('#nav_noncoffee').removeClass('underline2');
        $('#nav_sandwitch').removeClass('underline3');
        $('#nav_cake').removeClass('underline4');
    });



});


// 메뉴 ---------------------------------------

// 메뉴이미지 선택 이벤트 : 클릭 시 옵션페이지 로드 
$('.coffee img').on('click', function() {
    
    let selected = localStorage.getItem('coffee');
    let id = selected[0]; 
    console.log(id);
    
    alert('localStorage.key(i)');
    
    
    /*$('.coffee a')addAttr('src', '../jungmin/detail.html');*/
    /*location.replace('../jungmin/detail.html');*/
});



// 홈 버튼 이벤트 : 클릭 시 매장/포장 선택 가능한 mainpage 로드
/*$(document).on('click', function() {
    location.replace('../uri/mainpage.html');
});*/

// 주문 버튼 이벤트 : 클릭 시 결제 가능한 pay 페이지 로드
/*$(document).on('click', function() {
    location.replace('');
});*/

