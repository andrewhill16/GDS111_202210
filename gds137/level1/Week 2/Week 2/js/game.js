var canvas;
var context;
var timer;
var interval = 1000/60;

var player1;
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    player1 = new GameObject();
    player1.x = 40;
    timer = setInterval(animate, interval);


function animate()
{
    context.clearRect(0,0,canvas.width, canvas.height);	
    if(w)
	{
		console.log("Moving Up");
		player1.y += -4;
	}
	if(s)
	{
		console.log("Moving Down");
		player1.y += 4;
	}
    if(player1.y > canvas.height - player1.height/2){
        player1.y -= player1.height/2
    }
    if(player1.y < 0 + player1.height/2){
        player1.y += player1.height/2
    }
    player1.drawRect();
}
