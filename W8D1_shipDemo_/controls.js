//this file handles key input cotrols

//set up vars for the key switches
var up = false //boolean, holds value of either true or false
var down = false
var left = false
var right = false

//add a keydown event listener using ]Query
//pressing a key will turn a boolean value to true and release will make it false

//true key binding
$(document).keydown(function(e) {

    if(e.keyCode == 38) {
        up = true
    }
    if(e.keyCode == 40) {
        down = true
    }
    if(e.keyCode == 37) {
        left = true
    }
    if(e.keyCode == 39) {
        right = true
    }
})

$(document).keyup(function(e) {

    if(e.keyCode == 38) {
        up = false
    }
    if(e.keyCode == 40) {
        down = false
    }
    if(e.keyCode == 37) {
        left = false
    }
    if(e.keyCode == 39) {
        right = false
    }
})