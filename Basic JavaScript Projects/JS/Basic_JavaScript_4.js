function my_Dictionary() { //Creating a dictionary through JS
    var Animal = { //Defining what we are creating
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador", //These are the specific details
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound; //This delete function is to remove the value
    document.getElementById("Dictionary").inner = Animal.Sound; //Our output
}