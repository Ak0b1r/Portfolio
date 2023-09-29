import React from 'react'
import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'
import avatar from '../../images/avatar.JPG'
import styles from './intro.module.scss'
import { Link } from 'react-router-dom'

function Intro() {
    return (
        <div className={styles.intro}>
            <Link to={'/'}>
                <h3 className={styles.intro__title}><span>A</span>kobir</h3>
            </Link>
            <div className={styles.intro__box}>
                <img className={styles.intro__img} src={avatar} alt="avatar" />
                <div className={styles.intro__texts}>
                    <p className={styles.intro__origin}>I live in Tashkent</p>
                    <p className={styles.intro__work}>Junior Frontend Developer</p>
                </div>
                <div className={styles.intro__socials}>
                    <a className={styles.intro__link} href="https://t.me/akobirkhoja"><FaTelegram /></a>
                    <a className={styles.intro__link} href="https://instagram.com/ak0b1r_?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D"><FaInstagram /></a>
                    <a className={styles.intro__link} href="https://github.com/Ak0b1r"><FaGithub /></a>
                </div>
            </div>
            <Link to={'/contact'} className={styles.intro__link}>
                <button className={styles.intro__btn}>Contact  Me !</button>
            </Link>
        </div>
    )
}

export default Intro