
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



//배열을 가지고 온 것
var buylist = JSON.parse(localStorage.getItem('buyList'));

console.log(buylist);






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



