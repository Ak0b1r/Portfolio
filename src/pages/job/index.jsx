import React from 'react'
import { HiCode } from 'react-icons/hi'
import styles from './job.module.scss'

function Job() {
  return (
    <div className={styles.job}>
      <h2 className={styles.job__title}>My <span>Specializations</span></h2>
      <div className={styles.job__box}>
        <div className={styles.job__info}>
          <h3 className={styles.job__info_title}>Front end-developer</h3>
          <span className={styles.job__icon}><HiCode /></span>
        </div>
        <p className={styles.job__text}>Front-end is where I weave code and creativity to shape
          captivating and user-centric digital experiences.</p>
      </div>
    </div>
  )
}

export default Job