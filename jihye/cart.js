var insertTr = '';
    insertTr += '<tr>';
    insertTr += '<td class="td1"></td>';   
    insertTr += '<td class="td2"></td>';
    insertTr += '</tr>';
    insertTr += '<tr>';
    insertTr += '<td class="td3"></td>';
    insertTr += '<td class="td4">';
    insertTr += '<div class="minus"></div>';
    insertTr += '<div class="num1"></div>';
    insertTr += '<div class="plus"></div>';
    insertTr += '</td>';
    insertTr += '</tr>';

    insertTr += '<tr>';
    insertTr += '<td class="td1"></td>';   
    insertTr += '<td class="td2"></td>';
    insertTr += '</tr>';
    insertTr += '<tr>';
    insertTr += '<td class="td3"></td>';
    insertTr += '<td class="td4">';
    insertTr += '<div class="minus"></div>';
    insertTr += '<div class="num1"></div>';
    insertTr += '<div class="plus"></div>';
    insertTr += '</td>';
    insertTr += '</tr>';
  $('#table').append(insertTr);

//배열
var cart = [
    {name:'에스프레소',price:4000, cnt:1, ondo:'hot', size:'tall'},
    {name:'아메리카노',price:1000, cnt:1, ondo:'ice',size:'tall'}
]

//수량가져오기
$('.num1').text(cart[0].cnt);

//파란버튼(+)을 누르면
$('.num1').next().click(function(){
    $('.num1').text(cart[0].cnt++);
    $('#text3').text(cart[0].cnt*cart[0].price);
    
});

//빨간버튼(-)을 누르면
$(".num1").prev().click(function(){
    $('.num1').text(cart[0].cnt--);
        $('#text3').text(cart[0].cnt*cart[0].price);
    
});






/*메뉴이름*/
$('.td1').text(cart[0].name);
$('.td2').text(cart[0].price);
$('.td3').text(cart[0].ondo);
$('#text3').text(cart[0].cnt*cart[0].price);














/*수량*/
/*
  $('.plus').click(function(){
    for(var i=0; i<cart.length ;i++){
        
       $('.num').text(cart[i].cnt++);
        $('#text3').text(cart[i].cnt*cart[i].price);
        console.log(cart[i]);
    }
    })


  $('.plus').click(function(){
       $('.num').text(cart[0].cnt++);
        $('#text3').text(cart[0].cnt*cart[0].price);
    
    })



 $('#table').on("click",".plus",function(){
     $(this).$('.num').text(cart[0].cnt++);
        $('#text3').text(cart[0].cnt*cart[0].price);
   });

*/



