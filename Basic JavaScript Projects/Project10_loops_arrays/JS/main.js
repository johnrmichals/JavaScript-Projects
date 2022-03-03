const inventory = []; //makes the inventory array
inventory[0] = "Sword"; //adds to the array
inventory[1] = "Shield";
inventory[2] = "Bow";
inventory[3] = "Potion";

const spells = ["Fireball", "Blizzard", "Heal", "Telekinesis"]; //an array with elements already in it

function whileLoop() { //creates the inventory display
    let Display = ""; //sets a local variable called Display to an empty string 
    let X = 0;
    while (X < inventory.length) { //loop that stops when we've iterated through the inventory
        Display += inventory[X] + "<br>";
        X++;
    }
    document.getElementById("whileloop").innerHTML = Display;
}
function forLoop() {
    let Display = "";
    for (let i = 0; i < spells.length; i++) { 
        Display += spells[i] +"<br>"; //sets the text variable to the spell in the array
    }
    document.getElementById("forloop").innerHTML = Display;
}