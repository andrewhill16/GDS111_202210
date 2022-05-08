//Riddles JavaScript

//JS is a scripting language that can change stuff on the html page; it is not a markup lnguage so it will follow more fundimental logic related to other programming styles

//variables store data to be used in the script or program they are friendly names to refer to info as

//each variable will store the answer to a riddle
//js requires declarations of variables
var store1="Money"
var store2="Post Office"
var store3="NOON"
//variable names must be unique also cAsE sEnSiTiVe
// total is not the same as Total

//functions perform tasks they have a set of proccesses assigned to them and when they are called their tasks are performed
//function below will talk talk to html dom and get specific elements by their id then push info to inner html between open and close tag
function answer1(){
    document.getElementById("question1").innerHTML = store1;
}
function answer2(){
    document.getElementById("question2").innerHTML = store2;
}
function answer3(){
    document.getElementById("question3").innerHTML = store3;
}