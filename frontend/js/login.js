$(document).ready(function(){
	console.log("%cASA TRIVIA NIGHT","font-weight: bold; font-size: 1.5rem;");
	$("#user-submit").click(function(){
		var username = $("#username").val(); //get value from user input
		var teamname = $("#team-name").val(); //get value from user input
		var proceed = true;
		var errorMessage = `<p class="error-message">please enter a valid username and team name</p>`;
		if (username == null || username == ""){
			proceed = false; //makes sure user actually wrote something
		} else if (teamname == null || teamname == ""){
			proceed = false; //makes sure user actually wrote something
		}
		if (proceed){
			var current = $("#enter-team").html();
			current = current.replace(errorMessage,"");
			current = current.replace(`<p class="error-message" style="color: red;">please enter a valid username and team name</p>`,"");
			$("#enter-team").html(current);
			console.log("%cWORK IN PROGRESS","color: red; font-size: 1.5rem;");
			console.log(username, teamname);
			/* WORK TO BE DONE LATER
			$.ajax({
				url: "",
				type: "GET",
				data: {username: username, teamname: teamname},
				async: false,
				success: function(data){
					//this first ajax checks if username is already taken, if true, then proceed based on server response.
					//RESPONSE EXPECTED: boolean true of false, true means the user is already taken
					if (!data){
						$.ajax({
							url: "",
							type: "POST",
							data: {username: username, teamname: teamname},
							async: false,
							success: function(data){
								//this second ajax now saves the user in the server so people can play
								//RESPONSE EXPECTED: not sure yet lol.
							},
							error: (xhr, status, error){}
						});
					} else {
						//respond to the user that the username is already taken
					}
				},
				error: (xhr, status, error){}
			});
			*/
		} else {
			var current = $("#enter-team").html();
			if (current.indexOf('please enter a valid username and team name') == -1) {$("#enter-team").prepend(errorMessage);}
			else {
				$(".error-message").css("color","white");
				setTimeout(function(){
					$(".error-message").css("color", "red");
				}, 300);
			}			
		}
		
	});
});