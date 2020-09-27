function Color_Function() { //This is a function to change the color value
    var Color_Output; //The output of the color
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!"; //Feedback
    switch(Colors) { //A function to switch the colors depending on the color that was chosen.
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;  //We have a total of 6 colors to choose from.
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
            break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
            break;
            default:
                Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}