'''
authors: @yash-dani @georgekysaad
date: July 2020
Turn informat statements into requests to update balance sheets using GPT-3 
'''

import ast # standard library
import openai # 3rd party packages
import json

'''
	Function to turn informal request into transactional statement 
'''
def getGPT3(request):

	# setup key and fine tuning data
	key = open("key.txt", "r")
	fineTuneData = open("fineTuneData.txt", "r")
	question = "Q: " + request
	openai.api_key = key.read()

	# request completion from GPT-3
	output = openai.Completion.create(
	  engine="davinci",
	  prompt= fineTuneData.read() + question + "\n",
	  max_tokens=100,
	  temperature=0.4,
	  stop=["Q: ",'\n']	
	) 

	#print(output["choices"][0]["text"])
	return output["choices"][0]["text"]

getGPT3('A second grader asked me what this means: A We report the discovery of a buried, active supermassive black hole in SDSS J085153.64+392611.76, a bulgeless Seyfert 2 (Sy2) galaxy. Keck near-infrared observations reveal a hidden broad line region, allowing for the rare case where strong constraints can be placed on both the black hole mass and bulge component. Using virial mass estimators, we obtain a black hole mass of log( M B H / M ⊙ ) = 6.78 ± 0.50 . This is one of the only Sy2 AGN hosted in a bulgeless galaxy with a virial black hole mass estimate and could provide important constraints on the formation scenarios of the black hole seed population. The lack of a bulge component suggests that the SMBH has grown quiescently, likely caused by secular processes independent of major mergers. In the absence of a detectable bulge component, we find the M B H - M s t e l l a r relation to be more reliable than the M B H - M b u l g e relation. In addition, we detect extended narrow Pa α emission that allows us to create a rotation curve where we see counter-rotating gas within the central kiloparsec (kpc). Possible causes of this counter-rotation include a galactic bar or disruption of the inner gas by a recent fly-by of a companion galaxy. This in turn could have triggered accretion onto the central SMBH in the current AGN phase.')