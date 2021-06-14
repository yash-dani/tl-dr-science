import React from 'react'
import { IResponse } from '../interfaces'
import styles from './response.module.css'

export default function Response(props: IResponse) {
  const {
    input,
    response
  } = props

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        Input:
        <br></br>
        <br></br>
        {input}
      </div>
      <div className={styles.right}>
        Summary:
        <br></br>
        <br></br>
        {response}
      </div>
    </div>
  )
}
