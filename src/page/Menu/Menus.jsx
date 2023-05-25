import { useSelector } from 'react-redux'
import data from '../../../public/DB/Food.json'
import dataArabic from '../../../public/DB/ArabicFood.json'
import styles from './style.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../Component/Spinner/spinner'

const AllMenus = () => {
  const navigate = useNavigate()

  const { isArabic } = useSelector(state => state.rootReducer)
  const menuData = isArabic === 'arabic' ? dataArabic.menu : data.menu

  useEffect(() => {}, [isArabic])
  const move = (cat, item) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    navigate(`/menu/${cat}`, { state: item })
  }

  if (!menuData) {
    return <Spinner />
  }

  return (
    <main className={styles.wrap}>
      <h1 className={styles.menuTitle}>
        {isArabic === 'arabic' ? 'قائمة الطعام - نهاوند' : 'Menu - Nahwand'}
      </h1>
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
