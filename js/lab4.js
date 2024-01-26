function taoDaySoNgauNhien() {
    var daySo = [];
    while (daySo.length < 6) {
      var soNgauNhien = Math.floor(Math.random() * 45) + 1; // Sinh số ngẫu nhiên từ 1 đến 45
        daySo.push(soNgauNhien);
    }
    return daySo;
  }
  
  function kiemTraVeSo(veSo, boSoNgauNhien) {
    var trungGiai = 0;
    for (var i = 0; i < 6; i++) {
      if (boSoNgauNhien.includes(veSo[i])) {
        trungGiai++;
      }
    }
    return trungGiai;
  }
  
  function kiemTraTrungGiai(soTrungGiai) {
    if (soTrungGiai === 3) {
      return "Chúc mừng, bạn trúng 100.000VND!";
    } else if (soTrungGiai === 4) {
      return "Chúc mừng, bạn trúng 10.000.000VND!";
    } else if (soTrungGiai === 5) {
      return "Chúc mừng, bạn trúng Jackpot (100 tỷ)!";
    }else if (soTrungGiai === 6) {
        return "Chúc mừng, bạn trúng Jackpot (100 tỷ)!";
    }else {
      return "Rất tiếc, bạn không trúng giải.";
    }
  }

  var veSo = [];
  for (var i=0;i<6;i++){
    var lc=prompt("nhập số của vé số đã mua");
    lc=parseInt(lc);
    veSo.push(lc);
  }

  var boSoNgauNhien = taoDaySoNgauNhien(); // Tạo dãy số ngẫu nhiên
  
  var soTrungGiai = kiemTraVeSo(veSo, boSoNgauNhien);
  var ketQua = kiemTraTrungGiai(soTrungGiai);
  
  console.log("Bộ số ngẫu nhiên: " + boSoNgauNhien);
  console.log("Vé số của bạn: " + veSo);
  alert(`${ketQua}`);