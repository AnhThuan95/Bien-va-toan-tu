function hinhTron() {
    let r = parseInt(document.getElementById("r").value);

    let p = 2 * 3.14 * r;
    let s = 3.14 * r * r;

    document.getElementById("p").innerHTML = "Chu vi hinh tron la: " + p;
    document.getElementById("s").innerHTML = "Dien tich hinh tron la: " +s;
}