import React, { useState } from 'react'
import NProgress from 'nprogress'
import axios from 'axios'
import styles from './form.module.css'


export default function Form() {
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
      url: 'https://tldr_backend.daniyash19.workers.dev/get_response',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        abstract: content
      },
    }).catch((err) => null)
  
    if (res) {
      setResult(res.data.summary)
      console.log('result', result)
    } else {
      setResult('Something went wrong.')
    }
    clearInterval(interval)
    NProgress.done()
  }

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textArea}
        onChange={e => setContent(e.target.value)}
        placeholder="Enter some science 🧬"
        value={content}
      />
      <div className={styles.charCounter}>
        {content ? content.length : 0}/{limit}
      </div>
      {result &&
         <textarea
          className={styles.textArea}
          onChange={e => setContent(e.target.value)}
          placeholder="Enter some science 🧬"
          value={result}
        />
      }
      <br></br>
      <button 
        className="btn" 
        onClick={() => onSubmit()}
      >
        Submit
      </button>
    </div>
  )
}