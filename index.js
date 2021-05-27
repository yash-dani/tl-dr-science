const Router = require('./router')
const PromptGenerator = require('./gpt3/promptGenerator')


/** CORS AND API REQUEST RELATED METHODS **/

// from https://community.cloudflare.com/t/handling-preflight-requests/30260/4
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
}

const responseAttrs = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    },
}


addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})


// Manages CORS headers
function handleOptions(request) {
    if (
        request.headers.get('Origin') !== null &&
        request.headers.get('Access-Control-Request-Method') !== null &&
        request.headers.get('Access-Control-Request-Headers') !== null
    ) {
        // Handle CORS pre-flight request.
        return new Response(null, {
            headers: corsHeaders,
        })
    } else {
        // Handle standard OPTIONS request.
        return new Response(null, {
            headers: {
                Allow: 'GET, HEAD, POST, OPTIONS',
            },
        })
    }
}

/** END CORS AND API REQUEST RELATED METHODS **/


const openaiRequest = payload => {
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_KEY}`,
        },
        body: JSON.stringify(payload),
    }

    return fetch(
        'https://api.openai.com/v1/engines/davinci/completions',
        request
    )
}

function getResponseErrors(body) {
    const errorMessage = 'Your abstract was empty. Please try again. I do not understand.';
    if (!body.abstract) {
        var status = { "status" : 400};
        return new Response(JSON.stringify(errorMessage), status)
    }

    if (body.abstract == '') {
        return new Response(JSON.stringify(errorMessage), responseAttrs)
    }

    return null;
}

async function getResponse(request) {
    const body = await request.json()

    errors = getResponseErrors(body);

    if (errors) {
        return errors;
    }

    const promptStart = 'My second grader asked me what this passage means:\n\n"""'
    const promptEnd = '\n"""\n\nI rephrased it for him, in plain language a second grader can understand:\n\n"""'

    const prompt = promptStart + body.abstract + promptEnd; 

    const payload = {
        prompt: prompt + "\n",
        temperature: 0.6,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0,
        stop: ['"""']
    }

    const summary = await (await openaiRequest(payload)).json();
    summarizedAbstract = summary.choices[0].text.replaceAll("\n", "");
    summarizedAbstract = summarizedAbstract.replace(/(?<=\.)[^.]*$"/,"")

    finalObject = { 
        'summary' : summarizedAbstract
    }

    return new Response(JSON.stringify(finalObject), responseAttrs)
    //return new Response(JSON.stringify(summarizedAbstract), responseAttrs)
}

async function handleRequest(request) {
    if (request.method === 'OPTIONS') {
        return handleOptions(request)
    }

    const r = new Router()

    r.post('.*/get_prompt', request => getPrompt(request))
    r.post('.*/get_response', request => getResponse(request))

    r.get('/', () => new Response('Hello! Good to see you.')) // return a default message for the root route

    const resp = await r.route(request)
    return resp
}
