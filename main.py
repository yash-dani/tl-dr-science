from flask import Flask, request, render_template
import os
app = Flask(__name__)
import gpt3
import requests
import json
#from flask_limiter import Limiter
#from flask_limiter.util import get_remote_address
'''
limiter = Limiter(
    app,
    key_func=get_remote_address
)
'''
@app.route('/', methods=['post', 'get'])
#@limiter.exempt
def generate():
    sitekey = "6LcaSboZAAAAACK98x__otD9iW_7KXhSdAXYmT_H"
    message = ''
    if request.method == 'POST':
           if message == '':
              captcha_response = request.form['g-recaptcha-response']
              if is_human(captcha_response):
                if request.form['abstract'] == '':
                    print('true')
                    message = 'Your abstract was empty. Please try again. I do not understand.'
                else:
                    message = gpt3.getGPT3(request.form['abstract'].replace("A:", "").replace("Here this is, made for a 2nd grader:",""))
              else:
                message="You messed up the captcha. If you're a bot, you should probably give up."
           else:
            message = ''
        #print(message)
        
    return render_template('generate.html', message=message, sitekey=sitekey)

def is_human(captcha_response):
    """ Validating recaptcha response from google server.
        Returns True captcha test passed for the submitted form 
        else returns False.
    """
    secret = os.environ.get('secret_key')
    payload = {'response':captcha_response, 'secret':secret}
    response = requests.post("https://www.google.com/recaptcha/api/siteverify", payload)
    response_text = json.loads(response.text)
    return response_text['success']


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)