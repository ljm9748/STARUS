/*let coffee = []
let cake = []
let noncoffee = []
let sandwich = []

$(window).ready(function() {
    if (localStorage.getItem('noncoffee') == null) { //하나만 있을 경우는 없으므로 그냥 한개만 확인해 판별
        parceJson();
    } else {
        coffee = JSON.parse(localStorage.getItem('coffee'));
        cake = JSON.parse(localStorage.getItem('cake'));
        noncoffee = JSON.parse(localStorage.getItem('noncoffee'));
        sandwich = JSON.parse(localStorage.getItem('sandwich'));

        console.log(coffee);
    }
    console.log(cake[0].id);
})


function parceJson() {
    alert("parcing Start");
    $.get('../json/coffee.json', function(data) {
        localStorage.setItem("coffee", JSON.stringify(data));
        coffee = JSON.parse(localStorage.getItem('coffee'));
    }, "json");
    $.get('../json/cake.json', function(data) {
        localStorage.setItem("cake", JSON.stringify(data));
        cake = JSON.parse(localStorage.getItem('cake'));
    }, "json");
    $.get('../json/noncoffee.json', function(data) {
        localStorage.setItem("noncoffee", JSON.stringify(data));
        noncoffee = JSON.parse(localStorage.getItem('noncoffee'));
    }, "json");
    $.get('../json/sandwich.json', function(data) {
        localStorage.setItem("sandwich", JSON.stringify(data));
        sandwich = JSON.parse(localStorage.getItem('sandwich'));
    }, "json");


}*/