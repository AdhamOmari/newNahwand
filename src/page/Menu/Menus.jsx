import React from 'react'
import data from '../../../public/DB/Food.json'
import dataArabic from '../../../public/DB/ArabicFood.json'
import styles from './AllMenus.module.css'

const AllMenus = ({ language }) => {
  const menuData = language === 'arabic' ? dataArabic.menu : data.menu

  return (
    <div className={styles.menuContainer}>
      {Object.entries(menuData).map(([category, { image, item }]) => (
        <div key={category} className={styles.menuCategory}>
          <img src={image} alt={`Category: ${category}`} />
          <h3>{category}</h3>
          <div className={styles.menuItems}>
            {item.map(({ name, price, calories, image }) => (
              <div key={name} className={styles.menuItem}>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Calories: {calories}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllMenus
