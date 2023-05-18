import { useSelector } from 'react-redux'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

import { Helmet } from 'react-helmet'
import styles from './style.module.css'

const Footer = () => {
  const language = useSelector(state => state.isArabic)

  return (
    <div className={styles.footer}>
      <Helmet>
        <title>Your Website Title</title>
        <meta name='description' content='Your website description' />
        {/* Add other necessary SEO tags */}
      </Helmet>
      <div className={styles['social-media-links']}>
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
          <FaInstagram className={styles['social-media-icon']} />
        </a>
      </div>
      <div className={styles['footer-info']}>
        <p>
          {language === 'arabic'
            ? 'جميع الحقوق محفوظة © 2023 مطعم نهواند.'
            : '&copy; 2023 Nahawand Restaurant. All rights reserved.'}
        </p>
      </div>
    </div>
  )
}

export default Footer
