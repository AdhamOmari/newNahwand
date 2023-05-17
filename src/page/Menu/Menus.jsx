import { useSelector } from 'react-redux'
import data from '../../../public/DB/Food.json'
import dataArabic from '../../../public/DB/ArabicFood.json'
import styles from './style.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AllMenus = () => {
  const navigate = useNavigate()

  const isArabic = useSelector(state => state.isArabic)
  const menuData = isArabic === 'arabic' ? dataArabic.menu : data.menu
  console.log(menuData)
  useEffect(() => {}, [isArabic])
  const move = (cat, item) => {
    navigate(`/menu/${cat}`, { state: item })
  }
  return (
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
  )
}

export default AllMenus
