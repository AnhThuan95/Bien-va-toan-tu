function convert() {
    let a = parseInt(document.getElementById("doC").value);

    let b = 1.8 * a + 32;

    document.getElementById("doF").innerHTML = b + " do F";
}