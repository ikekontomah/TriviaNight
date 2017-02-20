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
		var next;
		$.ajax({
			url: "/getcountry",
			type: "GET",
			async: false,
			data: {code: sendToServer[0]},
			success: function(data){
				print("SUCCESS", "green");
				next = data;
			},
			error: function(xhr, status, error){
				print("ERROR: "+error, "red");
				next = null;
			}
		});
		chooseTopics(selectRandomCountry(region)[1], next);
	});
	fixHeightIndexRest();
});
function initialize(){
	$("#index-rest-init").html('<p>Select a region</p><div id="map"></div>');
	$("#map").html(africaMapSVG);
}
function chooseTopics(country, next){
	//next is being carried over
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
			selectDifficulty(country, next);
		});
	}, 1000);	
}
function selectDifficulty(country, next){
	//next is being carried over
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
			$.ajax({
				url: "/setquestion",
				type: "POST",
				data: {id: sendToServer.join().replace(/,/g,"")},
				async: false,
				success: function(data){
					print(data, "green");
					displayQuestion(next);
				},
				error: function(xhr, status, error){
					print("ERROR: "+error, "red");
					displayQuestion(next);
				}
			});
		});
	}, 500);
}
function displayQuestion(next){
	next = data243; //JUST FOR PRACTICE
	next = JSON.parse(next);
	var i0 = sendToServer[0].toString(), i1 = sendToServer[1].toString(), i2 = sendToServer[2].toString();
	var i0 = "243"; //JUST FOR PRACTICE
	question = next[i0][i1][i2];
	//next is being carried over
	$("#index-rest-init").fadeTo("fast", 0);
	answerChoices = "";
	console.log(Object.keys(question["answers"]));
	for (var i = 0; i < Object.keys(question["answers"]).length; i++) {
		var id = Object.keys(question["answers"])[i];
		answerChoices = "<li class='answer-choices'>"+question["answers"][id]+"</li><br>";
	}/**/
	//loop through answer choices and list them with li's and br's
	$("#index-rest-init").html(`<p id="question">${question["question"]}</p><div id="answers">${answerChoices}</div>`);
	$("#index-rest-init").fadeTo("fast", 1);
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
function print(message, color){
	//INPUT: string
	if (color == "" || color == null){
		return console.log("%c"+message, "font-weight:bolder;");
	}
	return console.log("%c"+message, "font-weight:bolder; color:"+color+";");
}





