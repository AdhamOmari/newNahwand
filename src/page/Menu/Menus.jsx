import { useSelector } from 'react-redux'
import data from '../../../public/DB/Food.json'
import dataArabic from '../../../public/DB/ArabicFood.json'
import styles from './style.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../Component/Spinner/spinner'
import FoodOrderType from '../FoodOrderType/FoodOrderType'

const AllMenus = () => {
  const navigate = useNavigate()

  const { isArabic } = useSelector(state => state.rootReducer)
  const menuData = isArabic === 'arabic' ? dataArabic.menu : data.menu

  useEffect(() => {}, [isArabic])
  const move = (cat, item) => {
    navigate(`/menu/${cat}`, { state: item })
  }

  if (!menuData) {
    return <Spinner />
  }

  return (
    <main>
      <FoodOrderType />

      <h1 className={styles.menuTitle}>
        {isArabic === 'arabic' ? 'قائمة الطعام - نهاوند' : 'Menu - Nahwand'}
      </h1>
      <div className={styles.menuContainer}>
        {Object.entries(menuData).map(([category, { image, item }]) => (
          <div key={category} className={styles.menuCategory}>
            <div className={styles.menuCard}>
              <img src={image} alt={`Category: ${category}`} />

              <button
                onClick={() => move(category, item)}
                className={styles.categoryLink}
              >
                <span className={styles.menuText}>{category}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default AllMenus
