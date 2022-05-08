//rps part 1 w6d1 class

//create an array that will store the images being used
//array is var that can contain more than one value

var pics = new Array() //creates empty Array

//assigning values to an array = population
//[#] denotes index like a house number and array is the street name, array name + index gives access to the individual value
pics[0] = "images/rock.jpg"
pics[1] = "images/paper.jpg"
pics[2] = "images/scissors.jpg"

var pics2 = new Array()

pics2[0] = "images/rock2.jpg"
pics2[1] = "images/paper2.jpg"
pics2[2] = "images/scissors2.jpg"

//array of buttons
//query selector grabs all of one element type
var btn = document.querySelectorAll("button")

//check stored data in the console
console.log(btn) //used for testing, requires dev tools to be open

//make button clickable and also run the game
//add event listeners to each button
btn[0].addEventListener("click", function(e) {play(0)})
btn[1].addEventListener("click", function(e) {play(1)})
btn[2].addEventListener("click", function(e) {play(2)})

//arrays that store player and computer opitons
//player id = pId
var pId = new Array("rock_p", "paper_p", "scissors_p")
//pId[1] = paper_p
//Computer id = cId
var cId = new Array("rock_c", "paper_c", "scissors_c")

//create a function that swaps regular images with highlighted ones
function swap(id, image){
    //access the image elements by ID from HTML doc
    document.getElementById(id).src = image
}

//play function
function play(id){
    //setting up stored image paths in js to match the HTML ones
    //swap calls the function and gets it code to run
    //values supplied inside are passed into the parameter value
    swap(pId[0], pics[0])
    swap(pId[1], pics[1])
    swap(pId[2], pics[2])

    swap(cId[0], pics[0])
    swap(cId[1], pics[1])
    swap(cId[2], pics[2])

    //store the choices to vars (p and c)
    var p_choice = id

    //randomize the computer choice
    var c_choice = Math.floor(Math.random() * 2.9)

    //swap the starting images with highlighted ones
    swap(pId[p_choice], pics2[p_choice])
    swap(cId[c_choice], pics2[c_choice])

    //switch time- switch statements give us the option to determine code to run based on predetermined case value

    switch(p_choice){
        //cases need to be built for every option p_choice can be
        //rock
        case 0:
        if (c_choice == 0){
            //call showResults and pass correct value for pChoice cChoice and results
            showResults("Rock", "Rock", "Draw")
        }
        else if (c_choice == 1){
            showResults("Rock", "Paper", "Point for Skynet")
        }
        else{
            showResults("Rock", "Scissors", "John Connor Would be Proud")
        }
        //break statements break out of the switch/case
        break
        //paper
        case 1:
        if (c_choice == 1){
            showResults("Paper", "Paper", "Draw")
        }
        else if (c_choice == 2){
            showResults("Paper", "Scissors", "Point for Skynet")
        }
        else{
            showResults("Paper", "Rock", "John Connor Would be Proud")
        }
        break
        //scissors
        case 2:
        if (c_choice == 2){
            showResults("Scissors", "Scissors", "Draw")
        }
        else if (c_choice == 0){
            showResults("Scissors", "Rock", "Point for Skynet")
        }
        else{
            showResults("Scissors", "Paper", "John Connor Would be Proud")
        }
    }//end switch statement
}//end play function

//function that writes reslts back to the HTML page
function showResults(pChoice, cChoice, results){
    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("results").innerHTML = results
}