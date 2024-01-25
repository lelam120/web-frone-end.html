//đây là ngôn ngữ logic
var x; //x không có kiểu dữ liệu = null
//x=10 //x: number
//var y="hello world!"; //string
//var t=true //boolean

//khai báo biến kiểu mới
//let n=20;

//var z=x+10; //20
//z="xin chao";
//var z1=x+y; //10hello world!
//var z2=y+y; //hello world!hello world!
//var z3="20"+10; //2010
//console.log(x+y+"20"+10); //10hello world!2010

//điều kiện
//if(x>10){
//}else{
//}

//vòng lặp
//for(var i=0;i<10;i++){
    //console.log("i="+i);
//}

//mảng
//var arr=[];
//arr[0]=2;
//arr[1]="abc";

//arr.push(135); //arr[2]=135;
//arr.push("hello"); //arr[3]="hello"
//console.log("size of array:"+arr.length); //xem mảng có bao nhiêu phần tử

//for(var i=0;i<arr.length;i++){
   // console.log(arr[i]);
//}

//cách để duyệt mảng ngắn gọn hơn
//arr.forEach(e=>{
 //   console.log(e);
//}) 

//hàm
//function tinh_tong(a,b){
    //thích làm gì cx đc 
    //return a+b;
    //console.log(a+b);
//}

//hàm cảnh báo: tạo 1 cảnh báo trước khi vào trang web  //void
//alert("Yêu cầu phải trên 18+");

//hàm confirm //boolean
//var tl=confirm("bạn chắc chắn với câu trả lời chưa !!!");
//if(tl){
    //alert("người dùng chắc chắn với câu trả lời");
//}else{
    //alert("người dùng cần tìm hiểu thêm");
//}

//hàm trả về string
//var kq = prompt("bạn bao nhiêu tuổi");
//var kq2=parseInt(kq) +10;//hàm parseint giá trị
/*
hàm parseInt sẽ lấy từ đầu tới khi gặp giá trị không phải số
"18"=>18
"18a"=>18
"18a2"=>18
"a18"=>18
*/ 
//alert(" bạn đã " + kq + " tuổi ");

//hàm trả về 1 số ngẫu nhiên từ 0->1
//var rd = Math.random(); // 0<rd<1 0.00291291923
//rd = rd*100;
//parseInt(rd);

/*
//cho người dùng nhập vào 1 số bất kỳ (0->99)
//sinh ra số ngẫu nhiên và xem họ có trúng giải hay không

//var rd = Math.random(); 
//rd = rd * 100; 
//rd = parseInt(rd); 
//console.log(rd);

//var dd = prompt("Nhập 1 giá trị: ");
//dd = parseInt(dd);
//if(dd == rd){
    //alert("Chúc mừng bạn đã trúng 1 tỷ");
//}else{
   // alert("Hẹn gặp lại bạn vào ngày mai hoặc ở đê");
//}
*/

/*
// tạo ra 1 bộ 23 số (0->99)
// người chơi sẽ chọn 1 số mỗi lần ( tối đa 7 lần chơi ) và số tiền đặt
// cọc của ngày hôm đó. ( giả sử tỉ lệ là 23đ 1 điểm -> trúng 1 số thì đc 80đ )
// sau 7 ngày hãy tính số tiền đã bỏ và số tiền thu đc

var st=0;
var dt=0;
for (var i=0;i<7;i++){
    var kq=[];
    for (var j=0;j<23;j++){
        var rd=Math.random()*100;
        rd=parseInt(rd);
        kq.push(rd);
    }
    var lc=prompt(`nhập số muốn đặt hôm nay (ngày thứ ${i}):`);
    lc=parseInt(lc);
    var td=prompt(`nhập số tiền muốn đặt hôm nay (ngày thứ ${i}):`);
    td=parseInt(td);
    st+=td;
    kq.forEach(e=>{
        if (e==lc){
            dt+= (td/23)*80;
        }
    })
}
var lai=dt-st;
alert(`Tổng tiền thu được ban đầu: ${st} và số tiền thu được: ${dt}`);
alert(`lãi thu được là: ${lai}`);
*/