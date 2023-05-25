import { useSelector } from 'react-redux'
import styles from './style.module.css'
import Spinner from '../../Component/Spinner/spinner'
import offerImage from '../../../public/offer.jpg' // Replace with the path to your offer image

const Offers = () => {
  const { isArabic: language } = useSelector(state => state.rootReducer)

  if (!offerImage) {
    return <Spinner />
  }

  const textAlignmentClass = language === 'arabic' ? styles.rtl : styles.ltr

  return (
    <div>
      <h2 className={`${textAlignmentClass} ${styles.headingClass}`}>العروض</h2>
      {/* Add the heading with the class name */}
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
  )
}

export default Offers
