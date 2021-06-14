import React from 'react'
import Response from './Response'
import { IResponse } from '../interfaces'
import { useResponses } from './ResponseProvider'
import styles from './responseList.module.css'
import Link from 'next/link'

export default function ResponseList() {
  const { responses } = useResponses()

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>History</h1>
        <Link href="/"><a>Go home</a></Link>
      </div>
      {responses.slice(0).reverse().map((response: IResponse) => {
        return (
          <Response
            key={response.id}
            {...response}
          />
        )
      })}
    </div>
  )
}
