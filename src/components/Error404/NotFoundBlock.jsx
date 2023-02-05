import React from 'react'
import styles from './NotFoundBlock.module.css'

export default function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1> Pizzas weren't found</h1>
      <p className={styles.text}>Unfortunately this page is not available in our online-store</p>
    </div>
  )
}
