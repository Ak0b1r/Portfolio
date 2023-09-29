import React from 'react'
import {GoHome} from 'react-icons/go'
import {PiUserList} from 'react-icons/pi'
import {SiWheniwork} from 'react-icons/si'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {AiOutlineCode} from 'react-icons/ai'
import {LuMessageSquare} from 'react-icons/lu'
import { Link } from 'react-router-dom'
import styles from './menu.module.scss'

function Menu() {
  return (
    <div className={styles.menu}>
      <Link to='/' className={styles.menu__link}><GoHome /></Link>
      <Link to='/about' className={styles.menu__link}><PiUserList /></Link>
      <Link to='/skills' className={styles.menu__link}><SiWheniwork /></Link>
      <Link to='/job' className={styles.menu__link}><MdOutlineWorkOutline /></Link>
      <Link to='/project' className={styles.menu__link}><AiOutlineCode /></Link>
      <Link to='/contact' className={styles.menu__link}><LuMessageSquare /></Link>
    </div>
  )
}

export default Menu