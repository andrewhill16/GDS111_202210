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

var platform1 = new GameObject()
{
	platform1.width = canvas.width;
	platform1.height = 30;
	platform1.x = canvas.width/2;
	platform1.y = canvas.height - platform1.height
	platform1.color = "#00ff00";
}
var platform2 = new GameObject();
{
	platform2.width = 170;
	platform2.height = 30;
	platform2.x = 50;
	platform2.y = platform2.height;
	platform2.color = "#00ff00";
}
var platform3 = new GameObject();
{
	platform3.width = 170;
	platform3.height = 30;
	platform3.x = 50;
	platform3.y = platform3.height * 4;
	platform3.color = "#00ff00";
}
var door = new GameObject();
{
	door.width = 10;
	door.height = platform3.height * 3;
	door.x = 100;
	door.y = 90;
	door.color = "#00ffff";
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
var button = new GameObject()
{
	button.height = 40;
	button.width = 40;
	button.x = platform1.x + button.height * 4;
	button.y = canvas.height - button.width - platform1.height;
	button.color = "#ff0000";
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
		player.canJetpack = true;
		player.vy += player.jumpHeight;
	}
	if(w && player.canJetpack)
	{
		player.vy = -10;
		player.fuel--;
		console.log(player.fuel)
		if(player.fuel < 150)
		{
			player.color = "#00ffff"
		}
		if(player.fuel < 50)
		{
			player.color = "#ff00ff"
		}
		if(player.fuel <= 0)
		{
			player.color = "#000000"
			player.canJetpack = false;
		}
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

	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
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

	if(player.hitTestObject(button))
	{
		button.toggled = true;
		button.color = "#ff00ff";
		door.vy = -30;
		door.y += door.vy;
	}


	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	door.drawRect();
	player.drawRect();
	button.drawRect();
	if(platout == true)
	{
		spawnplat.drawRect();
	}
}



