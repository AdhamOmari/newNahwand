import { useLocation } from 'react-router-dom'
import styles from './style.module.css'

const ShowMenuItem = () => {
  const location = useLocation()
  const items = location.state
  console.log(items)

  if (!items || items.length === 0) {
    return <div>No items found.</div>
  }

  return (
    <div className={styles.menuContainer}>
      {items.item?.map(item => (
        <div key={item.id} className={styles.menuCard}>
          <div className={styles.cardContent}>
            <h2>{item.name}</h2>
            <p className={styles.description}>{item.description}</p>
            <img src={item.image} alt={item.name} className={styles.image} />
            <p className={styles.price}>Price: ${item.price}</p>
            <p className={styles.calories}>Calories: {item.calories}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShowMenuItem
