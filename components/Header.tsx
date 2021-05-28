import Image from 'next/image'
import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <Image
        src="/fax-logo.png"
        height={144}
        width={144}
        alt="fax logo"
      />
      <h1 className={styles.title}>tl;dr papers</h1>
      <p className={styles.subTitle}>science abstracts a second grader can understand</p>
    </div>
  )
}