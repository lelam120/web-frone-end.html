// hàm làm chậm lại lệnh trong nó
// setTimeout(function(){
//    alert("hello everybody");
// },2000); // delay 2000ms

// lệnh lặp lại 
//setInterval(function(){
//    alert("hello T2311E");
//},2000);

// dùng như 1 vòng lặp
// var t=10;
// var it=setInterval(function(){
//   console.log(t);
//   t--;
//    if(t<0){
//        clearInterval(it);
//    }
// },1000);

/*
var min=10, sec=0;
var timer=setInterval(function(){
    console.log(`${min}:${sec}`);
    sec--;
    if(sec<0){
        min--;
        sec=59;
    }
    if(min<0){
        clearInterval(timer);
    }
},1000);
*/

var h = document.getElementById("number");
// h.innerText = "XIN CHAO CAC BAN"; //chèn text
h.innerHTML="<i>hello</i>"; //đổi cấu trúc html
//var t=10;
//var it = setInterval(function(){
    // alert("Hello T2311E");
    // console.log(t);
    //h.innerText = t;
    //t--;
    //if(t<0){
        //clearInterval(it);
    //}
//},1000);

var span_min=document.getElementById("min");
var span_sec=document.getElementById("sec");
var min=10, sec=0;
var timer=setInterval(function(){
    //console.log(`${min}:${sec}`);
    span_min.innerText=min;
    span_sec.innerText=sec;
    sec--;
    if(sec<0){
        min--;
        sec=59;
    }
    if(min<0){
        clearInterval(timer);
    }
},1000);