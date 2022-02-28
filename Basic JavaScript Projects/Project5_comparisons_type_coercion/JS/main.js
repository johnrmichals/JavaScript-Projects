function randNum() {
    varX = Math.floor(Math.random() * 10);
    document.getElementById("random").innerHTML = varX;
}
function greaterFive() {
    document.getElementById("grt5").innerHTML = (varX > 5);
}
function lessFive() {
    document.getElementById("less5").innerHTML = (varX < 5 && varX > 2);
}
function equalsFive() {
    document.getElementById("is5").innerHTML = (varX == 5 || varX == 7);
}
function notNine() {
    document.getElementById("not9").innerHTML = !(varX === 9);
}
function checkType() {
    document.write(typeof varX.toString());
}