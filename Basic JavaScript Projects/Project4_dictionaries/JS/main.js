function my_Dictionary() {
    var Weapons = {
        Sword:"shing",
        Axe:"chthunk",
        Bow:"Ft-pdtdtd",
        Mace:"ffthp"
    }
    delete Weapons.Axe;
    document.getElementById("Dictionary").innerHTML = Weapons.Sword;

 }