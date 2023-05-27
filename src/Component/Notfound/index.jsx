import styles from './style.module.css'
import Logo from '../../../public/image-003.svg'
import { IoIosArrowBack } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

export default function NotFound () {
  const handleGoBack = () => {
    window.location.href = '/'
  }
  const { isArabic } = useSelector(state => state.rootReducer)
  const pageTitle = 'بيت المشاوي - Nahawand'

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name='description'
          content=' سلطات طازجة بيت المشاوي ،مشويات ، مشاوي ، افضل مطعم ،  ريش غنم اكل مصري ، اكل لبناني ، برياني هندي ، مقبلات لبناني ، باستا ايطالية ، مشاوي شامية ، مشاوي تركية ، مانتو روز ، كارديو كافيه لحوم بلدية دجاج طازج'
        />
      </Helmet>{' '}
      <div className={styles.notfound}>
        <img src={Logo} alt='Logo' className={styles.logo} />
        <h2 className={styles.title}>
          {isArabic ? 'صفحة غير موجودة' : 'Page Not Found'}
        </h2>
        <IoIosArrowBack className={styles.arrow} onClick={handleGoBack} />
        <p>{isArabic ? 'العودة إلى الصفحة الرئيسية' : 'Go back to homepage'}</p>
      </div>
    </>
  )
}
