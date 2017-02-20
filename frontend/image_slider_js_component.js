/*
This contains implementatiosn of the sliders that will run on the homepage
*/
var ul;
var liComponents;
var widthOfImage;
var imageNum;
/*The init method initializes the images that will be run on the homepage by using their children */
function inti(){
	ul = document.getElementbyId('slide_image');
	liComponents=ul.children;
	imageNum = liComponents.length ;
	widthOfImage=liComponents[0].children[0].offsetWidth ;
	//Total width of all images in the slider represents the image's ul width
	ul.style.width = parseInt(widthOfImage*imageNum) + "px" ;
	slider(ul) ;
}
/*This is the main implementaion of the function slider that directs how the images should slide*/
function slider(ul){
	animate({
		delay : 20,
		duration:3000,
		delta:function(p){return Math.max(0,-1+2*p)},
		step:function(delta){
			ul.style.left='-'+parseInt(currImage*widthOfImage+delta*widthOfImage)+"px";
		},
		callback:function(){
			currImage++;
			if(currImage<imageNum-1){
				slider(ul);
			}
			else{
				var lefPos =(imageNum-1)*widthOfImage ;
				setTimeout(function(){moveBackwards(lefPos)},2000);
				setTimeOut(function(){slider(ul)},4000);
			}
		}

	});
}
/*
This helps the images move backwords according to a set delay time*/
function moveBackwards(lefPos){
	currImage=0;
	var id=setInterval(function(){
		if(lefPos>=0){
			ul.style.left='-'+parseInt(lefPos)+"px";
			lefPos -=widthOfImage/10 ;
		}
		else{
			clearInterval(id);
		}
	},20);
}