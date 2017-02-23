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
				countryCode = line[line.index("+")+1:]
				countryCode =countryCode[:countryCode.index(")")]
				myData[countryCode] = {}
				for topic in range(1, 6):
					myData[countryCode][topic] = {}
					for difficulty in range(1, 6):
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
						myData[countryCode][topic][difficulty]["id"] = int(countryCode)*100 + int(topic) * 10 + int(difficulty)
						myData[countryCode][topic][difficulty]["valid"] = True
						myData[countryCode][topic][difficulty]['answers'] = {}
						for j, answer in enumerate(qAnswers):
							myData[countryCode][topic][difficulty]['answers'][j+1] = answer.strip()
		except :
			pass
	data_file.close()
	myJson = json.dumps(myData, sort_keys=True, indent=4)
	with open("data.json", "w") as my_file:
		my_file.write(myJson)

	response = Response(myJson)
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response
@app.route('/view-answer')
def viewAnswer():
	with open("current.json", 'r') as my_file:
		data = json.load(my_file)
	myJson = json.dumps(data, sort_keys=True, indent=4)
	response = Response(myJson)
	response.headers.add('Access-Control-Allow-Origin', "*")
	return response
@app.route('/getcountry')
def sendCountry():
	countryCode = request.args.get('code')
	with open("data.json", "r") as my_file:
		data = json.load(my_file)
	myJson = json.dumps(data[str(countryCode)], sort_keys=True)
	response = Response(myJson)
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response
@app.route('/setquestion', methods=['POST'])
def setQuestion():
	if request.method == 'POST':
		with open("current.json", "r") as my_file:
			data = json.load(my_file)
		data["id"] = request.args.get('id')
		data["team"] = "mit"
		#data["team"] = request.args.get('team')


		questionId = int(data["id"])
		difficulty = questionId % 10
		topic = (questionId//10)%10
		countryCode = questionId//100

		with open("data.json") as my_file:
			allData= json.load(my_file)
		correct = allData[str(countryCode)][str(topic)][str(difficulty)]["correct"]
		for i in allData[str(countryCode)][str(topic)][str(difficulty)]["answers"].keys():
			if allData[str(countryCode)][str(topic)][str(difficulty)]["answers"][i] == correct:
				data["correct"] = i

		os.remove("current.json")
		with open("current.json", "w") as my_file:
			json.dump(data, my_file, indent=4)
		response_data = {"response":"Question set to "+str(request.args.get("id"))}
		myJson = json.dumps(response_data, sort_keys=True)
		response = Response(myJson)
		response.headers.add("Add-Control-Allow-Origin", "*")
		return response
@app.route('/getcurrentquestion', methods=['GET'])
def sendQuestion():
	with open("current.json", "r") as my_file:
		data = json.load(my_file)
	qId = data["id"]
	qId = int(qId)
	difficulty = qId%10
	topic = (qId//10)%10
	countryCode = qId//100

	with open("data.json", "r") as my_file:
	    data = json.load(my_file)
	myJson = data[str(countryCode)][str(topic)][str(difficulty)]
	myJson = json.dumps(myJson, sort_keys=True)
	response = Response(myJson)
	response.headers.add("Add-Control-Allow-Origin", "*")
	data[str(countryCode)][str(topic)][str(difficulty)]["valid"] = False
	with open("data.json", "w") as my_file:
		json.dump(data, my_file, indent=4)
	return response
@app.route('/addteam', methods=['POST'])
def addteam():
	if request.method == 'POST':
		team = request.args.get('team')
		with open("teams.json", "r") as my_file:
			data = json.load(my_file)
			data[team] = {}
		os.remove("teams.json")
		with open("teams.json", "w") as my_file:
			json.dump(data, my_file, indent=4)
		response_data = {"response": "Your team has been saved"}
		myJson = json.dumps(response_data, sort_keys=True)
		response = Response(myJson)
		response.headers.add("Access-Control-Allow-Origin", "*")
		return response
@app.route('/savepoints', methods=['POST'])
def savepoints():
	if request.method =='POST':
		team = request.args.get('team')
		points = request.args.get('points')
		points = int(points)
		questionId = request.args.get('id')
		answer = request.args.get('answer')

		with open("current.json", "r") as my_file:
			data = json.load(my_file)
		data["answer"] = answer

		os.remove("current.json")
		with open("current.json", "w") as my_file:
			json.dump(data, my_file, indent=4)

		with open("teams.json", "r") as my_file:
			data = json.load(my_file)
			if not question in data[team].keys():
				data[team][questionId] = points
			else:
				response_data={"response":"Failure: Question already answered"}
				myJson = json.dumps(response_data, sort_keys=True)
				response = Response(myJson)
				return response
		os.remove("teams.json")
		with open("teams.json", "w") as my_file:
			json.dump(data, my_file, indent=4)
		response_data={"response":"Success: your answer was recorded"}
		myJson = json.dumps(response_data, sort_keys=True)
		response = Response(myJson)
		response.headers.add("Access-Control-Allow-Origin", "*")
		return response
@app.route('/statistics')
def getstats():
	with open("teams.json", "r") as my_file:
		data = json.load(my_file)
	results = {}
	for team in data.keys():
		results[team] = 0
		for question in data[team].keys():
			point = data[team][question]
			point  = int(question)
			results[team] = results[team] + point
	response = Response(json.dumps(results, sort_keys=True))
	response.headers.add("Access-Control-Allow-Origin", "*")
	return response
if __name__ == "__main__":
	app.run(host='0.0.0.0', port=5064, debug=True)
