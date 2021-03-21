import Link from 'next/link'
import Layout from '../components/layout'
import Footer from './footer'
import Header from './header'

export default function Summarizer() {
  return (
    <Layout>
      <main>
        <Header/>
        <textarea 
          className="text-area"
          defaultValue="Hello, I'm a little computer. I have some important work to do. It's very important that you don't touch me, because I am doing very important work. What kind of work do you want me to do? You want me to write your name? OK, what's your name? What's your name? OK, I'll write your name."
        />
        <br></br>
        <Link href="/">
          <button className="btn">Try again</button>
        </Link>
        <div className="footer">
          <Footer/>
        </div>
      </main>
    </Layout>
  )
}