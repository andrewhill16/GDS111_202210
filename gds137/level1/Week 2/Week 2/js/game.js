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

var ball;
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    ball = new GameObject()
    ball.x = canvas.width/2
    ball.y = canvas.height/2
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

    ball.move()

	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -Math.random() * 10;
	}
	if(ball.x < 0 + ball.width/2)
	{
		ball.x = 0 + ball.width/2
		ball.vx = Math.random() * 10;
	}
	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -Math.random() * 10;
	}
	if(ball.y < 0 + ball.height/2)
	{
		ball.y = 0 + ball.height/2
		ball.vy = Math.random() * 10;
	}
	//Update the Screen
	ball.drawCircle();
}
