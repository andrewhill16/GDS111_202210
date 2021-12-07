//js file to create ship in html canvas

function Ship(){

    //the "this" keyword referneces the object you are currently inside of (the code block) in this case the ship

    this.x = 100 //x-axis coord start position
    this.y = 100 //y-axis start point
    this.color = "black" //outline color
    this.fillStyle = "orange" //interior color

    //velocity variable for x and y axis
    this.vx = 0
    this.vy = 0

    //acceleration variables for x and y axis
    this.ax = 1
    this.ay = 1

    //function move will add velocity to the positon of the ship
    this.move = function() {
        this.x += this.vx //adds velocity value to x coord
        this.y += this.vy //adds velocity value to y coord
    }

    this.draw = function() {
        /*DRAWING TRIANGLE SHIP TO CNAVAS
        //save current state of camera
        context.save()

        //move the point of origin to the ship x and y coords
        context.translate(this.x, this.y)

        //draw the ship
        context.lineStlye = this.color
        context.fillStyle = this.fillStyle

        //start at spot designated
        context.beginPath()

        //draw the triangle
        context.lineTo(25, 0) //relative to 100,100
        context.lineTo(-25, 25)
        context.lineTo(-25, -25)
        context.closePath()
        context.stroke()
        context.fill()
        context.restore()
        */
        
        //IMAGE AS THE SHIP

        var imageObj = new Image()
        imageObj.src = "images/silver_surfer.png"

        //save the current state of the canvas
        context.save()

        //move point of origin to ship starting point
        context.translate(this.x, this.y)

        //draw image on canvas
        //drawImage(image, x coord of top left, y coord of the top left, width, height)
        context.drawImage(imageObj, -100, -50, 200, 100)
        context.restore()
    }
}