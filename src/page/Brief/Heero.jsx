import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import styles from './style.module.css'
import logo from '../../../public/KHA02275.jpg'

export default function HeroImage () {
  const language = useSelector(state => state.isArabic)

  return (
    <>
      <Helmet>
        <title>Nahwand</title>
        <meta
          name='description'
          content='بيت المشاوي الأعلى تقييمًا - Nahwand | The Highest Rated BBQ Restaurant'
        />
        {/* Add other necessary SEO tags */}
      </Helmet>
      <header style={{ paddingLeft: 0 }}>
        <div
          className={`p-5 text-center bg-image`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: 600,
            loading: 'lazy'
          }}
        >
          <div
            className={`${styles.mask}`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          >
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className={`text-white ${styles.content}`}>
                <p
                  className={`${styles.descriptionArabic}`}
                  dir={language === 'arabic' ? 'rtl' : 'ltr'}
                >
                  {language === 'arabic'
                    ? 'بيت المشاوي... نعدكم بالسعادة'
                    : 'Grills House, we promise you happiness'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
