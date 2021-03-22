import Link from 'next/link'
import Layout from '../components/layout'
import Footer from './footer'
import Header from './header'
import React, { useState } from 'react'
import NProgress from 'nprogress'
import axios from 'axios'


function pause(milliseconds) {
  var dt = new Date();
  while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}

async function onSubmit(abstract, setContent) {
  console.log(abstract);
  // Show the progress bar 
  NProgress.start();

  // Increase randomly
  var interval = setInterval(function() { NProgress.inc(); }, 1000);   
  const res = await axios({
    method: 'post',
    url: 'https://tldr_backend.daniyash19.workers.dev/get_response',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      abstract: abstract
    },
  }).catch((err) => {null});
  if (res) {
    setContent(res.data.summary); 
  } else {
    setContent('Something went wrong.');
  }
  clearInterval(interval);
  NProgress.done();
}
  

export default function Home() {
  const LimitedTextarea = ({ rows, cols, value, limit }) => {
    const [content, setContent] = value ? useState(value.slice(0, limit)) : useState('');
  
    const setFormattedContent = React.useCallback(
      text => {
        setContent(text.slice(0, limit));
      },
      [limit, setContent]
    );


    return (
      <>
        <textarea
          className="text-area"
          rows={rows}
          cols={cols}
          onChange={event => setFormattedContent(event.target.value)}
          placeholder="Enter some science 🧬"
          value={content}
        />
        <div className="char-counter">
          {content ? content.length : 0}/{limit}
        </div>
        <br></br>
        <button className="btn" onClick={() => {onSubmit(content, setContent)}}>Submit</button>
      </>
    )
  }

  return (
    <Layout>
      <main>
        <Header/>
        <LimitedTextarea limit={2000}/>
        <div className="footer">
          <Footer/>
        </div>
      </main>
    </Layout>
  )
}
