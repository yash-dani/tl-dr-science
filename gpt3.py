'''
authors: @yash-dani @georgekysaad
date: July 2020
Turn informat statements into requests to update balance sheets using GPT-3 
'''

import ast # standard library
import openai # 3rd party packages
import json
import os
'''
	Function to turn informal request into transactional statement 
'''
def getGPT3(request):

	# setup key and fine tuning data
	fineTuneData = open("fineTuneData.txt", "r")
	question = 'My second grader asked me what this passage means:\n\n"""' + request + ' \n"""\n\nI rephrased it for him, in plain language a second grader can understand:\n\n"""'
	openai.api_key = os.environ.get('api_key')

	# request completion from GPT-3
	output = openai.Completion.create(
	  engine="davinci",
	  prompt= question + "\n",
	  max_tokens=100,
	  temperature=0.5,
	  frequency_penalty=0.2,
	  top_p=1,
	  presence_penalty=0,
	  stop=['"""']	
	) 

	#print(output["choices"][0]["text"])
	return output["choices"][0]["text"].replace('A: Here this is, made for a 2nd grader:','')