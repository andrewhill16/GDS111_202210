var canvas;
var context;
var timer;
var interval = 1000/60;
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
timer = setInterval(animate, interval);
var p1wins = 0;
var p2wins = 0;
var img = document.getElementById("ric");

var player1;
    player1 = new GameObject();
	player1.width = 20;
	player1.height = 200;
    player1.x = 40;

var ball;
    ball = new GameObject()
    ball.x = canvas.width/2
    ball.y = canvas.height/2

var player2;
	player2 = new GameObject();
	player2.width = 20;
	player2.height = 200;
    player2.x = canvas.width - 40;
function animate()
{
    context.clearRect(0,0,canvas.width, canvas.height);	
    if(w)
	{
		console.log("Moving Up");
		player1.y += -8;
	}
	if(s)
	{
		console.log("Moving Down");
		player1.y += 8;
	}
    if(player1.y > canvas.height - player1.height/2){
        player1.y -= player1.height/4
    }
    if(player1.y < 0 + player1.height/2){
        player1.y += player1.height/4
    }
    player1.drawRect();

	if(up)
	{
		console.log("Moving Up");
		player2.y += -8;
	}
	if(down)
	{
		console.log("Moving Down");
		player2.y += 8;
	}
    if(player2.y > canvas.height - player2.height/2){
        player2.y -= player2.height/4
    }
    if(player2.y < 0 + player2.height/2){
        player2.y += player2.height/4
    }
    player2.drawRect();

    ball.move()

	if(ball.x > canvas.width + ball.width/2)
	{
		ball.x = canvas.width/2
		ball.vx = -10;
		p2wins += 1;
	}
	if(ball.x < 0 - ball.width/2)
	{
		ball.x = canvas.width/2
		ball.vx = 10;
		p1wins += 1;
	}
	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -10;
	}
	if(ball.y < 0 + ball.height/2)
	{
		ball.y = 0 + ball.height/2
		ball.vy = 10;
	}

	if(ball.hitTestObject(player1))
	{
		if(ball.y < player1.y - player1.height * .33)
		{
			ball.vy = -10;
			ball.vx = 10;
		}
		else if(ball.y > player1.y + player1.height * .33)
		{
			ball.vy = 10;
			ball.vx = 10;
		}
		else{
			ball.vx = 10;
			ball.vy = 0;
		}
	}
	if(ball.hitTestObject(player2))
	{
		if(ball.y < player2.y - player1.height * .33)
		{
			ball.vy = -10;
			ball.vx = -10;
		}
		else if(ball.y > player2.y + player1.height * .33)
		{
			ball.vy = 10;
			ball.vx = -10;
		}
		else{
			ball.vx = -10;
			ball.vy = 0;
		}
	}

	ball.drawCircle();
	
	context.save();
	context.strokeStyle = "yellow";
	context.beginPath();
	context.moveTo(canvas.width/2, 0);
	context.lineTo(canvas.width/2, canvas.height);
	context.closePath();
	context.lineWidth = 20;
	context.stroke();
	context.restore();

	context.font = "30px Arial";
	context.textAlign = "center";
	context.fillText("Player 1 | Player 2", canvas.width/2, 35)
	context.font = "15px Arial";
	context.textAlign = "left";
	context.fillText(p1wins, canvas.width/2, 55)
	context.textAlign = "center";
	context.fillText("|", canvas.width/2, 55)
	context.textAlign = "right";
	context.fillText(p2wins, canvas.width/2, 55)

	context.drawImage(img, ball.x - 75, ball.y - 75, 150, 150);
}
