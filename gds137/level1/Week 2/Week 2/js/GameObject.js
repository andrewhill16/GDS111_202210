// JavaScript Document
function GameObject()
{
	//player's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//player's dimensions
	this.width = 20;
	this.height = 100;
	
	//player's velocity or speed on each axis
	this.vx = 4;
	this.vy = 4;
	
	//player's color
	this.color = "#ff0000";

	this.force = 1;
	
	//This draws the player to the screen
	this.drawRect = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
		context.restore();
		
	}
	
	this.drawCircle = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.beginPath();
			context.arc(0,0,this.width/2,0,360*Math.PI/180,true)
			context.closePath();
			context.fill();
		context.restore();
		
	}	

	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}
