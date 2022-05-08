var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var tracing = new Image()
tracing.src = "images/shapes.png"

tracing.onload = function(){
    ctx.drawImage(tracing, 0, 0, 800, 800)
    
    //rectangle
    ctx.fillStyle = "yellow"
    ctx.strokeStyle = "black"
    ctx.lineWidth = "5"
    ctx.beginPath()
    ctx.fillRect(85, 302, 100, 100)
    ctx.strokeRect(85, 302, 100, 100)

    //pentagon
    ctx.fillStyle = "#ff00ff"
    ctx.strokeStyle = "#00ffff"
    ctx.lineWidth = "5"
    ctx.beginPath()
    ctx.moveTo(557, 308)
    ctx.lineTo(667, 284)
    ctx.lineTo(724, 380)
    ctx.lineTo(650, 464)
    ctx.lineTo(547, 420)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    //circle
    ctx.fillStyle = "#ffff00"
    ctx.strokeStyle = "red"
    ctx.lineWidth = "5"
    ctx.beginPath()
    ctx.arc(385, 442, 67, 0, (2* Math.PI), false)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    //star
    ctx.fillStyle = "#ffff00"
    ctx.strokeStyle = "rgb(32,32,32)"
    ctx.lineWidth = "5"
    ctx.beginPath()
    ctx.moveTo(635, 497)
    ctx.lineTo(667, 554)
    ctx.lineTo(733, 567)
    ctx.lineTo(688, 615)
    ctx.lineTo(696, 681)
    ctx.lineTo(636, 653)
    ctx.lineTo(575, 681)
    ctx.lineTo(583, 615)
    ctx.lineTo(538, 567)
    ctx.lineTo(603, 554)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    //line
    ctx.strokeStyle = "rgb(255, 0, 0)"
    ctx.lineWidth = "5"
    ctx.beginPath()
    ctx.moveTo(85, 682)
    ctx.lineTo(278, 549)
    ctx.stroke()
}    