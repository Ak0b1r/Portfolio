import React from 'react'
import styles from './about.module.scss'

function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.about__introduction}>About <span>Me</span></h1>
      <h2 className={styles.about__title}>I'm someone who finds profound joy in the art of design and <span>coding</span></h2>
      <p className={styles.about__text}>With an unwavering passion for crafting beautiful and simple creations, I pour my heart into every project I undertake. My work is a reflection of my dedication to merging aesthetics with user-centered functionality. With each design and code, I aim to create solutions that not only look pleasing but also make life easier for users. Welcome to my world of elegant simplicity, where every line of code and every pixel hold the essence of my love for what I do.</p>
    </div>
  )
}

export default About