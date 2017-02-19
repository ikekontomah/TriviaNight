import json
import os
from pprint import pprint

with open('../Addendum/info.json') as data_file:
	data = json.load(data_file)

for i in data.keys():
	for j in data[i].keys():
		if not os.path.exists("countries/"+i):
			os.makedirs("countries/"+j)