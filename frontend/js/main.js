var sendToServer = []; //This is the variable that will be sent to the server
var currentRegion = "";
var currentTeams, teamNow;
$(document).ready(function(){
	/*
	Many variables taken from "variables.js", which contain many variables used. It's best for modularity and clarity.
	*/
	print("ASA TRIVIA NIGHT", "red; font-size: 20px");
	loadStarter();
	// initialize();
});
function loadStarter(){
	$("#index-rest-init").fadeTo(10, 0);
	function callback(){ //Fake callback lol
		var html = `
		<div class="loadStarter container">
			<div id="ls-signup">Start a new game</div>
		</div>
		`;
		$("#index-rest-init").html(html);
		$("#ls-signup").addClass("col-xs-6 col-md-6 col-lg-6 col-xs-offset-3 col-md-offset-3 col-lg-offset-3");
		$("#index-rest-init").fadeTo(1000, 1);
		$("#ls-signup").click(function(){
			currentTeams = {};
			ls_signupClick();
		})
	}
	function ls_signupClick(){
		$.ajax({
			url: "/newgame",
			type: "POST",
			async: false,
			success: function(data){
				return "WORKING ON IT";
				var c = setInterval(function(){
					newteamsUpdate();
				}, 1000);
			},
			error: function(xhr, status, error){
				print("ERROR: "+error, "red");
			}
		});
		$("#ls-signup").removeAttr("class");
		$("#ls-signup").attr("id","ls-teams");
		$("#ls-teams").html("");
	}
	setTimeout(function(){
		callback();
	}, 100);
}
function newteamsUpdate(){
	$.ajax({
		url: "/newteams",
		type: "GET",
		async: false,
		success: function(data){
			//this data is the current teams
			return ""; //CHECK IF DATA IS DIFFERENT
		},
		error: function(xhr, status, error){
			print("ERROR: "+error, "red");
		}
	})
}
function initialize(){
	$("#index-rest-init").html('<p>Select a region</p><div id="map"></div>');
	$("#map").html(africaMapSVG);
	$("#index-rest-init").fadeTo("fast", 1);

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
		// + + + + + + + JUST FOR NOW
		var countryNow = [250,243,267,266,258,255,248,256,253,254,239,252];
		c = Math.round(Math.random()*countryNow.length);
		sendToServer[0] = countryNow[c];
		// + + + + + + +
		var next;
		$.ajax({
			url: "/getcountry",
			type: "GET",
			async: false,
			data: {"code": sendToServer[0]},
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
				data: {"id": sendToServer.join().replace(/,/g,""), "team": teamNow},
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
	// next = data243; //JUST FOR PRACTICE
	next = JSON.parse(next);
	var i0 = sendToServer[0].toString(), i1 = sendToServer[1].toString(), i2 = sendToServer[2].toString();
	// var i0 = "243"; //JUST FOR PRACTICE
	question = next[i0][i1][i2];
	//next is being carried over
	$("#index-rest-init").fadeTo("fast", 0);
	setTimeout(function(){
		answerChoices = "";
		for (var i = 0; i < Object.keys(question["answers"]).length; i++) {
			var id = Object.keys(question["answers"])[i];
			answerChoices = "<li class='answer-choices' id='a-"+id+"'>"+question["answers"][id]+"</li><br>";
		}/**/
		//loop through answer choices and list them with li's and br's
		$("#index-rest-init").html(`<p id="question">${question["question"]}</p><div id="view-answer">View Answer</div><div id="answers">${answerChoices}</div>`	);
		$("#index-rest-init").fadeTo("fast", 1);
		setTimeout(function(){
			$("#view-answer").click(function(){
				var id_ = "a-";
				var value;
				var correctID;
				$.ajax({
					url: "/view-answer",
					type: "GET",
					async: false,
					success: function(data){
						var use = JSON.parse(data);
						id_ = id_ + use.answer;
						correctID = id_ + use.correct;
						value = $("#"+id_).html();
					},
					error: function(xhr, status, error){
						print("ERROR: "+error, "red");
					}
				});
				if (value == question["correct"]) {
					$("#"+id_).css("background-color", blueRight);
					$("#index-rest-init").append(`<p style="font-size: 10rem;">+${sendToServer[2]*10}</p>`);
				} else {
					$("#"+id_).css("background-color", redWrong);
					$("#"+correctID).css("background-color", blueRight);
					$("#index-rest-init").append(`<p style="font-size: 10rem; color: ${redWrong};">-${sendToServer[2]*5}</p>`);
				}
				$("#view-answer").html(`<div id="view-answer-next">NEXT</div>`);
				$("#view-answer-next").click(function(){
					$("#index-rest-init").fadeTo("fast", 0);
					initialize();
					print("WORKING ON IT", "blue");
				});
			});	
		}, 10);
	}, 1000);
	
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





