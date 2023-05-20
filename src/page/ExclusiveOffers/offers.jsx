import { useSelector } from 'react-redux'
import styles from './style.module.css'
import Spinner from '../../Component/Spinner/spinner'
import offerImage from '../../../public/offer.jpg' // Replace with the path to your offer image

const Offers = () => {
  const language = useSelector(state => state.isArabic)

  if (!offerImage) {
    return <Spinner />
  }

  const textAlignmentClass = language === 'arabic' ? styles.rtl : styles.ltr

  return (
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
  )
}

export default Offers
