import Layout from '../components/layout'
import Image from 'next/image'

export default function Dog() {
  return (
    <>
      <Image
        src="/science-dog.gif"
        height={360}
        width={480}
        alt="fax logo"
      />
      <p>👀</p>
      <p>making some science</p>
    </>
  )
}