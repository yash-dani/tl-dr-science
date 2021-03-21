import Link from 'next/link'
import Layout from '../components/layout'
import Footer from './footer'
import Header from './header'
import React, { useState } from 'react'


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
      </>
    )
  }

  return (
    <Layout>
      <main>
        <Header/>
        <LimitedTextarea limit={2000}/>
        <br></br>
        <Link href="/summarizer">
          <button className="btn">Submit</button>
        </Link>
        <div className="footer">
          <Footer/>
        </div>
      </main>
    </Layout>
  )
}
