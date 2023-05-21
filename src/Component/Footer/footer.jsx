import { useSelector } from 'react-redux'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { Helmet } from 'react-helmet'
import styles from './style.module.css'

const Footer = () => {
  const language = useSelector(state => state.isArabic)
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
            href={`https://api.whatsapp.com/send?phone=966 55 310 4477&text=${encodeURIComponent(
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
        </div>
        <div className={styles['footer-info']}>
          <p>
            {language === 'arabic'
              ? 'جميع الحقوق محفوظة   مطعم نهاوند. © 2023'
              : '&copy; 2023 Nahawand Restaurant. All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
