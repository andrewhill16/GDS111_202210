var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var tracing = new Image()
tracing.src = "images/shapes.png"

tracing.onload = function(){
    ctx.drawImage(tracing, 0, 0, 800, 800)
    
    ctx.fillStyle = "yellow"
    ctx.strokeStyle = "black"
    ctx.lineWidth = "5"
    
   ctx.fillRect(85, 302, 100, 100)
   ctx.strokeRect(85, 302, 100, 100)

    ctx.fillStyle = "none"
    ctx.strokeStyle = "rgb(255, 0, 0)"
    ctx.lineWidth = "5"
    ctx.moveTo(85, 682)
    ctx.lineTo(278, 549)
    ctx.stroke()

    ctx.fillStyle = "#ffff00"
    ctx.strokeStyle = "red"
    ctx.lineWidth = "5"
    ctx.beginPath()
    ctx.arc(385, 442, 67, 0, (2* Math.PI), false)
    ctx.closePath()
    ctx.fill()
}