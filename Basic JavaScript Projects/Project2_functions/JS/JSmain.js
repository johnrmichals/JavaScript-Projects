let x = 0//the click counter

function theyClicked() { //names the function
    x += 1//adds one to the click counter
    document.getElementById("click").innerHTML = "YOU CLICKED THE BUTTON " + x + " TIMES";//displays the click counter
}