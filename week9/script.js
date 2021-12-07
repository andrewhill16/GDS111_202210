//week 9 asteroid avoidance shell build
//set up starting elements (necessary)
//these are global elements that will be accessable to every function in the file
var c = document.querySelector('canvas') //grabs elements type instead of id
var context = c.getContext("2d")
var timer = requestAnimationFrame(main)
var gravity = 1
var asteroids = new Array()
var numAsteroids = 10
var gameOver = false
var score = 0

//random vlaue gen function
function randomRange(high, low){
    return Math.random() * (high - low) + low
}//end randomRange()

//function for the asteroids
function Asteroid() {
    this.radius = randomRange(10, 2)
    this.x = randomRange(c.width - this.radius, 0 + this.radius)
    this.y = randomRange(c.height - this.radius, 0 + this.radius) - c.height
    this.vx = randomRange(-5, -10) //horizontal velocity
    this.vy = randomRange(10,5) //vertical velocity
    this.color = "white"

    this.draw = function() {
        context.save()
        context.beginPath()
        context.fillStyle = this.color
        context.arc(this.x, this.y, this.radius, 0, 2 *Math.PI, true)
        context.closePath()
        context.fill()
        context.restore()
    }
}//end Asteroid function

//for loop to make multiple asteroids
for(var i = 0; i < numAsteroids; i++){
    //i is the index of the array, loop that runs while i is less than numAsteroids, i++ grows it by 1 each run through the loop
    asteroids[i] = new Asteroid()
    //each time through the loop, a new asteroid is created and saved in the asteroids array
}

//function for the players ship
function PlayerShip() {
    this.x = c.width / 2
    this.y = c.height / 2

    this.w = 20
    this.h = 20

    this.vx = 0
    this.vy = 0

    this.up = false
    this.down = false
    this.left = false
    this.right = false

    this.flamelegth = 30

    //draw the ship and flame
    this.draw = function() {
        context.save()
        context.translate(this.x, this.y)

        //flame for the ship
        if(this.up == true){
            context.save()
            //adjust flame length for flicker
            if(this.flamelength == 30){
                this.flamelenght = 10
            }
            else{
                this.flamelength = 30
            } 
            context.fillStyle = "silver" //flame color
            context.beginPath()
            context.moveTo(0, this.flamelength)
            context.lineTo(5, 5)
            context.lineTo(-5, 5)
            context.lineTo(0, this.flamelength)
            context.closePath()
            context.fill()
            context.restore()
        }
        context.fillStyle = "black" //flame color
        context.beginPath()
        context.moveTo(0, -13)
        context.lineTo(10, 10)
        context.lineTo(-10, 10)
        context.lineTo(0, -13)
        context.closePath()
        context.fill()
        context.restore()
    }
    this.move = function() {
        this.x += this.vx
        this.y += this.vy
        if(this.y > c.height - 20){
            this.y = c.height - 20
            this.vy = 0
        }
        if(this.y < 0 + 13) {
            this.y = 13
            this.vy = 0
        }
        //check to see if we are past right or left sdie of canvas
        //right
        if(this.x > c.width - 10){
            this.x = c.width - 10
            this.vx = 0
        }
        //left
        if(this.x < 0 + 10){
            this.x = 10
            this.vx = 0
        }
    }
}//end PalyerShip() 

//create the instance of the ship for the game
var ship = new PlayerShip()

document.addEventListener("keydown", keyPressDown)
document.addEventListener("keyup", keyPressUp)

//functions for the controls
function keyPressDown(e) {
    //console.log("Key Down" + e.keycode) //tells keycodes
    if(e.KeyCode === 38) {
        ship.up = true
    }
    if(e.KeyCode === 39) {
        ship.right = true
    }
    if(e.KeyCode === 37) {
        ship.left = true
    }
    //no coding for down because ship doesn't go that way
}//end keyPressDown()
function keyPressUp(e) {
    //console.log("Key Up" + e.keycode) //tells keycodes
    if(e.KeyCode === 38) {
        ship.up = false
    }
    if(e.KeyCode === 39) {
        ship.right = false
    }
    if(e.KeyCode === 37) {
        ship.left = false
    }
    //no coding for down because ship doesn't go that way
}//end keyPressUp()

//the main function to make it all happen
function main() {
    context.clearReect(0, 0, c.width, c.height)

    //display score
    context.save()
    context.font = "15px Arial"
    context.fillStyle = "white"
    context.fillText("Score: " + score.toString(), c.width - 150, 30)
    context.restore()

    //W9D2 gravity stuff

    if(ship.up == true){
        ship.vy = -10
    }
    else{
        ship.vy = 3
    }
    if(ship.left == true){
        ship.vx = -3
    }
    else if(ship.right == true){
        ship.vx = 3
    }
    else{
        ship.vx = 0
    }

    for(var i = 0; i < asteroids.length; i++){
        //using distance formula used to find distance between ship and asteroid, used for collision
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var dist = Math.sqrt((dX*dX) + (dY*dY))

        //check for collision and if so end game
        if(detectCollision(dist, (ship.h/2 + asteroids[i].radius))){
            //console.log("secret stuff for W9D2")
            gameOver = true
            document.removeEventListener("keydown", keyPressDown)
            document.removeEventListener("keyup", keyPressUp)
        }

        //check to see if asteroids are offscreen
        if(asteroids[i].y > c.height + asteroids[i].radius){
            //reset asteroids position
            asteroids[i].y = randomRange(c.height, - asteroids[i].radius, 0 + asteroids[i].radius) - c.height
            asteroids[i].x = randomRange(c.width, - asteroids[i].radius, 0 + asteroids[i].radius) 
        }

        if(gameOver == false){
            asteroids[i].y += asteroids[i].vy
        }
        asteroids[i].draw()
    }

    ship.draw()
    if(gameOver == false) {
        ship.move()
    }
    while(asteroids.length < numAsteroids){
        //add a new asteroid to array
        asteroids.push(new Asteroid())
    }

    timer = requestAnimationFrame(main)
}//end main()

function scoreTimer() {
    if(gameOver == false){
        score++
        if(score % 5 == 0){ //if score / 5 has remainder of 0
            numAsteroids += 5 //add new asteroids
            console.log(numAsteroids)
        }
        setTimeout(scoreTimer, 1000)
    }
}//end scoreTimer()

function detectCollision(distance, calcDistance){
    return distance < calcDistance //will return true or false value
}