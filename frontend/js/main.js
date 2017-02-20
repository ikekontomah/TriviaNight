var sendToServer = []; //This is the variable that will be sent to the server
var currentRegion = "";
$(document).ready(function(){
	/*
	Many variables taken from "variables.js", which contain many variables used. It's best for modularity and clarity.
	*/
	console.log("%cASA TRIVIA NIGHT","font-weight: bold; font-size: 1.5rem;");
	initialize();
	$("path").hover(function(){
		//This makes the hover over the entire region instead of just the country
		var id = this.id;
		var code = id.replace(/c-/,"");
		var region = codeToRegion[code];
		var finalcolor = "rgba(65,71,255,1)";
		$("#"+id).css("fill",finalcolor);
		setTimeout(function(){
			for (x in Object.keys(info[region])){
				var editid = Object.keys(info[region])[x];
				$("#c-"+editid).css("fill",finalcolor);
			}
		},100);
	},function(){
		var id = this.id;
		var code = id.replace(/c-/,"");
		var region = codeToRegion[code];
		var initialcolor = "rgba(255,140,5,1)";
		setTimeout(function(){
			for (x in Object.keys(info[region])){
				var editid = Object.keys(info[region])[x];
				$("#c-"+editid).css("fill",initialcolor);
			}
		},100);
	});
	$("path").click(function(){
		/*
		A path is an svg path. Here, path represent countries in the map.
		This gives the path id, which is different for each country. All ID's are written as "c-<country code>".
		From path id, we get <country code>. From country code, we get region. From region, we can select a random country.
		*/
		var id = this.id;
		var code = id.replace(/c-/,"");
		var region = codeToRegion[code];
		currentRegion = region;
		sendToServer[0] = selectRandomCountry(region)[0];
		chooseTopics(selectRandomCountry(region)[1]);
	});
	fixHeightIndexRest();
});
function initialize(){
	$("#index-rest-init").html('<p>Select a region</p><div id="map"></div>');
	$("#map").html(africaMapSVG);
}
function chooseTopics(country){
	$("#index-rest-init").fadeTo("fast", 0);
	setTimeout(function(){
		$("#index-rest-init").html(`<p>You will answer about <br><span id="country-about">${country}</span></p><p>Select a topic</p><div id="topics"></div>`);
		$("#topics").html(`
			<div class="topics-select" value="1" id="t-1">Government</div><br>
			<div class="topics-select" value="2" id="t-2">Economics</div><br>
			<div class="topics-select" value="3" id="t-3">Sports</div><br>
			<div class="topics-select" value="4" id="t-4">Entertainment</div><br>
			<div class="topics-select" value="5" id="t-5">Culture</div><br>
			`);
		$("#index-rest-init").fadeTo("slow", 1);
		$(".topics-select").click(function(){
			var value = this.id.replace(/t-/,"");
			sendToServer[1] = value;
			selectDifficulty(country);
		});
	}, 1000);
	
}
function selectDifficulty(country){
	$("#index-rest-init").fadeTo("fast", 0);
	setTimeout(function(){
		$("#index-rest-init").html(`<p>You will answer about the <span class="topics-about">${topics[sendToServer[1]]}</span> of <br><span id="country-about">${country}</span></p><p>Select a question difficulty</p><div id="difficulty"></div>`);
		$("#difficulty").html(`
			<div class="difficulty-select" value="1" id="t-1">Easy</div><br>
			<div class="difficulty-select" value="2" id="t-2">Medium</div><br>
			<div class="difficulty-select" value="3" id="t-3">Hard</div><br>
			<div class="difficulty-select" value="4" id="t-4">Superhard</div><br>
			`);
		$("#index-rest-init").fadeTo("fast", 1);
		$(".difficulty-select").click(function(){
			var value = this.id.replace(/t-/,"");
			sendToServer[2] = value;
			// selectDifficulty();
			/*
			$.ajax({
				url: "",
				type: "POST",
				data: {data: sendToServer},
				async: false,
				success: function(){},
				error: (xhr, status, error){}
			});
			*/
		});
	}, 500);
}
function selectRandomCountry(region){
	/*
	INPUT: Take in a region in Africa
	OUTPUT: return a random country from the region
	*/
	var from = Object.keys(info[region]); //array of country code from the specific region
	var value = -1;
	while (value < 0 || value >= from.length){
		value = Math.round(Math.random()*from.length); //picks a random index in from array
	}
	code = from[value]; //the code that matches the index randomly generated
	var country = info[region][code];
	// country is the random country to display to user, code is the code to send to server
	return [code, country]; 
}
function selectRandomRegion(){
	/*
	INPUT: no input. This function returns a random region in case the user does not want to choose
	OUTPUT: region, output can be used in the JSON info
	*/
	var from = Object.keys(info); //returns the country region in the JSON file info
	var value = -1;
	while (value < 0 || value >= from.length){
		value = Math.round(Math.random()*from.length);
	}
	region = from[value];
	return region;
}
function fixHeightIndexRest(){
	var height = $("#index-rest").height();
	var windowHeight = window.innerHeight;
	if (height < windowHeight){
		height = windowHeight;
		$("#index-rest").height(height-75);
	}
}






