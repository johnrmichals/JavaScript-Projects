function randNum() {
    varX = Math.floor(Math.random() * 10);
    document.getElementById("random").innerHTML = varX;
    varA = varX + 1;
    varB = varX - 1;
    varC = varX * 2;
    varD = varX / 2;
    varE = varX % 2;
    document.write("your number is " + varX + ". One more than that is " + varA + " and one less is " + varB + ". Doubled, it is " + varC + " and halved it is " + varD + " with a remainder of " + varE + ".");
}