import { AiFillStar } from 'react-icons/ai'
import styles from './RatingButton.module.css'
import { useSelector } from 'react-redux'

const RatingButton = () => {
  const rating = 4.7 // Average rating

  const { isArabic } = useSelector(state => state.rootReducer)

  const handleRatingClick = () => {
    window.open(
      'https://www.google.com/search?q=%D9%85%D8%B7%D8%B9%D9%85+%D9%86%D9%87%D8%A7%D9%88%D9%86%D8%AF+(+%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D9%88%D9%8A+)%D8%8C+%D8%B4%D8%A7%D8%B1%D8%B9+%D9%81%D8%B1%D8%A7%D8%B3+%D8%A8%D9%86+%D8%A7%D9%84%D9%86%D8%B6%D8%B1%D8%8C+%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%D8%8C+%D8%A7%D9%84%D8%AE%D8%A8%D8%B1+34447%D8%8C+%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9+%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9&rlz=1C1CHBD_enJO1039JO1039&oq=%D9%85%D8%B7%D8%B9%D9%85+%D9%86%D9%87%D8%A7%D9%88%D9%86%D8%AF+(+%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D9%88%D9%8A+)%D8%8C+%D8%B4%D8%A7%D8%B1%D8%B9+%D9%81%D8%B1%D8%A7%D8%B3+%D8%A8%D9%86+%D8%A7%D9%84%D9%86%D8%B6%D8%B1%D8%8C+%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%D8%8C+%D8%A7%D9%84%D8%AE%D8%A8%D8%B1+34447%D8%8C+%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9+%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9&aqs=chrome.0.35i39i355i39i362l3...8j69i60.6596j1j7&sourceid=chrome&ie=UTF-8',
      '_blank'
    )
  }

  const stars = []
  const maxStars = 5

  const filledStars = Math.floor(rating * maxStars) // Round down the value

  for (let i = 0; i < maxStars; i++) {
    if (i < filledStars) {
      stars.push(
        <AiFillStar key={i} icon={AiFillStar} className={styles.filledStar} />
      )
    } else {
      stars.push(
        <AiFillStar key={i} icon={AiFillStar} className={styles.emptyStar} />
      )
    }
  }

  return (
    <>
      <div className={styles.ratingContainer}>
        <div className={styles.ratingStars}>{stars}</div>
        <div className={styles.ratingInfo}>
          <span className={styles.ratingValue}>
            {isArabic
              ? rating.toFixed(1).toLocaleString('ar-EG')
              : rating.toFixed(1)}
          </span>
          <span className={styles.totalRatings}>
            {isArabic === 'arabic' ? ` التقييمات` : ` Ratings`}
          </span>
        </div>
        <button className={styles.addRatingButton} onClick={handleRatingClick}>
          {isArabic === 'arabic'
            ? ' Google أضف تقييمًا على خرائط '
            : 'Add Rating on Google Maps'}
        </button>
      </div>
    </>
  )
}

export default RatingButton
