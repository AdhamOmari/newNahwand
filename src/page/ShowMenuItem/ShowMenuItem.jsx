import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './style.module.css'
import { GiFire } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const ShowMenuItem = () => {
  const location = useLocation()
  const items = location.state
  const { isArabic } = useSelector(state => state.rootReducer)
  const [expandedImage, setExpandedImage] = useState(null)

  const menuContainerClass =
    isArabic === 'arabic' ? styles.containerRTL : styles.containerLTR

  const handleImageClick = index => {
    setExpandedImage(index)
  }

  const handleCloseClick = () => {
    setExpandedImage(null)
  }

  if (!items || items.length === 0) {
    return <div>No items found.</div>
  }

  return (
    <div className={`${styles.menuContainer} ${menuContainerClass}`}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.menuCard} ${styles.flexContainer} ${
            expandedImage === index ? styles.expanded : ''
          }`}
        >
          <img
            src={item.image}
            alt={item.name}
            className={styles.image}
            onClick={() => handleImageClick(index)}
            loading='lazy'
          />
          {expandedImage === index && (
            <div className={styles.overlay}>
              <div className={styles.closeButton} onClick={handleCloseClick}>
                <AiOutlineClose />
              </div>
              <div className={styles.expandedImageContainer}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.expandedImage}
                />
              </div>
            </div>
          )}
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
  )
}

export default ShowMenuItem
