// runs the game and connects fuctions of ship and controls js files to the html

var canvas
var context

//variable for the animation timer
var timer

var ship

var friction

//function to ready the canvas and starting position of the ship
$(document).ready(function(e){
    //assign the canvas element to the canvas var
    canvas = $("#canvas") //jquery version of document.getElementById
    context = canvas.get(0).getContext("2d")

    ship = new Ship() 

    //friction and power
    friction = 0.95
    ship.power = 1
    timer = setInterval("animate();", 33) 
})

function animate() {
    context.clearRect(0, 0, canvas.width(), canvas.height())

    //check to see if the keycode values are up or down
    if(up){ //if current value of up is true
        //when up key is true
        ship.vy -= ship.ax * ship.power
        //ship velocity of y axis is lowered by its current acceleration and power
    }

    if(down){
        ship.vy += ship.ax * ship.power
    }

    if(right){
        ship.vx += ship.ax * ship.power
    }

    if(left){
        ship.vx -= ship.ax * ship.power
    }

    //apply friction to the velocity
    ship.vx *= friction
    ship.vy *= friction

    //move and redraw the ship
    ship.move()
    ship.draw()

    //leaves right side then returns to left side
    if(ship.x > canvas.width() + 25){
        ship.x = -25
    }
    //leaves left side then returns to right
    if(ship.x < 0-25){//zero is x coord of left margin 25 is ship length
        ship.x = 825
    }
    //leaves bottom then returns to top
    if(ship.y > canvas.height() + 25){
        ship.y = -25
    }
    //leaves top then returns to bottom
    if(ship.y < 0-25){
        ship.y = 825
    }
}