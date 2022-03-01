var var1 = "We ";
var var2 = "da ";
var var3 = "best ";
var var4 = "music ";
var var5 = "for ";
var var6 = 2022.15676525486545347;
var var7 = " years"
var whole_sentence = "".toString; //keeps the global variable as a string


function concat_Sentence() {
    whole_sentence = var1.concat(var2, var3, var4); //concatenates the 4 variables
    document.getElementById("sentence").innerHTML = whole_sentence;
}
    
function sliceMethod() {
    var section = whole_sentence.slice(6, 10).toUpperCase(); //gets the word "best" and converts it to uppercase   
    document.getElementById("slice").innerHTML = section;
}
function precisionTime() {
    whole_sentence = whole_sentence.concat(var5, var6.toPrecision(4), var7); //concatenates with a toPrecision function
    document.getElementById("time").innerHTML = whole_sentence;
}