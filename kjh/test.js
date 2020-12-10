
function test(){

    var odnum = 1;

    if(odnum<10){
        odnum = '00'+odnum;
    } else if(odnum<100){
        odnum = '0'+odnum;
    }

    console.log(odnum);
};
test();






















