function randNum() {
    varX = Math.floor(Math.random() * 10);
    document.getElementById("random").innerHTML = varX;
}
function addOne() {
    document.getElementById("up1").innerHTML = varX+1;
}
function subOne() {
    document.getElementById("down1").innerHTML = varX-1;
}
function addFive() {
    document.getElementById("up5").innerHTML = varX+5;
}
function subFive() {
    document.getElementById("down5").innerHTML = varX-5;
}
function multiTwo() {
    document.getElementById("double").innerHTML = varX*2;
}
function divTwo() {
    document.getElementById("halve").innerHTML = varX/2;
}
function incOne() {
    document.getElementById("inc").innerHTML = varX++;
}
function decOne() {
    document.getElementById("dec").innerHTML = varX--;
}
