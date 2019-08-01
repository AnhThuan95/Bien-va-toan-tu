function tinhTong() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let tong = a + b + c;
    let tb = (a + b + c)/3;
    document.getElementById("tong").innerHTML = tong;
    document.getElementById("tb").innerHTML = tb;
}