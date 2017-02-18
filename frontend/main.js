const info = {
	/*
	info is the information on the front end. We have it based on regions in africa (south, east, north, west, and central) and on country code (these same country codes will be used in the backend). Each code is unique to the country.
	*/
	south: {
		267:"Botswana",
		266:"Lesotho",
		264:"Namibia",
		27:"South Africa",
		268:"Swaziland",
		260:"Zambia",
		263:"Zimbabwe"
	},
	east: {
		257:"Burundi",
 		269:"Comoros",
 		254:"Kenya",
 		261:"Madagascar",
 		265:"Malawi",
 		230:"Mauritius",
 		262:"Mayotte (France)",
 		258:"Mozambique",
 		262:"Réunion (France)",
 		250:"Rwanda",
 		248:"Seychelles",
 		255:"Tanzania",
 		256:"Uganda",
 		253:"Djibouti",
 		291:"Eritrea",
 		251:"Ethiopia",
 		252:"Somalia",
	},
	north: {
		213:"Algeria",
		20:"Egypt",
		218:"Libya",
		212:"Morocco",
		211:"South Sudan",
		249:"Sudan",
		216:"Tunisia",
		34:"Canary Islands (Spain)",
		351:"Madeira (Portugal)",
	},
	west: {
		247:"Ascension Island (United Kingdom)",
		229:"Benin",
		226:"Burkina Faso",
		238:"Cape Verde",
		225:"Ivory Coast",
		220:"Gambia",
		233:"Ghana",
		224:"Guinea",
		245:"Guinea-Bissau",
		231:"Liberia",
		223:"Mali",
		222:"Mauritania",
		227:"Niger",
		234:"Nigeria",
		290:"Saint Helena (United Kingdom)",
		221:"Senegal",
		232:"Sierra Leone",
		228:"Togo",
		290:"Tristan da Cunha (United Kingdom)"
	},
	central: {
		244: "Angola",
 		237: "Cameroon",
 		236: "Central African Republic",
 		235: "Chad",
 		243: "Democratic Republic of the Congo",
 		242: "Republic of the Congo",
 		240: "Equatorial Guinea",
 		241: "Gabon",
 		239: "São Tomé and Príncipe"
	}
}
const topics = {
	/*The five topics used. Each has values (like 1, 2, etc), and these same values will be used in backend.*/
	1: "government",
	2: "economics",
	3: "sports",
	4: "entertainment",
	5: "culture"
};


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



















