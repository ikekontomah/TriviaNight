const info = {
	/*
	info is the information on the front end. We have it based on regions in africa (south, east, north, west, and central)
	 and on country code (these same country codes will be used in the backend). Each code is unique to the country.
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
 		262:"Mayotte",
 		258:"Mozambique",
 		262:"Réunion",
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
		34:"Canary Islands",
		351:"Madeira",
	},
	west: {
		247:"Ascension Island",
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
		290:"Saint Helena",
		221:"Senegal",
		232:"Sierra Leone",
		228:"Togo",
		290:"Tristan da Cunha"
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
const codeToRegion = {
	/*
	Each code refers the region it's in.
	*/
	20:"north",
	27:"south",
	34:"north",
	211:"north",
	212:"north",
	213:"north",
	216:"north",
	218:"north",
	220:"west",
	221:"west",
	222:"west",
	223:"west",
	224:"west",
	225:"west",
	226:"west",
	227:"west",
	228:"west",
	229:"west",
	230:"east",
	231:"west",
	232:"west",
	233:"west",
	234:"west",
	235:"central",
	236:"central",
	237:"central",
	238:"west",
	239:"central",
	240:"central",
	241:"central",
	242:"central",
	243:"central",
	244:"central",
	245:"west",
	247:"west",
	248:"east",
	249:"north",
	250:"east",
	251:"east",
	252:"east",
	253:"east",
	254:"east",
	255:"east",
	256:"east",
	257:"east",
	258:"east",
	260:"south",
	261:"east",
	262:"east",
	263:"south",
	264:"south",
	265:"east",
	266:"south",
	267:"south",
	268:"south",
	269:"east",
	290:"west",
	291:"east",
	351:"north"
};
const topics = {
	/*The five topics used. Each has values (like 1, 2, etc), and these same values will be used in backend.*/
	1: "government",
	2: "economics",
	3: "sports",
	4: "entertainment",
	5: "culture"
};
var data243 = `
{
	"243": {
        "1": {
            "1": {
                "answers": {
                    "1": "Joseph Kasavubu"
                },
                "correct": "Joseph Kasavubu",
                "id": 24311,
                "question": "Who was the first President of DR Congo?",
                "valid": true
            },
            "2": {
                "answers": {
                    "1": "1960"
                },
                "correct": "1960",
                "id": 24312,
                "question": " In which year did DR Congo gain independence ?",
                "valid": true
            },
            "3": {
                "answers": {
                    "1": "2001"
                },
                "correct": "2001",
                "id": 24313,
                "question": "Since when has Joseph KAbila been the President of DR.Congo?",
                "valid": true
            }
        },
        "2": {
            "1": {
                "answers": {
                    "1": "Congolese Franc"
                },
                "correct": "Congolese Franc",
                "id": 24321,
                "question": "What is the currency of DR Congo?",
                "valid": true
            },
            "2": {
                "answers": {
                    "1": "cobalt ore"
                },
                "correct": "cobalt ore",
                "id": 24322,
                "question": "What mineral is produced in large quantities by DR Congo?",
                "valid": true
            },
            "3": {
                "answers": {
                    "1": "784 US dollars(2013)"
                },
                "correct": "784 US dollars(2013)",
                "id": 24323,
                "question": "What is the GDP per capita of DR congo ?",
                "valid": true
            }
        },
        "3": {
            "1": {
                "answers": {
                    "1": "Fimbu"
                },
                "correct": "Fimbu",
                "id": 24331,
                "question": "What was teh DR Congo national team known for at the just ended 2017 AFCON ?",
                "valid": true
            },
            "2": {
                "answers": {
                    "1": "2009 and 2010"
                },
                "correct": "2009 and 2010",
                "id": 24332,
                "question": "In what years did TP Mazembe win the CAF Champions league back to back ?",
                "valid": true
            },
            "3": {
                "answers": {
                    "1": "Kabuscorp SCP"
                },
                "correct": "Kabuscorp SCP",
                "id": 24333,
                "question": "What team does Tresor Mputu Mabi play for currently ?",
                "valid": true
            }
        },
        "4": {
            "1": {
                "answers": {
                    "1": "Emenaya"
                },
                "correct": "Emenaya",
                "id": 24341,
                "question": "Who sang Nzinzi ?",
                "valid": true
            },
            "2": {
                "answers": {
                    "1": "Soukous"
                },
                "correct": "Soukous",
                "id": 24342,
                "question": "What is the popular name for Congolese music ?",
                "valid": true
            },
            "3": {
                "answers": {
                    "1": "Joseph Lutumba"
                },
                "correct": "Joseph Lutumba",
                "id": 24343,
                "question": "Who composed the DR Congo National anthem ?",
                "valid": true
            }
        },
        "5": {
            "1": {
                "answers": {
                    "1": "242"
                },
                "correct": "242",
                "id": 24351,
                "question": "How many languages are spoken in DR Congo?",
                "valid": true
            },
            "2": {
                "answers": {
                    "1": "Pygmies"
                },
                "correct": "Pygmies",
                "id": 24352,
                "question": "Which ethnic group are the earliest inhabitants of Congo ?",
                "valid": true
            },
            "3": {
                "answers": {
                    "1": "Kingwana"
                },
                "correct": "Kingwana",
                "id": 24353,
                "question": "What is the DR Congo dialect of Swahili called ?",
                "valid": true
            }
        }
    }
}`;
//It's better to have this SVG file here instead of in the html code because that would make it cumbersome on the html file.
var africaMapSVG = `
<!-- 
SOURCE: https://commons.wikimedia.org/wiki/File:Blank_Map-Africa.svg
DEPENDENCY SOURCES (01): https://en.wikipedia.org/wiki/Telephone_numbers_in_Africa
ON: Feb 18, 2017
MODIFIED CONTENT: <TRUE>. The map key was removed. The fill colors of every path were changed to "#fff" (white). All path id were removed. New path id based on the country code in source (01) were used. For example, South Africa's new id became "c-27" (which stands for code-27). The stroke-line-cap="round" was also removed. Then, all was inputed into Adobe Illustrator to optimize the web usage. The new saved version only contains the country id's and a layer0.
-->
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1200 1230" style="enable-background:new 0 0 1200 1230;" xml:space="preserve">
<style type="text/css">
	.st0{}
</style>
<g id="layer0">
	<path id="c-20" class="st0" d="M726.7,263.8l132-3.9l4.3,4.2l8.7-1.1c0.3-2.5,44.3-2.8,44.6-5.3l-22.4-17.9l-2.9-14.3l4.6,0.2
		l-11.2-10l-30.8-50.9l-0.1-6.2c-7.3-4.8-12.7-10.8-15.9-18.3l-0.3-4.7l-4.7-3.4l1.2-7.5l13.8,18.5c1.2,1.4-0.2,2.4,1,4
		c3.6,5,9.8,10,13.5,13c1.9-0.6,4.1-0.2,5-4l3.6-24l-16.2-33c-10.9,7.7-21.9,10.7-32.8-0.7l-13.4,1c-3.1,1.3-6.3,3.3-8.1,0.1
		l-21.6,12.6l-35.7-8c-5.4-1.1-11.1-2.9-15.5-2.1c-4.5,2.8-7.8,0.6-11-1.5c-1.8,3.2-3.8,6.4-2,8.3l1.4,13
		c-3.2,5.1-6.1,10.3,3.9,22.3L726.7,263.8z"/>
	<path id="c-240" class="st0" d="M501.2,618l-27.1,1.3l-5.4-3.6l8.1-15.6l24.2-0.3L501.2,618z"/>
	<path id="c-251" class="st0" d="M1120,494.1l-48.2,55l-18.8-0.3c-2.3,0.6-11,6-16,10.4c-4.1,3.6-10.4,5.7-16.9,8.7
		c-3.8,0-8.5,1.4-11.2-0.5c-6.3-6.1-13.5-3.1-20.7-0.9c-2.4,4.3-5.6,7.8-10.9,9.2l-25.8-4c-5.8-4.9-12.3-9.5-20.2-13.2l-14.3-1
		l0-11.6l-11.3-4.1l-8.1-18.6l-11.7-9.3c2.2-3.5-3.5-6.4-6.4-9.5c-4,0.9-7.9,0.1-11.9-2l3.5-4.2l-0.2-5.4l10.3,0.2
		c2.2-1.4,4.7-1.9,6.4-5.6l-0.3-30.2l4.9-7.7l5.1,0.2l2.3-12.9c6.2-7.6,8.4-16.9,18.6-22.8l2.7-22.3l8.2-0.2l1.1-2.7l4,0.1l3.4,5.6
		l4.9-13c3.2,2.1,7.5,2.2,9.3,6.7l8.2-1.6l1.4-2.6l1.5-0.3l2,3.5c2.6-1.6,5.9-3.2,10-0.5c1.2,0.5,2.6,0.8,5.8-1
		c3.3,1.8,5.3,5.4,10,5.2c10.6,9.2,20.8,18.8,29.8,29.7c-0.8,0.8-1.2,3.7-1.8,10.3l-3.9,7c-3.1,5.2,0.7,9.7,6.7,7.6l5.3-2l5.3,2.2
		c-6.4,7.4,8.8,20.2,22.5,32.9l49.4,15.8L1120,494.1L1120,494.1z"/>
	<path id="c-213" class="st0" d="M201,137.6l16-8l3.3,1.2l5.5-4.8l9.2,0.8l0.5-4.3c19.1,0.9,23-4.2,26.4-9.3l16-6.6l5.9,0.2
		l-3.1-4.1l0.8-3.2l-0.1-5.3c6.2-0.8,14,0.2,14-6.3l25.8,0.4l3.6-7.4c-5-1.8-5.8-9-5.2-16.6c0.5-5.7,0-18.5,0-18.5
		c-1.7-2.1-3.8-4-4.3-7c1.4-0.6,7.9,0.4,11.8-4.8c2-2.7,4.6-8.2,8-7.1c4,1.3,11.5,2,12-0.5c0.5-2.7,7.8-8.6,18.4-8.6
		c19.4,0.1,44.5-7.3,52.7-4.9c8.2,2.4,18.9-3.2,23.6-2.9c4.8,0.3,6.2,5.5,12.7,1.1c2.4-1.7,11.2,5.2,19.6,2.8c0,0-5,2.2-5.3,7.3
		c-0.4,7.9-1.2,32.5-1.2,32.5c-0.8-1.3-6.8-0.3-7.7,3.7c-1.3,5.5-7.4,4-7.9,6.8c-1,5.5,3.9,10.6,9.6,15.6c1.5,1.3-0.5,8.3,0.9,9.6
		c4.4,3.9,12.2,6.6,12.2,6.6c1.8,18.1,5,30.6,5,30.6c-8.3,0.6-3.9,8.2,1.7,16.4l0.3,47c0,0-7.5,1.5-7,3.4c1.2,4.3,1.4,7.5,6.9,12.4
		c3.5,3.1,3.6,8.4,3.3,11.9c-0.3,4,3.7,5.8,4.7,5.8c8.2-0.2,15.1-4.2,22.9,17.2l-98.3,64.6c-14.6,6.3-38.6,10-39.5,9.7
		c-5.5-2.4,0.9-8.4-1-12.5c-1.8-4-4.1-7.1-10.3-6.4c-3.3,0.4-5.1-3.9-6.4-3.7c-5.3,0.9-6.7-5.2-7.9-6.2c-4.7-4.3-9.3-5.5-8.2-9.4
		L197.5,167.3L201,137.6L201,137.6z"/>
	<path id="c-244" class="st0" d="M509.1,927.5c3.6-1,7.5-5.7,10.7-1.9c3.2-4,12.1-11.8,26.4,2.9l72.1-1l7.7,6.7l45.5,5.9l28.8-6.5
		l-19.4-17.4l1.5-61.5l34.7,1l-3.8-4l4.1-32.5c-0.5,0.1-1-0.1-1.5,0c-8.4,3-17.3,2.3-26.2,2.5l-3.1,6.1l-5.7-4.8l6.3-8.4l-8.6-17.3
		l-1.3-38.9l-14.8,1.1l0-7l-6.6-1l-1.7,3.1l-12.1-0.6l-4.6,17.6c-6-1.1-11.6-2.6-20.6,2c-8-2.6-15.2,3.4-26.4-36.5l-4.3-2.5
		l-45.6-0.7l-20.7,7.1c5.2,14.9,16.2,23.4,15.8,45.5l-3.6,3.4c2.9,10,5.6,20.4,12.1,25.2c0.6,2.8-0.8,4.8-1,6.9
		c-0.7,7.7-4.7,29.4-6.5,25.6c0,0-7.3,1.6-8,7.5c-0.3,2.9-3.9,3.3-5.2,6.8c-3.7,9.9-7.5,25.5-10.3,39.8c-0.3,1.7-2.5,0.9-2.7,2.5
		c-0.8,4.5,0.1,7.8-0.2,12.6c-0.1,1.4-1.9-1-2.3,0.8C507.8,919.7,509.6,925.9,509.1,927.5z"/>
	<path id="c-229" class="st0" d="M359.4,529.1l-15.3,2l-7.9-62c-1-4.7-5.7-6.8-9.3-9.7l1.9-10.1l9.9-7.8l10.3,0.4l7.6-12.2l17.1,2.7
		l0.1,13.6c4.8,5.2,4,12.2,0.3,14.4c0.3,6.5-0.9,11.9-5.2,11.8c-2.6,7.1-4.9,15.5-8.6,18.5L359.4,529.1z"/>
	<path id="c-267" class="st0" d="M730,935l-10.6,6c-10.5,0.1-11.1,6.2-15.1,9.6l-3-8.3l-39.7,3.5l-2.3,61.5l-16.3-0.4l-1.1,44.4
		c4.4,5.5,10.4,11.4,13.5,15.4c2.9,3.9,1.1,11.4-1.8,18.5c7.9,3.3,15.5,3.5,23.1,1.5c1.1-3,2.7-5.1,4.7-6.3c3.3-1.9,6-4.3,7-8.2
		l9.9-8.3c6.1,0.5,10.8,3,15.6,6.4c10.1,0.1,16.1-1.7,20.3-3.8l2-9.3l58.1-46.4c-7.3-5.3-11-4.1-15.1-5.1c-4.2-1-9.4-8.5-8-21.3
		c-4-0.8-6.6-3-8.8-5.6c-2.5-4.2-5.8-3.8-8.8-5.6c-4.6-6.3-12.9-14.5-13.6-19.3c-0.3-2.4-1.6-2.2-3.3-4.9
		C734.5,945.8,731.8,938.8,730,935z"/>
	<path id="c-257" class="st0" d="M803.7,681.4l2.4-2.3l2.9,0.1l1.5,4.1l8.2-1.6l0.4-5.2l10.3-0.6c-3.4,5.9,1.7,9.2,3.8,12.2
		c-6.9,16.1-12.8,21.8-18.1,22.1c-7.1,0-6.2,2.6-6.9,4.9c-0.5-7.2-0.1-13.9,0.3-19.7C809.2,688.2,806.8,682.9,803.7,681.4z"/>
	<path id="c-226" class="st0" d="M269.7,474.4c-3.2-0.4-4.3-4.7-6.9-7.2c-5.1-4.9-14.8-1.2-22.6,3.5c-9.4-4.7-10.7-8.9-12.4-12.8
		c1.9-5.1,0.6-11.8,3.2-17.2c2.3-4.8,6.2-9.3,13.2-13.1l8.5-17.8c7.3-2.4,13.9-3.3,19.6-5.3c5.5-1.9,10.4-5.1,13.5-9.1
		c10.9-6.7,24.4-15.3,32.7-13.2c-0.1,2.7-0.1,5.5,1.6,7.8c2.8,1.9,2.2,5.1,1.6,8.3l16.8,22.6l6.4,2.1c0.9-1.1,5.5-6.7,7.8,5.7
		l3.8,0.8l-7.4,12.4l-10.4-0.6l-10,7.8l-15.1-1.8c-8.7-0.1-9.5,1.5-13.2,2.6l-33.5-1L269.7,474.4z"/>
	<path id="c-243" class="st0" d="M628,575.9c-2.9,8.7-6.4,14.9-10.1,24.4c-4.8,12.4-3.7,31.6-6.2,48.6
		c-12.6,5.7-16.6,14.9-23.1,23.1l-5,24.1c-9.1,8.9-17.6,20.4-28.6,21.9c-0.7-13.5-12.3-7-13.6-1.7c-5.6,3.7-7.4-0.1-10.5-1.3
		c-4,2.9-6.9,6.3-7,11.2c0.6,7.8-3,7.4-5.5,8.9l1.5,5.9l20.8-7.1l45.6,0.8l4.2,2.5c10.4,38.4,18.8,34.6,26.2,36.5
		c11.6-4.8,14.7-2.2,20.8-2.2l4.5-17.5l12.2,0.7l1.6-3.2l6.8,1.1l0.1,7.1l14.7-1.1l1.5,38.7l8.4,17.4l-6.4,8.6l5.8,4.9l3.1-6.2
		l19.2-0.3l7-2.3l6-0.1l2.2,8.6l11.2-3.7c0.6,2.6,1.7,4.5,3.2,5.9c3.6,3.4,10.4,8.1,16.5,8.2c4.3,0.1,7.7-4.3,11.5-3.5
		c5.1,7.1,11.2,9.1,17.5,9.7c4.7,7.3,7.9,16.2,21.3,14.8l5.2,3.6l-0.4-18.7c-9.3,3-14.9-1.3-19.8-7.3c0.9-7.4,3.9-14.1,7.3-20.6
		c0.3-7.6-0.7-14.6-2.6-22.2c-0.4-1.7,1.8-7.9,4.5-11.5l30.2-7.4c-3.1-16.9-14.1-20.3-17.3-32.3c-3.9-14.6-5.7-32.2-3.7-49.3
		c-0.6-8-4.2-12.3-9.5-14.5l9-12.9l7.3-8l1.1-28l10.2-15.5l16.5-14.8l-9.9-6.5l0.1-17.7l-20.6-17.4c-1.8,0.2-2.7,2-4,3.1
		c-4.1,1.3-8-0.7-11.9-1.2c-2.1,4.8-10.9,2.3-11.9-0.5c-0.3-0.8,0.4-2.4-0.8-2.8c-2.6-3.5-5.3-5.9-7.8-8.1l-8.6,0.4l-2.8,3.2
		l-3.1-2.6l-2,3.1l-4.1-5.4l-18.5,1.6l0,3l-8.2,1.5l-1.3-3.2l-21,7.4c-5.9-4.3-8-1.9-11.5-2.1l-3.7,8c-17.4-0.7-24.7-0.7-27.6-4.5
		c-5.5,6.1-6.9-1.4-10.2-2.3c-1.9-8.9-7-6.2-10.5-9.2c-6.5,4.4-10,8.7-13.1,13.1C630.7,566.5,629.7,571.5,628,575.9z"/>
	<path id="c-253" class="st0" d="M1029.9,413.4l-9.8,7.3c-1.7,5-0.8,8.9-2.2,11.3c-5.6,9.6-4.9,10.3-3.2,12.4
		c2.4,2.9,8.6,0.8,11.8-1.1l5.1,2.2l5.7-8.7c-3.5-3-7.1-1.4-10.6-1.6c1-4.3,5.8-5.3,9.3-7.5C1038.6,420,1033.2,414.9,1029.9,413.4z"
		/>
	<path id="c-225" class="st0" d="M184.8,561.1l6.4,0.6l50.8-14.4l18.2,2l2.6-10.8c-0.6-8.6-7.9-17.5,2-25.8
		c0.9-6.3,0.4-13.2,7.2-17.2l-2.3-21.3c-2.8,0.1-4-2.8-5.4-5.4c-3.3-5.6-14.2-4.9-24.3,1.9c-4.8-3.4-10.4-5.7-12.3-13
		c-6.7-2.5-12-1.1-16.3,2.6l0.8-7.3c-1.1-2.8-4.9-2-9.3-0.3c-1.1,0.1-0.3,1.9,0.9,4.1c-1.6,0.6-3.3,0.7-4.9,1
		c-1.1,1.4-2.8,2.9-4.6,3.3c-4.6-8-7.2-6.5-12.7-2.1c-1.9,1.5-3.1,5.2-3.8,8.3c-0.9,3.6,0.7,7.1,4.6,6.6l-0.4,4.8
		c2.8,1.2,2.2,1.7-0.4,4.5c-1.2,1.2,3.3,6.9,2.8,8.2l-8.6-1.7c-0.2,1.4-0.5,3.3-0.7,4.8l4,1.7l-3.2,8.4c0.4,0.7-3.8,0.2-4.9,0.4
		l0.1,5.3c4.4,1.2,2,11.5-2.1,13.1l6,3.8c1.3-1,5.1-0.1,7.5,6.5c0,0,6,3.8,5.9,8.5c-0.1,3.8-2.7,4.4-3.3,7.3L184.8,561.1z"/>
	<path id="c-291" class="st0" d="M942.4,381.5c3.1,2.1,6.1,1.8,9.2,6.6l8.2-1.6l1.6-2.6l1.3-0.4l1.8,3.4c4.1-2.2,7.8-2.3,10.5-0.2
		c1.6,1.3,3.9-0.5,5.7-1.1c3.2,2.6,6.3,5.4,9.8,5.3c11.2,9.3,20.9,19.3,29.9,29.6l9.7-6.8c-1.4-3.7-3.2-7.1-9.8-7.3
		c-0.3-3-1.6-5.6-5.8-7.2c-0.9-3.6-4-3.5-6.4-4.5c-2-5.7-7-8.8-11.1-12.7c-4.6,1.1-6.7-2-8.9-4.9l-3.5-0.7l-2.5,1.5
		c-2.6-2.2-3.3-5.1-4.1-8.1l-3.8-1l1,5.2c-2.3,1.4-3.5-2.4-4.7-6.4l-7.6-11.1c-5-23.2-9.3-26.1-13.8-32.4c-1.2,2.9-1.4,6.4-3.5,8
		l-11.3,5.9c-1.8,3.2-4.6,4.1-7.6,4.1c-4.2,20.1-6.4,33.1-6.2,49.4l8.7,0l0.8-2.8l4,0.2l3.3,5.2L942.4,381.5z"/>
	<path id="c-241" class="st0" d="M497.7,699.9l-30.1-31.2l-7.2-18.3l6.6-6.4l1.9-10.3l8.5,1.9c0.5-0.5,1.2-0.9,0.8-1.9l-7.3-3.8
		l2.3-10.5l28.2-1.4l0.1-18.1h34.9l-2.7,3.8l-0.3,11.8c3.2,1.2,5.3-1.4,7.3-5.1c5.4-0.8,15.2,4,12.5,13.3c-4.5,5-6.5,9.7-4.9,14
		c1.2,3.2,2.6,6.2,3.5,10.9l-2.7,24.6l-5.6,4.1c-2.5-4.2-7.2-5.7-13.7-4.9c-2-2.5-4-5.7-7.8-0.7l-14.6,9l1.3,12L497.7,699.9z"/>
	<path id="c-220" class="st0" d="M41.5,396h18.4c4-5.3,9.8-3.6,16.4,1.2l10.6,0.8l2.3,3l-7.7,2.7c-5.3-1.1-10-3.1-14.3-5.8
		c-3.1,1.8-6.6,2.9-11,2.5l-2,3.3l-15.9,0.7L41.5,396z"/>
	<path id="c-233" class="st0" d="M331.9,534.4c-1.6,2.1-1.8,6.6-6.2,4c-22,2.7-30.7,12-46,18l-19.4-7.1l2.6-10.8
		c-0.6-8.6-7.9-17.5,2-25.8c0.9-6.3,0.4-13.2,7.2-17.2L267,449l33.5,1c4.5-2.4,9.2-2.7,14-2.7c-2.6,5.3-1.2,10.3,5.1,15
		c5.1,21,4.5,41.2,6.1,61.7L331.9,534.4z"/>
	<path id="c-224" class="st0" d="M63.6,444.3c-0.6,1.8-0.4,2.7,1.9,2.7c0.9,1.1,4.3-6.9,3.8,1.2l3,0.3c-1,4.5,2,10,5,11
		c3.7,1.3,5.8,5.6,7.9,7.5l5.1,9.4c3.5,2.4,8.3,0.7,15.9-9.5c-0.8-3.4,3.9-5.2,17.8-4.3c11.5,8.3,14.9,17.9,10.6,28.8
		c5.1-1.2,8-4.7,16.5-2.5c4.3,5.4,6.9,11.3,3.4,19.3c4.7,1.8,6.4,6.9,13-1.8c-0.4-2,1.2-2.7,3.2-1.2c1.3,0.9,3.3-0.5,5.3,0l3.5-9
		l-4.3-1.7l0.8-4.7l8.7,1.8c-0.7-3.2-5-7.4-1.8-9.6c1.4-1.5,0.8-2.6-0.7-3.7l0.2-4.1c-8.4-1-3.6-10.4-0.7-15.1l-5.2-4.7l-0.6-10.4
		l-4.3,3.1l-1.6-2.4l5.7-5.2l-7.7-5.9c1.3-4.1-0.4-9-1.8-14.1l-5.4-1.2c0.1,2.3-0.7,4.1-3.1,4.9c-2-0.6-3.3,0.7-3.7,3.9l-9.6-4
		l-7.6,5.5c1-2.5-1.5-4-3.1-5.8l-4.2,2.8c-3.3,1.1-3.7-0.7-3.7-2.9c0.7-0.7,1.5-1.3,1.8-2.4c-11.9-1.8-24.3-1.1-35.1-7.6l-3.4,0
		l-1.5,18.4l-9.3,0.2C69.2,434.8,64.7,443.2,63.6,444.3z"/>
	<path id="c-245" class="st0" d="M37.4,417.5l1.1,3.1c2.3,1.6,6.7-1.6,6.4,6c2.1,1.1,4.7-1.1,6.3,4c2.6,1.3,9.2-10.9,6.8,7.3
		l5.8,6.4c3.5-5.4,8.7-10.8,14.1-12.7l9.5-0.2l1.6-18.4l-24.6-0.1c-5,2.4-10.1,3.8-15.6,2.6C45.4,416.7,41.8,417.3,37.4,417.5z"/>
	<path id="c-237" class="st0" d="M583,608.8c-4.5-2-9.8-6.4-13-4.7l-11.3-4l-22.6-0.2h-35.5l-24.2,0.3l2.5-18.5l-6.4-8.2l2.4-2.9
		l-1.6-2.4l-4.2,1.3c-5.2-0.6-7.1-4.4-8.3-8.6c-2.8-1.1-6.8-0.7-6.8-5.4c5.9-10.3,7.2-24.3,18.8-30l0.4-4.5l16.6-0.8
		c6.2,4,4.2,8.5,14.7,7.2c7.3-13.1,12.5-37.2,22-38.3c5.7-14.1,7.4-34.1,17.2-42.3c4.8-1.7,8.9-3.8,10.7-6.9c1-1.8,1.3-7.7,0.4-10.3
		c-0.6-1.9-1.8-0.4-3.7-2.9l-2.8-10.8l2.3-1.9l8.7,7.4c1.2,6.1,4.3,11.7,3.7,18.2c-0.6,9.5-4.5,10.8,4.9,21.7c1.6,2.7,2,5.5,1.6,8.5
		l-17.6-1.8c-2,4.8-6.3,15.7,11,19.6l8.2,24.6l-15.3,25.4l2.1,18.5c6.4,11.9,13.9,24.3,24.3,33.9L583,608.8z"/>
	<path id="c-254" class="st0" d="M1015.6,664.1c-2.2,3.4-4.6,6.6-9.4,6.7c-1.8,4.8-4.1,9.1-10.1,10.6c-6.6,11.9-11.6,25.6-19.8,35.6
		l-23-15.4l-3.6-13.4l-70.1-44l23.1-35.3l0.5-19.8l-7.9-6.5c-1-7.6-2.8-14.5-9-17.3l8.2-7.1l22.8-1l14.2,1.2
		c4.9,2.5,7.4,2.6,20.3,13.3l25.8,3.9c4.1-1.4,8-3.5,10.8-9.3c6.2-0.9,12.9-6.3,21,1.4c2.7,0.9,6.9,0.5,11.1-0.1
		c-4.8,7.7-9.9,13.9-14.9,20.3l0.4,64.1L1015.6,664.1z"/>
	<path id="c-218" class="st0" d="M510.4,78.6c0,0,2.5,9.7-5,15c-3.8,2.7-16,11.7-16,11.7c1,5.5,2.3,19.3-9.6,21.1
		c-8.2,1.3-3.9,7.9,1.6,16.9l0.3,46.8c0,0-7.3,1.4-6.8,3.4c1.2,4.3,1.2,7.4,6.7,12.3c3.5,3.1,3.6,8.8,3.3,12.2
		c-0.3,4,4.1,5.7,5.2,5.7c8.2-0.2,14.7-4.1,22.5,17.3l38.6,1.2c4.5,1,9.3,7.8,9.3,7.8l22.1-6.3l130,64.3l-0.2-10.4
		c14.4,1.2,16-0.5,16-0.5l-8.9-151.9c-5.2-7.2-10.4-14.2-4.1-22.1c0,0,0-8.4-1.5-13.2c-1.6-5,2.9-8.4,2.9-8.4
		c-0.1-6.4-12.4-6-18.9-6.3c-8.5-0.4-14.3-1.6-12.8-8c0,0-22.3-8-31-2.7c-4.6,2.8-14.3,7.3-16,13c-1.2,3.9-0.1,6.5,2.2,10.4
		c4,6.9-9.6,30.5-25.2,11.6c0,0-20.5-5.6-32-8.2c-11.3-2.5-19.1-12.4-14.4-18.4c0.5-0.6-30.7-9.6-30.7-9.6
		C523.5,85.6,513,81.4,510.4,78.6L510.4,78.6z"/>
	<path id="c-231" class="st0" d="M184.7,561.1l-14.3-5l-50.5-41.3l16-13.4l-0.3-4.8l7.8-7.6c2.3-1.6,5.2-0.5,7.8-0.2
		c6.7,9.8,4.9,14.4,3.1,19.4c3.8,1,6.7,7.3,13-1.7c-0.2-2.5,1.4-2.5,4-1v4.8c2.1,0.9,3.6,5,1.6,8.7c-1.1,2-1.8,4-4.1,4.4l6.6,4
		c1.9-0.3,3.5-1.7,7.4,6.6c0.8,1.2,10.7,5.3,2.5,15.1L184.7,561.1z"/>
	<path id="c-261" class="st0" d="M1070,1078.5l48-102.1c3.7-11.5,5.8-23,11.3-34.6c3.7-4.9,8.3-9.4,5.4-16.6l1-9.9
		c0.5-3,2.2-2.9,4.7-0.5l1.5,6c1.8-0.6,3.5-1.2,3.4-4.1l-4.9-52.9l-9.2-9.9l-5.3,4.4l-1.4,13.6l-3.1,2.7c-1.6-0.5-4-2.9-3.3,2.6
		l-4.6,5c-5.2-9.6-5.9-1.1-4.5,3.1c-0.1,1.8,0.4,4.9-2.1,2.1l-3.7,6l5.3,3.9h-3.1l-6.8,4.9l1-6l-6.8,6.8l1.6,8.3l-4.6,0.2l0.9-3.7
		c-4.2-2.8-7.7,3.1-11.4,5.1l4.2,6.8l-5.2,0.5l-2.1-6.3l-8.4,1.4c0.3,3-3.1,3.8-6.2,4.9l-0.5-4.2l-4.7,4.7l-8.2,0.4l-1.6,7.1
		l-11.1,16c8.5,7.4,5,24.2,7.3,36.5c-3.1,9.9-9.2,17.5-14.6,25.6c-6.3,4.2-9.2,8.4-10.1,12.5c-0.9,4-2.9,11.9-1.7,15.9
		c1.4,4.7,4,3.1,4.1,7.8l1.5,7.7c-7.7,29.8,11.5,29.3,15.7,36.6c1.9-0.9,4.3,0.6,6.1-0.4c4.1-2.2,9.3-7.7,14.8-5.8
		C1063.2,1081.8,1066.7,1080,1070,1078.5z"/>
	<path id="c-223" class="st0" d="M248.9,206.2l-25.5,0.7l1.2,147.1l6.7,2.4l-4.7,14.4l-75.1-4.2l-8.6,6.1l-4.7-1.7l-3.3-9.7
		l-4.3-1.1c-8.5,18.5-9.8,16.3-12.9,19.5c0.5,1.9-0.7,3.7-0.1,5.4c1.9,5.4,3.1,10.9,0.2,13.3c3.9,3.5,9,6.3,10.4,11.3
		c0.3,6.4-0.1,11.3-1.8,13.1c-1.7,1.7,0.3,5.7,3.9,2.7l3.5-2.1c1.1,1.8,3.6,2.8,3.3,5.5l7.6-5.2l9.3,3.9c0.9-1.4-0.2-3.6,3.4-4.1
		c1.9,0.1,3.2-1.3,3.8-4.6l5.1,1.2c1.4,4.8,3,9.6,2.2,14.1l7.5,5.7l-5.7,5.3l1.6,2.4l4.2-2.8l0.6,10.1l5.3,4.9
		c2.2-2.2,5.6-4.9,8.3-3.5c2.5,1.3,3.6,6.3,6,4.7c2.4-1.6,2.9-3.2,6.7-3.2c2.8,0-2.4-4.9,1.1-4.8c1.6,0,4.2-1.9,7.1-1.1
		c2.7,0.7-0.7,10.9,1.3,8.7c5-5.4,14.8-3.3,15.8-2.1c2.8-9.9-2.6-19,16.3-30.5l8.4-17.6c11.2-4.7,23.1-2.6,33.4-14.7
		c12.9-8.6,25.8-15.1,32.8-13.2l13,0l7.3-6.2l35,0.4c0.9-1.7,1.4-3,6.2-5.4c0-4.2,3.8-4.5,6.5-5.8l1.4-51.9l-13.1,1.9
		c-5.2-3.4-0.8-4.5-0.8-12c-3-6.7-6.7-7.7-10.4-7c-3.2,0.6-4.7-4-6.4-3.7c-2.9,0.6-6.1-2.2-8.1-6.4c-0.7-1.4-2.5-2.1-3.7-2.9
		c-2.7-1.9-5.2-3.3-4.5-6.2C341.2,276.9,278.6,229.2,248.9,206.2L248.9,206.2z"/>
	<path id="c-265" class="st0" d="M882.8,801.7l10,32.8l-2.9,29.1c5.9,5.3,11.8,9.6,20.1,23.5c1,1.7,2.1,6.1,1.8,9.6l-3.6,15.4
		l-9,3.9l0.7,13.5l-4.8,0.1c2.5-6.3,0.1-5.1-1-5.5c-6.5-4.1-9-10.2-10.2-15.7c5.3-8.2,5-14.8,4.4-21.2l-8.8-1.6
		c-6.8,1.7-8.2-0.8-8.8-3.1c-3.7-8.7-5.4-5.3-6.8-5.9l-5.3-7.3l9.3-17.2l7.2-0.8l-4.9-6.4l4.3-22.3l4.1-3l-11.8-23.4
		C870.1,799.2,873.9,800.3,882.8,801.7z"/>
	<path id="c-212" class="st0" d="M198.9,157.5l2.6-19.7l15.5-8l3.5,1l5.5-4.5l9.1,0.7l0.5-4.4c19.1,0.9,22.9-4.2,26.3-9.3l16-6.5h6
		l-3-4l1-3.7l-0.5-4.8c6.2-0.8,14,0.2,14-6.3l25.9,0.4l3.5-8c-5-1.8-5.8-9-5.2-16.6c0.5-5.7,0-18.5,0-18.5c-1.7-2.1-3.8-4-4.3-7
		c-4.2-0.8-9.3-0.9-11-3.4c-6-1-12-1.6-17.4-1c-9.9,1-14-2.6-18-11.9c-9.5-0.6-19.6,19.8-27,30c-17.8,4.9-30.6,12.9-39.4,23.5
		c1.2,4.3-0.9,5.9-5.2,8.7c-2.8,1.8-12.6,17.5-9.3,26.2c0,6.8-5.3,18.2-20.6,25.8c0,0-7.1,6.7-18.4,10.3c-4.8,1.6-15.8,2.8-19.1,5.9
		L198.9,157.5z"/>
	<path id="c-222" class="st0" d="M116.5,262.6c2.1-14.7-7.1-35.4,21.5-35.9l6-44.4l50.9,4.5l2.8-20l51.3,39.4l-25.6,0.6l1.3,147.2
		l6.5,2.3l-4.4,14.3l-75.3-4.1l-8.6,6.1l-4.6-1.5l-3.3-10l-4.6-1.1c0,0-8.3,20.5-13.6,18.4c0,0-2.4-2.6-5-5.3
		c-2.3-2.4-4.9-4.8-6.7-8.2c-2.5-4.8-4.3-12.4-7.7-11.8c-7.4,1.2-13-8.6-13-8.6s-8.6-2.4-14.8-0.7c-8,2.2-17-0.1-18.6,1l7.3-20.4
		l0.7-23.7l-4.5-7.1c2.4-4.2,9.7-8.1,4.9-20.7c-0.5-1.4-3.1-0.7-3.1-0.7l-3.1-9.3l3.8-3.8L116.5,262.6z"/>
	<path id="c-258" class="st0" d="M813.3,893l3.5,9.2l-0.3,4.6l12.2,0.9l28.7,11.2c2.9,16,1.1,29.4-3.6,41.3
		c-0.1,2.3-0.9,4.5-0.6,6.7c0.5,4,2.5,9.5,0.3,14.1c-5.8,11.8-11.1,23.6-12.5,24.4c-4.8,2.6-10.7,10.3-10.8,16.5l2.9,70.7l10.8,0.7
		l2.9-10l-4.3,1.6c0.7-4-0.2-7.9,3.9-11.9l34.8-13.7c4.3-3.2,7-7.9,10-12.4l-4.1-1.4l7.2-27.2l-3.7-1.3l-3-22.9
		c-9.8-6-4.1-15.4-0.2-17.6l21-17.9l1.7,3.6l7.8-8.6l-1.7-2.7l5.1-0.9l1.5-4.4l25.7-12.7l6.4,0.1c4.9-3.7,8.8-7.7,15.9-10.7
		l-0.5-3.8l8.6-6.6c2.1-2.1,3.8-5.2,6.5-5.1l0.4-4.3l-1.6-1.8l4.7-7l1.2-4.7l-0.7-3.1l-2.9-4.4l1-17.2c-2.2-2.1-1-3.6,0.2-5l-0.6-19
		l6.9-11.6c0.2-3.2,0.4-6.4-0.7-9.6c-10.6,6.3-28.3,17.3-37.3,11.6c-3.9,0.5-8.3,0.5-12.1,5.4c-3.2-0.3-6.1-0.9-10-0.6l-12.7,2.3
		c-2.3-2.8-4.6-5.5-9.9-2.5l-18.5-0.6l-2.9,28.9c9.1,7.3,17.2,16.8,21.2,26.5c2.4,5.9-2,14.4-2.8,21.9l-9.2,4l0.5,12.9l-4.5,0.7
		c1.1-2.7,2.3-5.4-1.6-5.8c-5-4.2-8.8-9-9.3-15.3c3.8-6.2,5.4-13.3,4.3-21.2l-8.9-1.6c-3.5,0.8-7.5,0.8-8.4-2
		c-2.4-7.3-4.7-7.7-7.4-7L813.3,893z"/>
	<path id="c-264" class="st0" d="M509.2,927.5c0.7,9.3,1.6,18.6,10.1,25.2l35.3,62.9l0.9,28.8l6.3,13.3c0.4,5.2-1.6,10.4,1.6,15.6
		l4.4,24.6l19.2,21.3c11.9-12.8,16.2-2.5,19.2,5.7c7.3-0.7,14.6-1.4,21.9-0.1c3.4-3.1,6.9-6.1,12.3-8.4l2.8-109.6l16.2,0.5l2.3-61.7
		l39.6-3.5l3,8.3c2.8-3.1,6.7-8.9,12.6-9.2c5.3-0.2,7.8-3.6,13-6.4l-3.8-5.5l-25.5,4.2l-28.5,6.6l-46-6.1l-7.7-6.5l-72.5,0.8
		c-3.5-4.6-16.6-15-26.1-2.7C516.6,921.9,512.8,926.7,509.2,927.5z"/>
	<path id="c-227" class="st0" d="M388.2,313.3l-1.4,51.9c-2.3,1.3-5.5,0-6.4,5.6c-2.6,1.5-5.7,2.5-6.3,5.5L339,376l-7.1,6l-13.3,0.1
		c-0.4,2.9-0.3,6.4,1.9,8.2c2,1.6,1.7,4.9,1.2,7.8l16.8,22.4l6.1,2.3c3.4-3,6.5-3.8,8,6.1l20.8,3c1.5-3.3,1.1-7.9,4.9-9.6
		c5.7-3.2,4.7-8.8,6.8-13.3c4.6-2.2,1.7-5.3,26.1-5.1c6.3,4,12.4,5.3,19.1,13.3l4.9,0.2c0.1-1.7,5.1-5.1,8.1-5.7
		c3.3-1.8,9.1,1.3,16.8,8.1l13.8,1.2l13.3-9.5l23.2-0.6c3.5,1.4,6.1,4.5,11.2,3.2c3.7-4.2,10.8-8.2,18.9-11.6
		c-1.3-3.7-2.7-7.3-1.5-12c2-1.7,4.4-1.9,4.7-8.1l28-31.1l5.2-49.6l4-10c-8-3.3-13.5-6.4-15.2-17.4c-1-6,0.4-13.8-0.2-25l-5,0.9
		c-2.7-3.2-5.4-6.7-8.9-7.9l-39.3-1.4l-99.5,65.6L388.2,313.3z"/>
	<path id="c-234" class="st0" d="M454,555.6l-3.4-0.2l-1.1,5.9c-5.8,0.1-11.5-0.5-17.3-2.6c-13.8,8.6-24.7,7.2-30.3-12.6
		c-4.3-11-11.2-14.6-18.5-17.1l-24,0.1l1-38.3c3.8-4.8,6.2-11.6,8.3-18.7c6.4-1.6,5-7.2,5.3-12c6.4-4.2,2.2-10.9-0.4-15.4l0.4-12.4
		c0.5-3.5-0.3-7.3,4.8-10.6c2-2.4,3.9-1.2,5.9-13.1c3.5-2.7,7.2-5.4,26.1-4.8c6.6,3.5,15,6.3,19.6,13.4l4.3-0.2
		c2.7-1.9,3.6-5.3,8.6-5.5c2.8-0.1,3-2.8,16.5,7.8l14.1,1.3l13.1-9.4l23.5-0.5c3.4,1.4,6.2,4.6,10.7,3.2c5.9-5.8,13-8.9,19.7-11.7
		c2.7,4.3,6.4,8.5,9.7,11.1l-2.2,1.8l2.8,11.3c1.3,1,3.7,1.3,3.8,3.1c2.5,11.1-3.7,14.6-11.1,17c-9.4,7.3-11.8,27.4-17.2,41.9
		c-10.5,3.1-14,22.5-22,38.5c-7.7,1.5-9.7-2.3-14.6-7.5l-16.9,1.1l-0.4,4.5C462,531,459.6,543.7,454,555.6z"/>
	<path id="c-242" class="st0" d="M514.4,721.6l-16.8-21.7l11.2-7.1l-1.3-12.2l13.8-8.3c2.4-1.8,4.1-6.3,8.3,0.3
		c7.3-0.9,11.6,1,13.9,4.6l5.8-4l2.4-24.2c-0.1-8.3-9.4-13.8,1.7-25.7c1.9-7.8-5.1-13.2-12.8-12.8c-1.9,2.4-2.6,6.3-7.3,5.3
		l0.2-11.6l2.8-4.2l22.5,0.3l10.9,3.9c4.1-2.1,9.5,4.1,13.3,4.7l-0.6-18.6c8.5-10.9,14.8-14.1,21.8-15.7l10.7,4.9l13.2-3.7
		c-3.2,8.7-6.8,15.8-10.1,24.4c-5.6,14.6-3.8,32.4-6.3,48.8c-12.2,5.4-16.6,14.8-23,23.2l-5.3,24.3c-11.5,12.3-21.7,22.2-28.2,21.7
		c0-6.9-7.6-13.1-13.7-1.7c-4.3,2.8-7.4,1.4-10.6-1.8c-4.8-6.3-6.3-1-8.5,2.2L514.4,721.6z"/>
	<path id="c-250" class="st0" d="M827.2,653.9l-7.4,5.9h-2.5l-1.5-2.1c-6.5,6.5-11.4,13.9-16.4,21.1c1.8,0.4,3.3,1.3,4.3,2.7
		l2.4-2.3l2.8,0.2l1.4,3.8l8.5-1.7l0.4-5.1l10.5-0.6c1.5-2.1,2.9-4.2,5.2-6.3L827.2,653.9z"/>
	<path id="c-260" class="st0" d="M830,774.9l-30.4,7.5c-2,3.6-3.4,5.7-4.1,9.8c-0.2,1.1,0.7,3.2,1,6.2c0.6,5.9,2.6,16.3,0.8,19.1
		c-4.3,6.6-7.1,18.7-6.9,19c2.4,3.5,7.4,7,10.3,7.8c4,1.1,8.5,0.6,9.5-0.9l0.5,19.2c-1.6-1.3-3.8-2.2-4.9-3.6
		c-6.4-0.5-12.2,2.9-21.5-14.9c-6.2-0.5-12.3-2.3-17.6-9.7c-2.6-0.7-6.8,2.8-10.7,3.7c-11-1.1-14.2-6.3-17-7.9
		c-1.9-1.8-3.1-3.8-3.5-6.2l-11.3,3.8l-2-8.8l-4.7,0.2l-4,32.8l3.7,3.7l-34.6-0.9l-1.7,61.5l19.2,17l26.1-4.1l3.8,5.7l1.7,3.9
		l20.4,0.2l2.8,2.4l3.8-1c11-14.4,21-18.1,31.2-22.9l0.4-9.6c8-5,16.6-7.7,26.6-5.8l-3.7-9.5l50.7-15.9l-5.4-7.9l9.1-17l7.1-0.8
		l-4.6-6.2l4.2-22.4l4.2-2.9l-8.3-16.2l-3.8-7.5l-19.4-6.5c-6.6-9.4-8.2-7.6-10.2-7.1L830,774.9z"/>
	<path id="c-221" class="st0" d="M51.2,344c-3,5.1-5,7.8-5.1,12c-0.2,9.5-9.7,12.6-14.5,19.5c4.4,6.5,9.3,12.8,10,20.4h18.4
		c4-5.3,9.8-3.6,16.4,1.2l10.6,0.8l2.3,3l-7.7,2.7c-5.3-1.1-10-3.1-14.3-5.8c-3.1,1.8-6.6,2.9-11,2.5l-2,3.3l-16,0.7
		c-0.9,4.3-1.8,8.7-1,13c3.9-0.4,7.6,0.2,11.7-2c5.5,1.4,10.7,0.2,15.7-2.7l27.7,0.3c10.4,5.9,23.4,6.6,35.4,7.3
		c0.6-6.3,4.1-12.5-9.6-22c2.1-2.7,1.3-8.9-0.5-13.4c-1-2.5,1-3.3,0-6c-1.3-0.7-2.9-2.8-5-4.8c-2.4-2.3-7.4-8.9-7.4-8.9
		c-2.9-8.7-6.6-12.3-6.6-12.3c-8.9,1.5-14.4-8.6-14.4-8.6c-7.6-2.1-11.6-0.5-14.9-0.4C60.5,344.3,58.7,345.3,51.2,344z"/>
	<path id="c-232" class="st0" d="M119.9,514.8l-13.1-6.7c-1.5-4.1-5.5-6.3-9.6-8.4c0.4-5.7-3.4-7-6-9.1l-0.9-13.7
		c5.8,2.2,10.9-3.6,15.9-10c-1.2-5,10.2-4.5,17.8-4.4c7.6,6.6,15.6,13,10.7,29.1c3.3-1.2,6.3-2.6,9.9-3.5l-9.1,8.5l0.3,4.8
		L119.9,514.8z"/>
	<path id="c-263" class="st0" d="M731.6,938.9l5.1,10.3c1.7,1.9,3.8,3.7,3.7,6.9c3.9,6.8,8.9,11.6,13.4,17.2
		c3.5,1.1,6.5,2.6,8.6,5.4c2.1,2.6,4.5,5.1,8.8,5.8c-1.8,10.4,2.9,19.4,7.8,21.3c5.8,0.3,11.3,1.3,15.4,5.3c11.8,1.4,13.2,3,16,4.7
		c9.7-3.2,14.2,2.2,19.7,5.9c1.3-7.9,6-12.3,11.2-16.4c4.1-6,8-15.5,11.9-23.4c2.9-4.9,0.6-10.1-0.1-15.2l0.8-6.5
		c7.1-17.9,4.9-28.6,3.8-41.2l-29-11.2l-12.2-0.9l0.4-4.1c-10.3-3.3-18.7,1.2-26.4,5.4l-0.3,9.5c-23.7,10.6-25,16.3-31.5,23
		l-3.5,1.1l-2.9-2.6L731.6,938.9z"/>
	<path id="c-252" class="st0" d="M1037.4,436.6l-5.9,9.2c-5.7,8.2,9.9,20.8,22.8,32.8l49.8,16l16-0.7l-48.3,55.3l-19.5-0.4
		c-6.2,3.5-12.3,7.1-16.7,11.6c-5.1,3.2-10.8,5.1-16.2,7.6c-3.3,7.3-8.9,13.3-14,19.6l0.2,64.2l9.8,12.3l22.5-25.2l37.7-35.6
		l4.3-0.5l15.8-15l0.6-3c8.7-6.6,19.5-17.7,22.2-23.1c4.8-9.7,10.9-17.8,17.8-25.7l14.9-42.9c2.9-2.8,5.1-6.5,6.9-10.8
		c0.8-4.5,3.4-6.1,5.5-8.6l1.7-21.5c4.8,0.7,2.5-8.8,2.8-14.7c-1.9-1.7-3.9-4.4,0-6.6l0-5.4c-3.5,0.3-7-3.7-10.4-1
		c-4.3,4-10,6.9-16.6,7.5c-7.3,0.6-13.2,4.8-16.3,3.8c-4.9,4.1-11.2,5.5-19.4,3.1c-5.4,4.8-9,11.1-26.5,6.7l-11.1,8
		C1050.6,458.3,1046.1,444.4,1037.4,436.6z"/>
	<path id="c-211" class="st0" d="M887.2,477.4L887.2,477.4l-7.8,2.8v-11.8L875,460l-7.5-2.8l-6-33.5L855,421v5.7h-11.4l5.9,4.4
		l1,13.9l-17.2,22l-16.2-10.6l-10.7,3.9v5.7l-9.3,3l-0.2-5.8l-20.4-0.7v7.4H757l-6.5,0.6l-4.5-8.6h-5.5h-8L718,490.3l0,0.3
		c0.2,0.1,0.4,0.1,0.5,0.2c2.1,2.9,3,6.5,12.7,5.4l5.6,5.1c-1.2,8.5,11.4,13.2,18.7,19.3l6.8,13.5c5.9,2.9,13,4.1,13.8,14
		c3.9,2.2,5.5,5.5,8.3,8.4c1.3,1.3,0.1,2.6,1.4,3.6c3.7,2.9,10.5,3.6,11.4-0.6c0,0,6.2,2.4,10.7,1.8c2.8-0.3,2.5-3,5.3-3.6l20,17.5
		l3.6-2.6c13.7,3.2,27.5,1.4,41.2-0.6l16.4-14l22.7-0.8l0.2-11.8l-11.7-4l-8.1-17.8l-11.7-9.9c2-3.1-3.5-6.3-6.2-9.4
		c-3.7,1-7.7,0.2-11.9-2l3-3.8l-0.1-5.5l10.7-0.2c2.1-1.3,4.3-1.9,5.9-5.2L887.2,477.4z"/>
	<path id="c-249" class="st0" d="M917.4,258.6l-44.9,0.5l-0.9,4.3l-8.5,1l-4.1-4.2l-132.1,4l1.6,33.1c-5.6,0.4-11.4,0.4-16-0.2
		l0.2,10.5l1.5,62.6l-17.9,1l0.2,6.7l-10.2,13l0.7,9.2l-3.4,1.6c-0.3,5.8-1,10.8-3.4,12.4l0.1,7.5l7.5-1.6
		c1.5,8.4,1.9,17.2,8.9,23.6l0.9,5.6l-3.3,0.5c5.6,7,12.2,13.6,15.8,21.6c-6.3,19.4,2.6,16.7,8.1,19.1l0-0.3l14.5-28.4h8h5.5
		l4.5,8.6l6.5-0.6h19.6V462l20.4,0.7l0.2,5.8l9.3-3v-5.7l10.7-3.9l16.2,10.6l17.2-22l-1-13.9l-5.9-4.4h11.4v-5.7l6.5,2.6l6,33.5
		l7.5,2.8l4.5,8.5v11.8l7.7-2.8h0l-0.2-20.4l5-7.5l5.1,0.1l2.5-12.9c6-7.4,8.4-16.9,18.1-22.3l3.1-24.4c-1.8-17.2,3.5-32.1,6-47.9
		c2.5-1,5.3,0.9,7.4-3.9l11.2-5.7c2.2-1.5,2.9-4.9,3.6-8.4c-1.5-3.4-3.7-2.8-5.7-3.2c-3.3-6.3-8.8-6.9-13.5-9.3l-6.6-40.1l-5.2-5.6
		L917.4,258.6z"/>
	<path id="c-27" class="st0" d="M587,1119.2l26.8,54l0.4,12.3c-1.4,3-3.6,3.1-6.1,2.6c-1,1.4-2,3.3,0.3,4.6
		c3.3,5.9,5.7,13.1,10,18.1c3.5,4.2,8.6,6.3,12.7,9.9l10.7,0.9c2.2-1.5,0.2-3.6,8.1-4.4l15.6-0.1c4.9-1.9-0.6-6.8,15.5-5.6
		c2.6,0.3,3.8,3.2,7.9,1c7.5-1.2,14.6,1.6,21.9,2.7c2.2-1.7,1.4-4.7,13.5-2.3l1.2-4.7l14.2,0.2l84.1-78.2c13.3-5.5,16.3-21.7,20-37
		l-10.6-0.7c-0.1-1.3-10.1,5.9-11.4,6c-5.4,0.6-8.6-1.1-7.8-10.6c0.6-7.1,8.2-12.7,10.2-14c2.7-1.7,5.3,4.8,8,3.1
		c0,0-0.9-30.1-2.1-55.3c-5.7-3.4-9.7-9.4-19.8-6c-5.3-4-10.6-3.6-15.9-4.8l-58.2,46.2l-2.1,9.6c-6.6,3.5-13.2,3-19.8,3.7
		c-5-3.8-10.4-6.1-16.3-6.4l-9.7,8.5c-0.9,4.7-3.6,5.1-5.7,7.1c-3.3,1.9-5,4.4-5.7,7.1c-9.8,2.4-16.6,0.8-23-1.4
		c1.2-5.7,4.9-9.4,1.8-18.7l-13.5-15.1l-1.8,65c-4.1,1.8-8.2,4.5-12.3,8.4c-6.8-0.6-12.5-1.5-22,0.2
		C604.6,1117.8,598.1,1106,587,1119.2z"/>
	<path id="c-268" class="st0" d="M832.3,1077.5l0.8,14.7c-4.4,2.2-7.7,4.4-11.4,6.6c-4.1-0.1-6.7-1.2-7.4-4.5
		c-1-5.2-0.4-8.8,2.5-13.2c2.1-3.2,5.9-7.2,8.5-7.7c1.3-0.2,3.3,1.8,4.4,3.4L832.3,1077.5z"/>
	<path id="c-255" class="st0" d="M879.5,644.1l-6.1,9l-46,0.8l7.5,15.5c-11.9,12-4.3,14.3-1.5,18.9c-5.2,9.7-9.2,21.6-19.6,22
		c-2.6,0.7-4.5,0-5,3.2c-1.1,7.5,2.2,23.2,5.2,32.2c3.1,7,8.6,11.7,11.6,17.5c2.7,4,3.4,8.1,4.7,12.1l6.4,7.2
		c2.7-0.8,5.7-0.1,9.9,6.9l19.2,6.3c4.1,3.8,10.7,4.9,17.1,6l10,33.1l18.8,0.5c3.2-2,6.5-1.9,9.7,2.4c7-1.1,13.2-2.9,22.4-1.8
		c2.9-3.1,6.5-5.4,12.5-5.1c7.2,5.7,27.8-5.9,36.6-11.7c-2.2-3.9-6.1-6-9.8-8.4c0.3-4.4-1.5-9.3-3.1-14.1c-1.9-2.9-3.3-5.8-2.1-7.9
		l-4.4-9.5l2.7-0.9c-0.7-7.3-0.7-14.1,3.7-18.6c-3-6.1-13.1-11-12.5-18.3l8.6-24.3l-22.9-15.2l-3.8-13.5L879.5,644.1z"/>
	<path id="c-228" class="st0" d="M331.9,534.5l11.9-3.4l-7.9-62c-1-4.7-5.7-6.8-9.3-9.7l1.9-10.1l-14.1-1.8
		c-2.6,5.3-1.2,10.3,5.1,15c5.1,21,4.5,41.2,6.1,61.7L331.9,534.5z"/>
	<path id="c-216" class="st0" d="M495.5,10.2c-3,0.1-14.8-6.1-21.5,3.6c0,0-5,2.2-5.3,7.3c-0.4,7.9-1.2,32.5-1.2,32.5
		c-0.8-1.3-6.8-0.3-7.7,3.7c-1.3,5.5-7.4,4-7.9,6.8c-1,5.5,3.9,10.7,9.6,15.6c1.5,1.3-0.5,8.3,0.9,9.6c4.4,3.9,12.2,6.6,12.2,6.6
		c1.8,18.1,5,30.6,5,30.6c1.2,0.7,13.8-3.6,9.5-21.3c-0.5-2.1,25.9-10.6,21.1-27.1c-0.5-1.7-4.8,0.3-5.5-2.8c-1.6-7-1.4-8.7-4-9.8
		c-1.3-0.5-6.9,4.8-8,4.1c-2.5-1.5-5.6-5-4.3-6.8c2.3-3,19.2-13.4,19.3-19.2c0.3-8.6-2.9-9.4-7.1-11.7c-2.4-1.3-1.5-5.3-0.8-7.7
		c0.5-1.4,9.6-4.5,8.5-7.8c-0.7-2.2-2-2.6-2.5-4.3c-0.4-1.3-7.2,5.9-7.7,4.8C497.2,14.1,496.9,12.3,495.5,10.2z"/>
	<path id="c-235" class="st0" d="M712.4,307.8l-130.2-64.1l-17.2,5.2c1.2,10.2,0.3,18.1,0.5,24.3c0.3,9.1,6.6,15.5,15.3,18.6
		l-3.9,9.4l-5.5,50.3l-27.2,29.9c-0.9,1.7-1.3,3.4-1.2,5.1c-0.9,1.9-2,2.8-3.1,3.3c-1.9,1.2-1,3.2-1.2,4.6
		c-1.6,10.6,20.6,26.3,20.6,26.3c1.1,4.8,2.8,9,3.7,14.1c0.9,5.4-1.8,12-1,16.7c1.1,6.9,8.7,7.5,7.7,18l-17.4-1.6
		c-5.1,10.1-1.5,16.7,10.9,19.6l8.2,24.5c13.2-3,22.5-1.4,39.7-9.2l15.7-1.6c2.9-4.9,9-7.6,6.9-16.1l21.7-2.4c1.7-1.6,2.5-4,5.3-4.6
		c4.3-0.1,5.5-2.9,6.6-5.8c2-4.7,7-6.4,10.7-9.3c0.7-15.5,12.4-11.1,19.5-14l-0.9-5.4c-4.1-4.5-7.6-9.5-8.9-23.7l-7.6,1.4l-0.2-6.9
		c2.3-2.5,4-8.4,3.4-12.6l3.5-1.7l-0.9-9l10.5-13.4l-0.3-6.6l18.1-1L712.4,307.8z"/>
	<path id="c-256" class="st0" d="M833.7,575l3.3-2.5c13.3,3.4,27.1,1.4,41-0.5l8.3-6.9c4.7,2.8,8.2,7.5,8.9,17.4l8,6.4v19.4
		l-29.7,44.7l-46.3,0.9l-7.1,5.7l-2.8,0.1l-1.6-2.1l1.1-27.6l10.4-15.7l16.5-14.8l-10-6.3L833.7,575L833.7,575z"/>
	<path id="c-212" class="st0" d="M116.5,262.9c2.1-14.7-7.1-35.4,21.5-35.9l6-44.4l50.9,4.5l3.9-30l-68.1-5
		c-6.3,9.7-10,17.9-19.5,21.7c-9,3.6-12.5,14.7-15.1,24.3l-26.8,30.7c-1,7-5,11.6-10.4,15.2c-4.9,6.4-7.9,14.4-8.6,21.4l6.8-6.2
		L116.5,262.9z"/>
	<path id="c-236" class="st0" d="M571.4,512L556,537.2l2.1,18.3c6.6,12.9,14.2,24.8,24.5,34.5c6.3-7.1,9.1-12.5,21.7-15.7l10.9,4.8
		l12.3-3.4c3-3.5,2.8-9.1,3-14.4c4.2-6.9,8.7-10.5,13.3-13.7c3.4,2.6,9.4,0.6,9.8,8.4c4,4.5,7.8,7.2,10.7,3c3.4,5,17.8,3.4,27.7,4.5
		c0.6-1.9,1.6-4.3,3.7-8c3.3-0.5,6.3-1.8,11.4,1.9L728,550l1.4,3.1l8.4-1.3l-0.1-3.1l18.5-1.5l4.1,5.3l1.9-2.9l3.2,2.3l2.7-3.1
		l8.6-0.3c-1.8-4.9-1-10.7-14.1-13.8l-6.7-13.7c-6.7-6.5-18.7-9.4-19.6-19.8l-5.2-5c-4.4,0.2-8.2,2.1-13.1-5.8
		c-7.9-1.2-13.2-2.4-8.1-18.4c-4-9.8-10.2-14.4-15.6-21.9c-11.3,2.2-15.8,1.6-16.2,13.3c-3.6,2.9-8.9,4.3-10.5,8.8
		c-1.4,3.3-2.6,5.9-7.6,6.3c-1.4,0.9-3.2,2.7-5,4.7l-21.4,2.2c1.1,4,0.7,7.7-3.9,12.2c-1.2,1.2-2.1,2.7-3.3,4l-15.4,1.4
		C593.1,510.7,584.2,509,571.4,512z"/>
	<path id="c-266" class="st0" d="M778.1,1147.4c-1.2,0.1-3.3,0.5-4.8,1.1c-1.1,0.4-2.1,0.9-2.9,1.7c-0.7,0.7-0.9,1.7-1.1,2.5
		c-0.2,0.9-2.1,2.1-2.8,2.3c-1,0.3-2.4,0-3.5,0c-2.1,0-3.2-0.5-4.4-2.1c-1.5-2-3.5-3.6-4.8-5.9c-1-1.6-1.8-2.6-2.4-4.3
		c-0.4-1.3-0.3-2.7-0.3-4c0-1.7,0.8-3.3,2.3-4c0.2-0.1,0.4-0.2,0.5-0.3c1.8-0.9,2.2-2.9,3.5-4.2c1.4-1.4,3.3-2.7,4.8-4
		c1-0.8,2.4-1.6,3.5-2.1c1.7-0.8,3.3-1.3,5.1-1.7c1.3-0.3,2.9-0.8,4-1.1c0.2-0.1,0.4-0.1,0.7-0.1c0.2,0,0.4-0.1,0.7-0.1
		c1.6-0.3,3.6,0.5,4.4,1.6c1.2,1.6,2.6,3.1,3.8,4.6c0.6,0.8,0.6,2.7,1.1,3.8c0.7,1.5,1.6,2.6,2.1,4.2c0.5,1.6-0.2,3.3-0.9,4.7
		c-0.8,1.7-2,2.6-3.2,3.9c-1,1-2.1,1.9-3.2,2.7C779.5,1146.8,778.7,1147,778.1,1147.4z"/>
</g>
</svg>`;