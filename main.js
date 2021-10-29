var canvas= new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;

block_image_width = 300;
block_image_height = 430;

var block= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
		block=Img;
		block.scaleToWidth(block_image_width);
		block.scaleToHeight(block_image_height);
		block.set({
			top:block_y, 
			left:block_x
		});
		canvas.add(block);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		new_image("https://cdn131.picsart.com/311186192301211.png");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("https://pbs.twimg.com/media/ExQXl0OWgAAONng.jpg");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e90ab2be-ac67-4e2f-b90a-a02f7b3fadd5/den1l4y-bddbe086-848a-4949-b84c-836eaabe3636.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U5MGFiMmJlLWFjNjctNGUyZi1iOTBhLWEwMmY3YjNmYWRkNVwvZGVuMWw0eS1iZGRiZTA4Ni04NDhhLTQ5NDktYjg0Yy04MzZlYWFiZTM2MzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Y27BrcMTkc1BCWa36k3tz28o6R_EUW-c4Xh-sFOZcaQ");
	}
	
	
}

