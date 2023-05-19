import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './style.module.css'
import FoodOrderType from '../FoodOrderType/FoodOrderType'

const ShowMenuItem = () => {
  const location = useLocation()
  const items = location.state
  const isArabic = useSelector(state => state.isArabic)

  const menuContainerClass =
    isArabic === 'arabic' ? styles.containerRTL : styles.containerLTR
  console.log(isArabic)
  if (!items || items.length === 0) {
    return <div>No items found.</div>
  }

  return (
    <>
      <FoodOrderType />
      <div className={`${styles.menuContainer} ${menuContainerClass}`}>
        {items?.map(item => (
          <div key={item.id} className={styles.menuCard}>
            <div className={styles.cardContent}>
              <h2 className={styles.menuTitle}>{item.name}</h2>
              <p className={styles.description}>{item.description}</p>
              <img src={item.image} alt={item.name} className={styles.image} />
              <p className={styles.price}>
                {isArabic === 'arabic' ? 'السعر: ريال' : 'Price: $'}
                {item.price}
              </p>
              <p className={styles.calories}>
                {isArabic === 'arabic' ? 'سعرة حرارية: ' : 'Calories: '}
                {item.calories}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ShowMenuItem
