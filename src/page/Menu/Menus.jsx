import { useSelector } from 'react-redux'
import data from '../../../public/DB/Food.json'
import dataArabic from '../../../public/DB/ArabicFood.json'
import styles from './style.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../Component/Spinner/spinner'
import { Helmet } from 'react-helmet'

const AllMenus = () => {
  const navigate = useNavigate()

  const { isArabic } = useSelector(state => state.rootReducer)
  const menuData = isArabic === 'arabic' ? dataArabic.menu : data.menu

  useEffect(() => {}, [isArabic])
  const move = (cat, item) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    navigate(`/menu/${cat}`, { state: item })
  }

  if (!menuData) {
    return <Spinner />
  }

  const pageTitle =
    isArabic === 'arabic'
      ? '  الطعام  بيت المشاوي  قائمة - Nahawand'
      : '  الطعام  بيت المشاوي  قائمة - Nahawand'

  return (
    <main className={styles.wrap}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name='description'
          content='  اختيار الشيف, سلطات طازجة بيت المشاوي ،مشويات ، مشاوي ، افضل مطعم ،  ريش غنم اكل مصري ، اكل لبناني ، برياني هندي ، مقبلات لبناني ، باستا ايطالية ، مشاوي شامية ، مشاوي تركية ، مانتو روز ، كارديو كافيه لحوم بلدية دجاج طازج'
        />
      </Helmet>
      <h1 className={styles.menuTitle}>{pageTitle}</h1>
      <div className={styles.menuContainer}>
        {Object.entries(menuData).map(([category, { image, item }]) => (
          <div key={category} className={styles.menuCategory}>
            <button
              onClick={() => move(category, item)}
              className={styles.categoryLink}
            ></button>
            <div className={styles.cover}></div>

            <div className={styles.menuCard}>
              <img src={image} alt={`Category: ${category}`} />
              <h2
                className={styles.categoryTitle}
                onClick={() => move(category, item)}
              >
                {category}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default AllMenus
