import Link from 'next/link'

export default function Footer() {
  return (
    <div className="footer-text">
      Powered by GPT-3. Results may not be perfect.
      <br/>
      Made with{' '} 
      <span className="heart">&#10084;&#65039;</span>
      by{' '}
      <Link href="https://twitter.com/itsyashdani">
        Yash 
      </Link> 
      {''} & {''} 
      <Link href="https://twitter.com/cindywu">
        Cindy
      </Link>
      .
      <br/>
      Follow{' '}  
      <Link href="https://twitter.com/tldrpapers">
        @tldrpapers
      </Link>
      {' '} to see trending papers summarized.
      <p className="disclaimer">
        This site is protected by reCAPTCHA and the Google{' '}
        <Link href="https://policies.google.com/privacy">
          Privacy Policy
        </Link>
        {' '}and{' '}
        <Link href="https://policies.google.com/terms">
          Terms of Service
        </Link>
        {' '}apply. Max 50 summaries a day, contact us for more.
      </p>
    </div>
  )
}