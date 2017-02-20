/*
This contains implementatiosn of the sliders that will run on the homepage
*/
var ul;
var li;
var liNum;
var totalWidth = 0;
$(document).ready(function(){
	int();
	setTimeout(function(){
		int();
	}, 500);
	setTimeout(function(){
		slider(ul);
	}, 1000);
	
});
/*The init method initializes the images that will be run on the homepage by using their children */
function int(){
	// ul = document.getElementById('slide_image');
	ul = $('#slide_image');
	li = $('#slide_image li');
	liNum = li.length;
	totalWidth = 10;
	for (i = 0; i < li.length; i++){
		var width = $('#slide_image li')[i].offsetWidth;
		totalWidth = totalWidth + width;
	}
	// widthOfImage = li[0].children[0].offsetWidth;
	//Total width of all images in the slider represents the image's ul width
	$('#slide_image').css("width", totalWidth+10);
	// ul.style.width = parseInt(widthOfImage*liNum) + "px";
	// slider(ul);
}
/*This is the main implementaion of the function slider that directs how the images should slide*/
function slider(a){
	var delta = 2;
	var max = totalWidth - $(".image-sliding-wrapper").width();
	var forward = true;
	var left = 0;
	c = setInterval(function(){
		$('#slide_image').css("left", -left);
		if (forward){
			left = left + delta;
			if (left >= max+100){
				forward = false;
			}
		} else {
			left = left - delta;
			if (left <= -100){
				forward = true;
			}
		}
	}, 1);
}
function print(e){
	console.log(e);
	return 0;
}




