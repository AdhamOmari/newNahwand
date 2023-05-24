import { useSelector } from 'react-redux'
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaTiktok
} from 'react-icons/fa'
import { AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai'
import { Helmet } from 'react-helmet'
import styles from './style.module.css'

const Footer = () => {
  const { isArabic: language } = useSelector(state => state.rootReducer)
  const whatsappText = language
    ? 'مرحبًا، أرغب في معرفة المزيد عن عناصر القائمة في المطعم ؟'
    : 'Hello, I want to know more about the menu items in the restaurant ?'

  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>Nahwand</title>
        <meta
          name='description'
          content='بيت المشاوي الأعلى تقييمًا - Nahwand | The Highest Rated BBQ Restaurant'
        />
        {/* Add other necessary SEO tags */}
      </Helmet>
      <footer className={styles.footer}>
        <div className={styles['social-media-links']}>
          <a
            href={`https://api.whatsapp.com/send?phone=966553104477&text=${encodeURIComponent(
              whatsappText
            )}`}
            className={styles.float}
            target='_blank'
            rel='noreferrer'
          >
            <AiOutlineWhatsApp
              className={`${styles['whatsapp-icon']} ${styles['my-float']}`}
            />
          </a>
          <a
            href='https://www.facebook.com/ALSHARQ.NAHAWAND/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook className={styles['social-media-icon']} />
          </a>
          <a
            href='https://www.instagram.com/nahawand.rest/?ref=digitaltourbus.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram
              className={styles['social-media-icon']}
              color='orange'
            />
          </a>
          <a
            href='https://www.tiktok.com/@nahawand.restaurant'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTiktok className={styles['social-media-icon']} color='#69C9D0' />
          </a>
        </div>

        <div className={styles['footer-info']}>
          <section className={styles['location-section']}>
            <div className={styles['location-icon-container']}>
              <FaMapMarkerAlt className={styles['location-icon']} />
              <p className={styles['location-address']}>
                حي العليا شارع فراس بن النضر
              </p>
            </div>
          </section>

          <div className={styles['work-hours']}>
            <h4 className={styles['work-hours-title']}>ساعات العمل</h4>
            <div className={styles['work-hours-days']}>
              <p className={styles['work-hours-day']}>
                من ١ ظهراً الى ١١ مساءً
              </p>
            </div>
          </div>

          <div className={styles['contact-info']}>
            <div className={styles['contact-info-item']}>
              <AiOutlinePhone className={styles['contact-info-icon']} />
              <p> 055310447</p>
            </div>
            <div className={styles['contact-info-item']}>
              <FaEnvelope className={styles['contact-info-icon']} />
              <p> Info@nahawand.sa.com</p>
            </div>
          </div>

          <p className={styles['footer-text']}>
            {language === 'arabic'
              ? 'جميع الحقوق محفوظة   مطعم نهاوند. © 2023'
              : 'Nahawand Restaurant. All rights reserved © 2023'}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
