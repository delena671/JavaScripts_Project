window.alert("Entering the world of JavaScript"); //This window alert will pop up before everything else on the page.
var A = "My name is Adeline Cruz"; //This is to display at the top of the page
document.write(A); //this is specifically telling the website to display var A
var pinks = "My name is Adeline Cruz"; //I want this sentence to be color pink
var pinks = pinks.fontcolor ("pink") //Assigning the color pink to the sentence above
document.write(pinks); // this will write the font in pink on the website
function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot about JavaScript!";
    document.getElementById("Cdemo").innerHTML = sentence;
}
