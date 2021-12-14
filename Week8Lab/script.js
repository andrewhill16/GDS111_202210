var c = document.querySelector('canvas')
var context = c.getContext("2d")
var timer = requestAnimationFrame(main)
var gravity = 1
var asteroids = new Array()
var numAsteroids = 10
var gameOver = true
var score = 0

var gameState = []
var currentState = 0
var ship

var shipSprite = new Image()
shipSprite.src = "images/silver_surfer.png"
shipSprite.onload = function(){

}

function randomRange(high, low){
    return Math.random() * (high-low) + low
}

//function for the Asteroids
function Asteroid(){
    this.radius = randomRange(10,2)
    this.x = randomRange(c.width - this.radius, 0 + this.radius) + c.width
    this.y = randomRange(c.height - this.radius, 0 + this.radius) 
    this.vx = randomRange(-5, -10)
    this.vy = randomRange(10,5)
    this.color = "white"

    this.draw = function(){
        context.save()
        context.beginPath()
        context.fillStyle = this.color
        context.arc(this.x,this.y,this.radius,0,2*Math.PI,true)
        context.closePath()
        context.fill()
        context.restore()
    }
}

function gameStart() { 
    //for loop to create the intances of the asteroids
    for(var i = 0; i<numAsteroids; i++){
    asteroids[i] = new Asteroid()
    ship = new PlayerShip()
    }
}//end gameStart()




//function for the player ship
function PlayerShip(){
    this.x = c.width/2
    this.y = c.height/2
    this.width = 24
    this.height = 24
    this.vx = 0
    this.vy = 0
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.flamelength = 30

    this.draw = function(){
        context.save()
        context.translate(this.x, this.y)
        //this draws the flame behind the ship
        if(this.up == true){
            context.save()
            //adjust the flame length for a flicker effect
            if(this.flamelength == 30){
                this.flamelength = 10
            }
            else{
                this.flamelength = 30
            }
            context.fillStyle = "orange"
            context.beginPath()
            context.moveTo(0, this.flamelength)
            context.lineTo(5, 5)
            context.lineTo(-5, 5)
            context.lineTo(0, this.flamelength)
            context.closePath()
            context.fill()
            context.restore()
        }
        /*context.beginPath()
        
        context.fillStyle = "red"
        context.moveTo(0, -13)
        context.lineTo(10, 10)
        context.lineTo(-10, 10)
        context.lineTo(0, -13)
        context.closePath()
        context.fill()

        context.restore()*/

        context.drawImage(shipSprite,-20,-20,40,40)
        console.log("shipSprite drawImage()")

        context.restore()
    }

    this.move = function(){
        this.x += this.vx
        this.y += this.vy
        
        //adds boundaries and keeps ship on the screen
        if(this.y > c.height - 20){
            this.y = c.height - 20
            this.vy = 0
        }
        //check to see if we are past the top of the canvas
        if(this.y < 0 + 13){
            this.y = 13
            this.vy = 0
        }
        //check to see if we are past right 0r left side of canvas
        if(this.x > c.width - 10){
            this.x = c.width - 10
            this.vx = 0
        }
        //left side
        if(this.x < 0 + 10){
            this.x =  10
            this.vx = 0
        }
    }
}//end PlayerShip()

//create the instance of the ship for the game
//var ship = new PlayerShip()

document.addEventListener('keydown', keyPressDown)
document.addEventListener('keyup', keyPressUp)

function keyPressDown(e){
    //console.log(e)
    //console.log("Key Down " + e.keyCode)
    if(gameOver == false){
        if(e.keyCode === 38){
            ship.up = true
        }
        if(e.keyCode === 40){
            ship.down = true
        }
        if(e.keyCode === 39){
            ship.right = true
        }
    }

    if(gameOver == true){
        //console.log("game over TRUE")
        if(e.keyCode === 13){ //enter key
            //console.log("recog enter")
            if(currentState == 2){
                //console.log("current state is 2")
                score = 0
                numAsteroids = 10
                asteroids = []
                gameStart()

                currentState = 0
            }

            else{
                //console.log("current state is NOT 2")
                //console.log("HELLO")
                gameStart()
                gameOver = false
                currentState = 1
                setTimeout(scoreTimer, 1000)
            }
        }
    }
}

function keyPressUp(e){
    //console.log("Key Up " + e.keyCode)
    if(e.keyCode === 38){
        ship.up = false
    }
    if(e.keyCode === 40){
        ship.down = false
    }
    if(e.keyCode === 39){
        ship.right = false
    }
}

//game states for start menu and gamepley and game over
gameState[0] = function(){//start screen
    context.save()
    context.font = "30px Arial"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.fillText("Asteroid Avoidance", c.width/2, c.height/2 - 30)
    context.font = "15px Arial"
    context.fillText("press ENTER to Start", c.width/2, c.height/2 + 20)
    context.restore()
}

gameState[1] = function(){// gameplay state
    //pasted code from main function
    //display score
    context.save()
    
    context.font = "15px Arial"
    context.fillStyle = "white"
    context.fillText("Score: " + score.toString(), c.width - 150, 30)
    context.restore()

    //ship.vy += gravity

    if(ship.up == true){
        ship.vy = -10
    }
    else{
        ship.vy = 3
    }

    if(ship.down == true){
        ship.vy = 10
    }
    else if(ship.right == true){
        ship.vx = 3
    }
    else{
        ship.vx = -3
    }

    for(var i = 0; i < asteroids.length; i++){ 
        //using the distance formula to find distance between ship and asteroid
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var dist = Math.sqrt((dX*dX)+(dY*dY))
        
        //checks for collision with asteroid and ends game
        if(detectCollision(dist, (ship.h/2 + asteroids[i].radius))){
            console.log("We collided with Asteroid")
            gameOver = true
            currentState = 2
            //document.removeEventListener('keydown', keyPressDown)
            //document.removeEventListener('keyup', keyPressUp)
        }
        //checks to see if asteroid is off screen
        if(asteroids[i].y > c.height + asteroids[i].radius){
            //reset steroids position off screen 
            asteroids[i].y = randomRange(c.height - asteroids[i].radius, 0 + asteroids[i].radius)-c.height
            asteroids[i].x = randomRange(c.width - asteroids[i].radius, 0 + asteroids[i].radius)
        }
        if(gameOver == false){
            asteroids[i].x += asteroids[i].vx
            asteroids[i].draw()
        }
        
    }
 
    if(gameOver == false){
        ship.move()
        ship.draw() 
    }
    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid())
    }
}

gameState[2] = function(){//game over
    context.save()
    context.font = "30px Arial"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.fillText("GAME OVER Your Score was:" +score.toString(), c.width/2, c.height/2 - 30)
    context.font = "15px Arial"
    context.fillText("press ENTER to Restart", c.width/2, c.height/2 + 20)
    context.restore()
}

function main(){
    context.clearRect(0,0, c.width, c.height)

    //where orignal play state was
    gameState[currentState]()//allows screen to follow appropriate state
    timer = requestAnimationFrame(main)
    //console.log("main hit")
}

function scoreTimer(){
    if(gameOver == false){
        score++
        //console.log(score)
        if(score % 2 == 0){
            numAsteroids += 8
            console.log(numAsteroids)
        }

        setTimeout(scoreTimer,1000)
    }
}
//scoreTimer()

function detectCollision(distance, calcDistance){
    return distance < calcDistance
}
