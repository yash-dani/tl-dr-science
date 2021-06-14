import React, { useState } from 'react'
import NProgress from 'nprogress'
import axios from 'axios'
import styles from './form.module.css'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import { useResponses } from './ResponseProvider'

export default function Form() {
  const { handleResponseAdd } = useResponses()
  const limit = 2000
  const [content, setContent] = useState<string>('')
  const [result, setResult] = useState<string>('')

  async function onSubmit() {
    NProgress.start()

    let interval = setInterval(
      function(){
        NProgress.inc()
      }, 1000)

    const res = await axios({
      method: 'post',
      url: 'https://tldrbackend.daniyash19.workers.dev/get_response',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        abstract: content
      },
    }).catch((err) => null)

    if (res) {
      setResult(res.data.summary)
      const newResponse = {
        id: uuidv4(),
        input: content,
        response: res.data.summary
      }
      handleResponseAdd(newResponse)
      console.log('result', result)
    } else {
      setResult('Something went wrong.')
    }
    clearInterval(interval)
    NProgress.done()
  }

  function startOver(){
    setContent('')
    setResult('')
  }

  return (
    <div className={styles.container}>
      { result
        ?
        <div className={styles.textAreaContainer}>
          <div>
            <div className={styles.result}>{result}</div>
          </div>

          <button
            className="btn btn-secondary"
            onClick={() => startOver()}
          >
            Start over
          </button>
          <button
            className="btn"
            onClick={() => onSubmit()}
          >
            Try again
          </button>
        </div>
        :
        <div className={styles.textAreaContainer}>
          <textarea
            className={styles.textArea}
            onChange={e => setContent(e.target.value)}
            placeholder="Enter some science 🧬"
            value={content}
          />
          <div className={styles.charCounter}>
            {content ? content.length : 0}/{limit}
          </div>
          <br></br>
          <button
            className="btn"
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </div>
      }
      <div className={styles.history}>
        <Link href="/history">
          View history
        </Link>
      </div>
    </div>
  )
}