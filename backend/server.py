import os, sys
from flask import Flask, Response, request, send_file
import json
from unidecode import unidecode

app = Flask(__name__)
@app.route('/')
def respond():
	return send_file("../frontend/login.html")
@app.route('/coordinator/')
def send_coord():
	return send_file("../frontend/index.html")
@app.route('/img/<image_name>')
def sendImage(image_name):
	return send_file("../frontend/img/"+image_name)
@app.route('/js/<script_name>')
def sendScript(script_name):
	return send_file("../frontend/js/"+script_name)
@app.route('/css/<css_name>')
def sendCss(css_name):
	return send_file("../frontend/css/"+css_name)

@app.route('/data')
def sendData():
	myData = {}
	data_file = open("Questions")
	lines = data_file.readlines()
	for i, line in enumerate(lines):
		try:
			if("(" in line and ")" in line and "+" in line):
				countryCode = line[line.index("+")+1:line.index(")")]
				myData[countryCode] = {}
				for topic in range(1, 6):
					myData[countryCode][topic] = {}
					for difficulty in range(1, 6):
						myData[countryCode][topic] = {}
						for difficulty in range(1, 4):
							myData[countryCode][topic][difficulty] = {}
							qNumber = i + (topic -1 )*4 + 1 + difficulty
							qLine = unidecode(lines[qNumber])
							qLine = qLine[:-1]

							#Get the question content
							qData = qLine[qLine.index(":")+1: qLine.index("?")+1]
							myData[countryCode][topic][difficulty]['question'] = qData

							#Get the correct answer
							correct = qLine[qLine.index("?")+1:].split(",")[0]
							myData[countryCode][topic][difficulty]['correct'] = correct.strip()
							#Get alternate answers
							qAnswers = sorted(qLine[qLine.index("?")+1:].split(","))

							qAnswers = list(filter(lambda a: a!= "", qAnswers))
							myData[countryCode][topic][difficulty]['answers'] = {}
							for j, answer in enumerate(qAnswers):
								myData[countryCode][topic][difficulty]['answers'][j+1] = answer.strip()
		except :
			pass
	data_file.close()
	myJson = json.dumps(myData, sort_keys=True, indent=4)
	response = Response(myJson)
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response
@app.route('/addteam', methods=['POST'])
def addteam():
	if request.method == 'POST':
		username = request.args.get('name')
		team = request.args.get('team')
		#add team code
		

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=5064, debug=True)


