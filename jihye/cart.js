var cart = [
    {name:'에스프레소',price:4200, cnt:1},
    {name:'아메리카노',price:4500, cnt:1}
]

$('input:text').text(cart[0].cnt);



/*
$('.num').text(cart[0].cnt);
*/
/*수량변경*/
    $(function(){ 
      $('.plus').click(function(){ 
        var n = $('.plus').index(this);
        var num = $(".num:eq("+n+")").val();
        num = $(".num:eq("+n+")").val(num*1+1); 
      });
      $('.minus').click(function(){ 
        var n = $('.minus').index(this);
        var num = $(".num:eq("+n+")").val();
          if(num!=0){
        num = $(".num:eq("+n+")").val(num*1-1); 
            
          }else{num=0;}
        });
    })
    
/*    $('.plus').click(function(){
        var nn = cart[0].cnt;
        nn++;
        $('.num')+1;
        console.log(nn);
        
    $('.num').text(cart[0].cnt)
        
    })*/




console.log(cart[0].name);
var na = cart[0].name;
$('.td1').text(na);
$('.td2').text(cart[0].price);


/*버튼*/



/*가격변경*/

/* 데이터 가져오기 실험 실패
    $.getJSON('../jungeun/coffee',function(data){
        var mydata=JSON.parse(coffee);
        var html = '';
        html+='<tr>';
        html+='<td class="td1">'+mydata[0].name+'</td>'
        html+='<td class="td2">'+mydata[0].price+'</td>'
        html+='</tr>'
        html+='<tr>'
        html+= '<td class="td3">(HOT/Tall)</td>'
        html+= '<td class="td4"><input class="minus" value="-" type="button" count_range="m"><input class="num" value="1" readonly name="num"><input class="plus" value="+" type="button" count_range="p">'
        html+='</td>'
        html+='</tr>'   
        $('#data').append(html);
        
        
    });*/
/*function calsum{
const table = document.getElementById('menu');

//합계계산
let sum =0;
for(let i=0; i<table.rows.length;i++){
    sum+= parseInt(table.rows[i].cells[1].innerHTML);
}
document.getElementById('sum').innerHTML=sum;
}*/

//테이블 합계 계산
var rowCnt=0; 
var sum = 0; //합계
var fakesum =0; 
$("#table").each(function(){
 
//루프 row
    var sell = $(this).children("td");
    if(rowCnt%2==0){//짝수행-가격부분
    $(sell).each(function(){
        var val = $(this).text();
        fakesum += parseInt(val)
    })
    }else{//홀수행-수량
    $(sell).each(function(){
       $('input[class=num]').click(function() {
        var val=$(this).val();
           fakesum = fakesum * parseInt(val)
           sum=fakesum;
           fakesum=0;
       });
        
    })    
    }
    rowCnt++;
})

$('#text3').text(sum);