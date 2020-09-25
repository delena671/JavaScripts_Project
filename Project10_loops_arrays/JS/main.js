function count_To_Ten() {
    var Digit = ""; //This function is to to count to 10
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
//A list of instruments "For Loop"
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = ""; 
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function () {
    var Green_Vegetables = []; //This is my array on green vegies
    Green_Vegetables[0] ="broccoli";
    Green_Vegetables[1] ="celery";
    Green_Vegetables[2] ="lettuce";
    Green_Vegetables[3] ="pepper";
    Green_Vegetables[4] ="spinach";
    document.getElementById("Array").innerHTML = "In this picture broccoli is best steamed" +     Green_Vegetables[0] + "_";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.make + this.model;
        }
};
document.getElementById("Car_Object").innerHTML = car.description();