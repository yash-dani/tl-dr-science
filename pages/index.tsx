import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/Header'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>tl;dr papers</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@tldrpapers" />
        <meta name="twitter:title" content="tl;dr papers" />
        <meta name="twitter:image" content="https://i.imgur.com/o3S9ZOQ.png"/>
        <meta name="twitter:text:title" content="tl;dr papers" />
        <meta name="twitter:description" content="science abstracts for second graders. written by AI." />
        {/* Search Engine */}
        <meta name="description" content="science abstracts for second graders. written by AI."/>
        <meta name="image" content="https://i.imgur.com/o3S9ZOQ.png"/>
        {/* Schema.org for Google */}
        <meta itemProp="name" content="tl;dr papers"/>
        <meta itemProp="description" content="science abstracts for second graders. written by AI."/>
        <meta itemProp="image" content="https://i.imgur.com/o3S9ZOQ.png"/>
        {/* Open Graph general (Facebook, Pinterest & Google+) */}
        <meta name="og:title" content="tl;dr papers"/>
        <meta name="og:description" content="science abstracts for second graders. written by AI."/>
        <meta name="og:image" content="https://i.imgur.com/o3S9ZOQ.png"/>
        <meta name="og:url" content="https://tldrpapers.com"/>
        <meta name="og:site_name" content="tl;dr papers"/>
        <meta name="og:type" content="website"/>
      </Head>
      <Header/>
      <Form />
      <Footer/>
    </Layout>
  )
}
