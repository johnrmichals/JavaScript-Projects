var time = new Date(); //this is a global variable

function timeCheck() {
    var sleepytime = 22; //this is a local variable
    document.getElementById("checktime").innerHTML = "It is " + time;
    if (time.getHours() < 6 ) {
        document.getElementById("whatdo").innerHTML = "Time for sleep!";
    }
    else if (time.getHours() > 20) {
        document.getElementById("whatdo").innerHTML = "Get ready for bed!";
    }
    else {
        document.getElementById("whatdo").innerHTML = "Up and at em! Only " + (sleepytime - time.getHours()) + " hours before bed!";
    }
}
function intentionalMistake() {
    var whoops = "error"
}
console.log(whoops);//displays the error in the console