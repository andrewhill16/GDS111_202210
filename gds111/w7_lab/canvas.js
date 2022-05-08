//define var to access canvas properties by ID name from html
var canvas = document.getElementById("canvas")

//define drawing context
var ctx = canvas.getContext("2d") //canvas var is the object

//create image to eventually add to the canvas instead of using <img> tag in html
var galaxy = new Image()

//galaxy is now an image object and we can access any image properties that may be needed
galaxy.src = "images/galaxy.jpeg" //can use src because galaxy is image object

//now "write" the image on the canvas, an event must occur for this to happen
galaxy.onload = function() {
    //drawing an image
    //context.drawImage(imgObject, x, y, width, height)
    ctx.drawImage(galaxy, 0, 0, 800, 600)

    //drawing a rectangle
    //start with styling choices
    ctx.fillStyle = "rgb(0, 0, 255)" //solid fill of the shape
    ctx.strokeStyle = "white" //outline
    ctx.lineWidth = "5" //width of stroke in pixels

    //use fillRect and strokeRect once styles and set
    ctx.fillRect(30, 30, 100, 100) 
    ctx.strokeRect(30, 30, 100, 100)
    //needs to match fillRect if applying to the same rectangle

    //drawing a line
    //need to move the "cursor" to the starting point (x,y) of the line
    ctx.moveTo(0,0)
    //next we draw a line to the eneding point (x,y)
    ctx.lineTo(800,600)
    /*
    ctx.strokeStyle = "black" //changes stroke style and line width before drawing the line
    ctx.lineWidth = "1"
    */
    ctx.stroke() //draws the line

    //draw an opposite line
    ctx.moveTo(800,0)
    ctx.lineTo(0,600)
    ctx.stroke()

    //drawing a circle
    //requires a context.beginPath() call then a context.arc(x,y,radius,startAngle,endAngle,isCouterClockwise)
    //atrting x,y is enter of circle, radius is half diameter
    //isCounterClockwise is a boolean --> t/f
    ctx.beginPath()
    ctx.arc(400,300,50,0, (2 * Math.PI), false)
    ctx.lineTo(450,250)
    ctx.closePath()
    ctx.fill() //fills the circle

    //draw irregular shape
    //set up the styling first
    ctx.fillStyle = "#55ddef"
    ctx.strokeStyle = "yellow"
    ctx.lineWidth = "2"
    ctx.beginPath()
    ctx.moveTo(650, 100) //starting point of shape
    ctx.lineTo(700, 140) //line to next point
    ctx.lineTo(675, 200)
    ctx.lineTo(625, 200)
    ctx.lineTo(600, 140)
    ctx.closePath() //reunites previous end point with starting point
    ctx.fill()
    ctx.stroke()

    //drawing anoth image on the canvas
    //create instance of the image
    var mario = new Image()
    //links to the src
    mario.src = "images/mario.png"

    //callabck function loads the image and draws it on the canvas
    mario.onload = function(){
        ctx.drawImage(mario, 625, 120, 40, 80)
    }
}