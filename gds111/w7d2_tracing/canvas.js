var canvas = document.getElementById("canvas") //makes canvas a js object
var ctx = canvas.getContext("2d") //context object relative to canvas

var tracing = new Image()
tracing.src = "images/shapes.png"

tracing.onload = function(){
    ctx.drawImage(tracing, 0, 0, 800, 800)
    //set up styling before drawing on page, fill color stroke color and line width
    ctx.fillStyle = "rgba(255, 0, 0, 0.5)"
    //draw a rectangle
    //contextObject.fillRect (x, y, width, height)
    ctx.fillRect(66, 80, 119, 540)

    ctx.strokeStyle = ("rgba(0, 0, 255, 0.5)")
    //for lines, use moveTo to get the cursor to the first point then use lineTo
    ctx.moveTo(588, 222)
    ctx.lineTo(702, 68)
    ctx.stroke()

    ctx.fillStyle = "rgba(0, 255, 0, 0.5)"
    //circles are made out of a completed arc
    ctx.beginPath()
    ctx.arc(422, 207, 86, 0, (2 * Math.PI), false)
    ctx.closePath()
    ctx.fill()

    //set up style before the triangle
    ctx.fillStyle = "rgba(0, 0, 255, 0.5)"
    //map each point and use lineTo for irregular line based shapes
    ctx.beginPath()
    ctx.moveTo(362, 448)
    ctx.lineTo(704, 326)
    ctx.lineTo(639, 683)
    ctx.closePath()
    ctx.fill()

    ctx.strokeStyle = ("rgba(255, 0, 0, 0.5")
    ctx.moveTo(41, 749)
    ctx.lineTo(758, 749)
    ctx.stroke()
}