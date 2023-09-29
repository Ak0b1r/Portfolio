import React from 'react'
import styles from './home.module.scss'

function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.home__introduction}>Lets Work <span>Together !</span></h1>
      <h2 className={styles.home__title}>Hi I'm  <span>Akobir</span> , Front-End Developer</h2>
      <p className={styles.home__text}>I derive immense joy from designing and coding beautiful, simple creations. My work is a true passion, characterized by a commitment to elegance and user-friendliness.</p>
    </div>
  )
}

export default Home