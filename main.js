//Create a reference for canvas 

//Give specific height and width to the car image
var greencar_width = 75;
var greencar_height = 100;
var greencar_x = 5;
var greencar_y = 225;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
var myCanvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var background_imgTag = "";
var greencar_imgTag
//Set initial position for a car image.

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>=0){
		greencar_y = greencar_y = 10;
		uploadBackground();
		uploadgreencar();
	};
}

function down()
{
	if(greencar_y>=0){
		greencar_y = greencar_y = 10;
		uploadBackground();
		uploadgreencar();
	};
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
