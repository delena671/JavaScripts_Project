function addition_Function() { //Describing the type of function to be used in the next step, addition
    var addition = 2 + 2; //This is declaring that we add 2+2
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition //Returning the information of 2+2
}

function subtraction_Function() { //Here I want to subtract
    var Subtraction = 5 - 2; //I want to subtract 2 from 5
    document.getElementById("Math").innerHTML = "5 - 2 =" + Subtraction //This will display the information of 5-2
}

function multiplication_Function() { //I want to multiply
    var simple_Math = 10 * 2; //multiply 10 by 2
    document.getElementById("Math").innerHTML = "10 * 2 =" + simple_Math //In return 10*2= 20
}

function division_Function() { //Division function
    var simple_Math = 15 / 3; //15 divided by 3
    document.getElementById("Math").innerHTML = "15 / 3 =" + simple_Math //End result= 5
}

function more_Math() { //The function "more", I want to do multiple math operations
    var simple_Math = (1 + 2) * 10 / 2 - 5; //Start from left to right (operations in the parenthesis goes first) then divide, multiply, add and then subtract.
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 = " + simple_Math; //The end results will display 10
}

function modulus_Operator() { //This operation will have a remaining, because 25 cannot go into 6 evenly
    var simple_Math = 25 % 6; //We can still divide it, but i will have a decimail in between the number
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math; //Displays the answer 4.16
}

function negation_Operator() { //Turning a number into a negative number
    var x = 10; //Positive 10
    document.getElementById("Math").innerHTML = -x; //Will equal -X
}

window.alert(Math.random()); //This type of alert will apear first, the word random will display any number between 0-1
window.alert(Math.random() * 100); //This type of alert will apear first, the word random will display any number between 0-100

function myFunction() { 
    document.getElementById("demo").innerHTML = Math.asin(0.5);
}

var X = 5;
X++;
document.write(X);

var X = 5.25;
X--;
document.write(X);
