const generatePreamble = (adjectives, experiences) => {
    const result = []

    result.push(
        'The following are responses to hackathon application questions from a student who is: '
    )
    result.push(adjectives.join(', '))
    result.push('. Their experiences include being ')
    result.push(experiences.join(', '))
    result.push('.')

    return result.join('')
}

const generateQA = pairs => {
    if (!pairs.length) {
        return ''
    }

    const result = []
    for (const pair of pairs) {
        result.push('###')
        result.push(`Question: ${pair.question}`)
        result.push(`Answer: ${pair.answer}`)
    }

    return result.join('\n')
}

const generatePrompt = (adjectives, experiences, QApairs, question) => {
    const preamble = generatePreamble(adjectives, experiences)
    const qa = generateQA(QApairs)

    const result = preamble + '\n' + qa

    if (!qa) {
        return preamble + question
    }

    return preamble + '\n' + qa + '\n' + question
}

module.exports = {
    generatePrompt,
}
