function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White & Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + " " + Erik.Vehicle_Model +".";
}
const Sam = new Vehicle("Dodge", "Ram", 2012, "Black");
function howOld() {
    document.getElementById("Nested_Function").innerHTML = Age()
    function Age() {
        ageX = 2022 - Erik.Vehicle_Year;
        return "Erik's car is " + ageX + " years old.";
    }
}