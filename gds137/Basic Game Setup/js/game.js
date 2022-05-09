//--------------------------Hitting D will spawn a platform below the player.
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

var platform = new GameObject()
{
	platform.width = canvas.width;
	platform.height = 30;
	platform.x = canvas.width/2;
	platform.y = canvas.height - platform.height
	platform.color = "#00ff00";
}
var player = new GameObject()
{
	player.x = canvas.width/2;
	player.y = canvas.height/2;
	player.color = "#000000";
}
var spawnplat = new GameObject()
{
	spawnplat.width = 200;
	spawnplat.height = 50;
	spawnplat.x = 10000;
	spawnplat.y = 10000;
	spawnplat.color = "#ff0000";
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


	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}
	if(s)
	{
		spawnplat.x = player.x;
		spawnplat.y = player.y + player.width - 20;
		platout = true;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	while(platform.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	while(spawnplat.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(spawnplat.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(spawnplat.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(spawnplat.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}


	platform.drawRect();
	player.drawRect();
	if(platout == true)
	{
		spawnplat.drawRect();
	}
}



