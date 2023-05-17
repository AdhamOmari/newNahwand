import React, { useEffect } from 'react'
import styles from './RatingButton.module.css'
import { useSelector } from 'react-redux'
import logo from '../../../public/logos.png'

const RatingButton = () => {
  const isArabic = useSelector(state => state.isArabic)

  useEffect(() => {}, [isArabic])

  const handleRatingClick = () => {
    window.open(
      'https://www.google.com/search?q=%D9%85%D8%B7%D8%B9%D9%85+%D9%86%D9%87%D8%A7%D9%88%D9%86%D8%AF+(+%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D9%88%D9%8A+)%D8%8C+%D8%B4%D8%A7%D8%B1%D8%B9+%D9%81%D8%B1%D8%A7%D8%B3+%D8%A8%D9%86+%D8%A7%D9%84%D9%86%D8%B6%D8%B1%D8%8C+%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%D8%8C+%D8%A7%D9%84%D8%AE%D8%A8%D8%B1+34447%D8%8C+%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9+%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9&rlz=1C1CHBD_enJO1039JO1039&oq=%D9%85%D8%B7%D8%B9%D9%85+%D9%86%D9%87%D8%A7%D9%88%D9%86%D8%AF+(+%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D9%88%D9%8A+)%D8%8C+%D8%B4%D8%A7%D8%B1%D8%B9+%D9%81%D8%B1%D8%A7%D8%B3+%D8%A8%D9%86+%D8%A7%D9%84%D9%86%D8%B6%D8%B1%D8%8C+%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%D8%8C+%D8%A7%D9%84%D8%AE%D8%A8%D8%B1+34447%D8%8C+%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9+%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9&aqs=chrome..69i57j69i60l3.1853j0j7&sourceid=chrome&ie=UTF-8#',
      '_blank'
    )
  }

  return (
    <div className={styles.ratingButtonContainer}>
      <div className={styles.ratingButtonOverlay}>
        <div className={styles.highestRatedSection}>
          <h2>{isArabic === 'arabic' ? 'ألاعلى تقييم' : 'Highest Rated'}</h2>
          {/* Add your highest rated section content */}
        </div>
        <button className={styles.ratingButton} onClick={handleRatingClick}>
          {isArabic === 'arabic' ? 'قيمنا' : 'Rate Us'}
        </button>
      </div>
      <img src={logo} alt='Restaurant Logo' className={styles.restaurantLogo} />
    </div>
  )
}

export default RatingButton
