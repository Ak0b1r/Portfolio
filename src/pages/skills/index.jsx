import React from 'react'
import {FaReact, FaHtml5, FaCss3Alt, FaBootstrap} from 'react-icons/fa'
import {SiJavascript, SiSass} from 'react-icons/si'
import styles from './skills.module.scss'

function Skills() {
  return (
    <div className={styles.skills}>
      <h1 className={styles.skills__title}>My <span>Skills</span></h1>
      <div className={styles.skills__block}>
        <div className={styles.skills__box}>
          <div className={styles.skills__info}>
            <span className={styles.skills__icon}><FaHtml5 /></span>
            <p className={styles.skills__progress}>90%</p>
          </div>
          <p className={styles.skills__text}>HTML</p>
        </div>
        <div className={styles.skills__box}>
          <div className={styles.skills__info}>
            <span className={styles.skills__icon}><FaCss3Alt /></span>
            <p className={styles.skills__progress}>85%</p>
          </div>
          <p className={styles.skills__text}>CSS</p>
        </div>
        <div className={styles.skills__box}>
          <div className={styles.skills__info}>
            <span className={styles.skills__icon}><SiJavascript /></span>
            <p className={styles.skills__progress}>70%</p>
          </div>
          <p className={styles.skills__text}>JavaScript</p>
        </div>
        <div className={styles.skills__box}>
          <div className={styles.skills__info}>
            <span className={styles.skills__icon}><FaReact /></span>
            <p className={styles.skills__progress}>70%</p>
          </div>
          <p className={styles.skills__text}>React</p>
        </div>
        <div className={styles.skills__box}>
          <div className={styles.skills__info}>
            <span className={styles.skills__icon}><SiSass /></span>
            <p className={styles.skills__progress}>80%</p>
          </div>
          <p className={styles.skills__text}>SASS</p>
        </div>
        <div className={styles.skills__box}>
          <div className={styles.skills__info}>
            <span className={styles.skills__icon}><FaBootstrap /></span>
            <p className={styles.skills__progress}>80%</p>
          </div>
          <p className={styles.skills__text}>Bootstrap</p>
        </div>
      </div>
    </div>
  )
}

export default Skills