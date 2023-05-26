import { useSelector } from 'react-redux'
import styles from './style.module.css'
import Spinner from '../../Component/Spinner/spinner'
import offerImage from '../../../public/04.jpg' // Replace with the path to your offer image
import { Helmet } from 'react-helmet'

const HeroImage = () => {
  const { isArabic: language } = useSelector(state => state.rootReducer)

  if (!offerImage) {
    return <Spinner />
  }
  const pageTitle =
    language === 'arabic' ? 'بيت المشاوي - Nahawand' : 'Nahawand - بيت المشاوي'

  const textAlignmentClass = language === 'arabic' ? styles.rtl : styles.ltr

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name='description'
          content=' سلطات طازجة بيت المشاوي ،مشويات ، مشاوي ، افضل مطعم ،  ريش غنم اكل مصري ، اكل لبناني ، برياني هندي ، مقبلات لبناني ، باستا ايطالية ، مشاوي شامية ، مشاوي تركية ، مانتو روز ، كارديو كافيه لحوم بلدية دجاج طازج'
        />
      </Helmet>{' '}
      <div>
        <div className={`${styles.itemContainer} ${textAlignmentClass}`}>
          <div className={styles.itemImageContainer}>
            <img
              src={offerImage}
              alt='Offers'
              className={styles.itemImage}
              loading='lazy' // Add this attribute for lazy-loading
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroImage
