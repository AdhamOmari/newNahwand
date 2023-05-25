import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './style.module.css'
import { GiFire } from 'react-icons/gi'

const ShowMenuItem = () => {
  const location = useLocation()
  const items = location.state
  const { isArabic } = useSelector(state => state.rootReducer)
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  const menuContainerClass =
    isArabic === 'arabic' ? styles.containerRTL : styles.containerLTR

  const handleImageClick = () => {
    setIsImageExpanded(!isImageExpanded)
  }

  if (!items || items.length === 0) {
    return <div>No items found.</div>
  }

  return (
    <>
      <div className={`${styles.menuContainer} ${menuContainerClass}`}>
        {items?.map(item => (
          <div
            key={item.id}
            className={`${styles.menuCard} ${styles.flexContainer}`}
          >
            <img
              src={item.image}
              alt={item.name}
              className={`${styles.image} ${
                isImageExpanded ? styles.expandedImage : ''
              }`}
              onClick={handleImageClick}
              loading='lazy'
            />
            <div className={styles.cardContent}>
              <h2 className={styles.menuTitle}>{item.name}</h2>
              <p className={styles.price}>
                {isArabic === 'arabic' ? ' SAR ' : ' SAR'}
                {item.price}
              </p>
              {item.calories > 0 && (
                <p className={styles.calories}>
                  {item.calories}
                  <GiFire />
                </p>
              )}
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ShowMenuItem
