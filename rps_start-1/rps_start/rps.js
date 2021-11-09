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
            alert("Bloody hell it's a draw")
        }
        else if (c_choice == 1){
            alert("You lost to a computer my gamer")
        }
        else{
            alert("You win pog")
        }
        //break statements break out of the switch/case
        break
        //paper
        case 1:
        if (c_choice == 1){
            alert("Bloody hell it's a draw")
        }
        else if (c_choice == 2){
            alert("You lost to a computer my gamer")
        }
        else{
            alert("You win pog")
        }
        break
        //scissors
        case 2:
        if (c_choice == 2){
            alert("Bloody hell it's a draw")
        }
        else if (c_choice == 0){
            alert("You lost to a computer my gamer")
        }
        else{
            alert("You win pog")
        }
    }
}