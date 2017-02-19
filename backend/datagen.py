from unidecode import unidecode
import json
import os

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
				for difficulty in range(1, 4):
					myData[countryCode][topic][difficulty] = {}
					qNumber = i + (topic -1)*4 + 1 + difficulty
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

					qAnswers = list(filter(lambda a: a != "", qAnswers))
					myData[countryCode][topic][difficulty]['answers'] = {}
					for j, answer in enumerate(qAnswers):
						myData[countryCode][topic][difficulty]['answers'][j+1] = answer.strip()
	except Exception as ex:
		pass
data_file.close()
myJson = json.dumps(myData, sort_keys=True, indent = 4)
print(myJson)