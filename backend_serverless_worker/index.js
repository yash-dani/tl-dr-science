const Router = require('./router')
const PromptGenerator = require('./gpt3/promptGenerator')

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


/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function getResponse(request) {
    const body = await request.json()

    if (!body.abstract) {
        var status = { "status" : 400};
        return new Response(JSON.stringify('Your abstract was empty. Please try again. I do not understand.'), status)

    }

    if (body.abstract == '') {
        return new Response(JSON.stringify('Your abstract was empty. Please try again. I do not understand.'), responseAttrs)
    }

    const prompt = 'My second grader asked me what this passage means:\n\n"""' + 
    body.abstract + 
    ' \n"""\n\nI rephrased it for him, in plain language a second grader can understand:\n\n"""'

    const payload = {
        prompt: prompt + "\n",
        temperature: 0.6,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0,
        stop: ['"""']
    }

    const response = await (await openaiRequest(payload)).json()
    return new Response(JSON.stringify(response.choices[0].text), responseAttrs)
}

async function handleRequest(request) {
    if (request.method === 'OPTIONS') {
        return handleOptions(request)
    }

    const r = new Router()
    // Replace with the appropriate paths and handlers
    r.post('.*/get_prompt', request => getPrompt(request))
    r.post('.*/get_response', request => getResponse(request))

    r.get('/', () => new Response('Hello Cindy! Good to see you.')) // return a default message for the root route

    const resp = await r.route(request)
    return resp
}
