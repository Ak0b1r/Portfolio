import React from 'react'
import { MdSlideshow } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ciniphile from '../../images/ciniphile.png';
import openshop from '../../images/openshop.png';
import totembo from '../../images/totembo.png';
import todolist from '../../images/todolist.png';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from './project.module.scss'

function Project() {
  return (
    <div className={styles.project}>
      <h1 className={styles.project__title}>Featured <span>Projects</span></h1>
      <p className={styles.project__text}>Here's my latest project built with React.js and Laravel, using Bootstrap 5 on the front-end. Watch the video to see the responsive landing page in action!</p>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className={styles.project__swiper}
      >
        <SwiperSlide className={styles.project__slide}>
          <img src={ciniphile} alt='project' className={styles.project__image} />
          <div className={styles.project__box}>
            <a href="https://ciniphile-website.netlify.app/" className={styles.project__link}><MdSlideshow /></a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.project__slide}>
          <img src={openshop} alt='project' className={styles.project__image} />
          <div className={styles.project__box}>
            <a href="https://ak0b1r.github.io/OpenShop/" className={styles.project__link}><MdSlideshow /></a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.project__slide}>
          <img src={totembo} alt='project' className={styles.project__image} />
          <div className={styles.project__box}>
            <a href="https://ak0b1r.github.io/Totembo/" className={styles.project__link}><MdSlideshow /></a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.project__slide}>
          <img src={todolist} alt='project' className={styles.project__image} />
          <div className={styles.project__box}>
            <a href="https://todo-list-web-app1.netlify.app/" className={styles.project__link}><MdSlideshow /></a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Project