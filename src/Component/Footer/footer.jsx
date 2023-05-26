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
  const pageTitle =
    language === 'arabic'
      ? ' نهاوند بيت المشاوي - Nahawand'
      : 'Nahawand - بيت المشاوي'
  const siteDescription =
    'اختيار الشيف، سلطات طازجة بيت المشاوي، مشويات، مشاوي، أفضل مطعم، ريش غنم، اكل مصري، اكل لبناني، برياني هندي، مقبلات لبناني، باستا ايطالية، مشاوي شامية، مشاوي تركية، مانتو روز، كارديو كافيه لحوم بلدية، دجاج طازج'

  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name='description' content={siteDescription} />
        <meta
          name='keywords'
          content='restaurant, food, menu, chef, delivery'
        />
        <meta
          name='address'
          content='الخبر السعودية، شارع حي العليا - شارع فراس بن النضر'
        />
        <meta name='keywords' content='مطعم، طعام، قائمة طعام، شيف، توصيل' />
        <meta name='author' content='نهاوند بيت المشاوي ' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='canonical' href='https://www.nahawandbbq.com/' />
      </Helmet>
      <footer className={styles.footer}>
        <nav className={styles['social-media-links']}>
          <a
            href={`https://api.whatsapp.com/send?phone=966553104477&text=${encodeURIComponent(
              whatsappText
            )}`}
            className={styles.float}
            target='_blank'
            rel='noreferrer'
          >
            <AiOutlineWhatsApp
              className={`${styles['whatsapp-icon']} `}
              color='#fff'
              size={25}
            />
          </a>
          <a
            href='https://www.facebook.com/ALSHARQ.NAHAWAND/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook
              className={styles['social-media-icon']}
              color='#fff'
              size={25}
            />
          </a>
          <a
            href='https://www.instagram.com/nahawand.rest/?ref=digitaltourbus.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram
              className={`${styles['social-media-icon']} ${styles['instagram-icon']}`}
              color='#fff'
              size={25}
            />
          </a>
          <a
            href='https://www.tiktok.com/@nahawand.restaurant'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTiktok
              className={styles['social-media-icon']}
              color='#fff'
              size={25}
            />
          </a>
        </nav>

        <section className={styles['footer-info']}>
          <div className={styles['work-hours']}>
            <h4 className={styles['work-hours-title']}>ساعات العمل</h4>
            <div className={styles['work-hours-days']}>
              <p className={styles['work-hours-day']}>
                من ١ ظهراً الى ١١ مساءً
              </p>
            </div>
          </div>

          <address className={styles['contact-info']}>
            <div className={styles['contact-info-item']}>
              <AiOutlinePhone
                className={styles['contact-info-icon']}
                size={20}
                color='#fff'
              />
              <p>0553104477</p>
            </div>
            <div className={styles['contact-info-item']}>
              <FaEnvelope
                className={styles['contact-info-icon']}
                size={20}
                color='#fff'
              />
              <p>Info@nahawand.sa.com</p>
            </div>
          </address>
          <section className={styles['location-section']}>
            <div className={styles['location-icon-container']}>
              <FaMapMarkerAlt
                className={styles['location-icon']}
                color='#fff'
                size={20}
              />
            </div>
            <p className={styles['location-address']}>
              حي العليا - شارع فراس بن النضر
            </p>
          </section>
          <p className={styles['footer-text']}>
            {language === 'arabic'
              ? 'جميع الحقوق محفوظة   مطعم نهاوند. © 2023'
              : 'Nahawand Restaurant. All rights reserved © 2023'}
          </p>
        </section>
      </footer>
    </div>
  )
}

export default Footer
