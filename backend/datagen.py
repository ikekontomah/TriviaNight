import json
import os

myData = {}

data_file = open("Questions", "r")
for line in data_file:
	try:
		if(")" in line and ("(") in line and ("+") in line):
			countryNumber = line[line.index("+")+1:line.index(")")]
			myData[countryNumber] = {}
			for x in range(1, 5):
				myData[countryNumber]
			print(countryNumber)
	except:
		pass