'''
authors: @yash-dani @georgekysaad
date: July 2020
Turn informat statements into requests to update balance sheets using GPT-3 
'''

import ast # standard library
import openai # 3rd party packages
import json
import os
import re

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
	  max_tokens=150,
	  temperature=0.6,
	  frequency_penalty=0.2,
	  top_p=1,
	  presence_penalty=0,
	  stop=['"""'],
	  n = 8
	) 
	if output["choices"][0]["text"] in request:
		respone = "No"
	else:
		response = openai.Completion.create(
		  engine="davinci",
		  prompt="This is the abstract\n---\nThere are many known species of Bartonella, Gram-negative bacteria that can cause febrile illness and fatality in humans and animals. These pathogens are often transmitted through hematophagous arthropod vectors such as fleas and lice. Despite increasing awareness about Bartonella spp. and their zoonotic potential, as well as existing literature on Bartonella spp. in cervids, little is known about the diversity of Bartonella spp. in white-tailed deer (Odocoileus virginianus) and their associated keds in the southeastern US. We examined the prevalence and diversity of Bartonella spp. in an enclosed herd of white-tailed deer and their ectoparasites, deer keds (Lipoptena mazamae), in Alabama. The overall prevalence of Bartonella infection in this population of deer was 16% (10/63) and 24% (23/96) in keds associated with deer that we sampled. Three species of Bartonella were identified in both deer and their keds: Bartonella bovis, Bartonella schoenbuchensis, and Bartonella sp. 1. Additionally, Bartonella melophagi was detected in white-tailed deer but not in the sampled keds. The detection of four Bartonella species in one population of white-tailed deer, three of which have known zoonotic potential, highlights the importance of Bartonella diversity within host species.\nThis is the summary\n---\nThere are many known species of Bartonella, bacteria that can cause febrile illness and fatality in humans and animals. These pathogens are often transmitted through hematophagous arthropod vectors such as fleas and lice. Despite increasing awareness about Bartonella species and their zoonotic potential, as well as existing literature on Bartonella species in cervids, little is known about the diversity of Bartonella species in white-tailed deer.\nIs this a good summary?\n---\nYes.\n'''\nThis is the abstract\n---\nWe study the settings for which deep con- textual embeddings (e.g., BERT) give large improvements in performance relative to classic pretrained embeddings (e.g., GloVe), and an even simpler baseline—random word embeddings—focusing on the impact of the training set size and the linguistic properties of the task. Surprisingly, we find that both of these simpler baselines can match contextual embeddings on industry-scale data, and often perform within 5 to 10% accuracy (absolute) on benchmark tasks. Furthermore, we iden- tify properties of data for which contextual embeddings give particularly large gains: lan- guage containing complex structure, ambigu- ous word usage, and words unseen in training.\nThis is the summary\n---\nYou know how you can write words in a sentence, like this: I have a dog. And you can write them in another sentence, like this: I have a dog. But the word \"dog\" means something different in the two sentences. So the word \"dog\" is not really a \"dog\", but it's a \"sentence-dog\". It's a dog that lives in sentences.\nIs this a good summary?\n---\nNo.\n'''\nThis is the abstract\n---\n" + request + "\nThis is the summary\n---\n" + output["choices"][0]["text"].replace('A: Here this is, made for a 2nd grader:','') + "\nIs this a good summary?\n---\n",
		  temperature=0.7,
		  max_tokens=2,
		  stop=["'''"]
		)

	summary = output["choices"][0]["text"].replace('A: Here this is, made for a 2nd grader:','')
	#print(summary)
	summary = re.sub("(?<=\.)[^.]*$","",summary)

	#print(output["choices"][0]["text"])
	print([summary, response["choices"][0]["text"]]) 
	return [summary, response["choices"][0]["text"]]