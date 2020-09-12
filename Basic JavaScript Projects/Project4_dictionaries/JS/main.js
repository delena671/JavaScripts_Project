function my_Dictionary() { //This is my Function
    var Animal = { //I am focussing on animals
        Species:"Dog",
        Breed:"ShitTzu",
        Color: "White", //These are all objects
        Age:1,
        Sound:"Bark!"
    };
    delete Animal.Sound; //The delete here is to remove a certain object before the other objects display.
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //element that has the ID attribute with the specified value
}