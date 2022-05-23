//--------------------------Hitting S will spawn a platform below the player.
//--------------------------Hitting W while airborne uses the jetpack.
//--------------------------Touching the switch will toggle it and open the door.
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var interval = 1000/60;
var timer = setInterval(animate, interval);

/*------------Use this if you want to implement States---------------
var currentState = "";
var states = [];

states[""] = function()
{

}
----------------------------------------------------------------------*/

var score = 0;
var player = new GameObject()
{
	player.width = 50;
	player.height = 50;
	player.x = canvas.width/2;
	player.y = canvas.height - 25;
	player.color = "#ffff00";
}
var squares = []
for(var i = 0; i < 5; i++)
{
	squares[i] = new GameObject()
	{
		squares[i].width = 25;
		squares[i].height = 25;
		squares[i].color = "#00ff00";
		squares[i].x = rand(0, canvas.width);
		squares[i].y = 0 - rand(20, 250);
		squares[i].vy = Math.random() * 10 + 5;
	}
}
var circles = []
for(var i = 0; i < 5; i++)
{
	circles[i] = new GameObject()
	{
		circles[i].width = 25;
		circles[i].height = 25;
		circles[i].color = "#ff0000";
		circles[i].x = rand(0, canvas.width);
		circles[i].y = 0 - rand(20, 250);
		circles[i].vy = Math.random() * 10 + 5;
	}
}

var fX = .85;
var fY = .97;
var gravity = 1;

//-------------------------AnimationLoop--------------------------------

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	/*-----------Use for State Machine ---------------------------------
	//states[currentState]();
	-------------------------------------------------------------------*/

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;

	for(var j = 0; j < circles.length; j++)
	{
		circles[j].drawCircle();
		circles[j].y += circles[j].vy;
		if(circles[j].y > canvas.height)
		{
			circles[j].x = rand(0, canvas.width);
			circles[j].y = 0 - rand(20, 250);
		}
		if(circles[j].hitTestObject(player))
		{
			player.color = "#ff0000";
			setTimeout(resetColor, 500)
			score = 0;
		}
	}
	for(var p = 0; p < squares.length; p++)
	{
		squares[p].drawRect();
		squares[p].y += squares[p].vy;
		if(squares[p].y > canvas.height)
		{
			squares[p].x = rand(0, canvas.width);
			squares[p].y = 0 - rand(20, 250);
		}
		if(squares[p].hitTestObject(player) && player.color == "#ffff00")
		{
			player.color = "#00ff00";
			setTimeout(resetColor, 500);
			score += 1;
		}
	}
	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2;
		player.vx = 0
	}
	if(player.x < 0 + player.width/2)
	{
		player.x = 0 + player.width/2;
		player.vx = 0
	}

	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	context.font = "16px Arial";
	context.textAlign = "right";
	context.fillText("Score - ", 80, 25);
	context.textAlign = "left";
	context.fillText(score, 85, 25);
	player.drawRect();

	function resetColor()
	{
		player.color = "#ffff00";
	}
}



