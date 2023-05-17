import data from '../../../public/DB/Food.json'
import dataArabic from '../../../public/DB/ArabicFood.json'
import { useSelector } from 'react-redux'
import styles from './style.module.css'

import alkeer from '../../../public/ImageFood/alkeer.jpg'
import alkeer2 from '../../../public/ImageFood/alkeer2.jpg'

const Offers = () => {
  const language = useSelector(state => state.isArabic)
  const offersData = language === 'arabic' ? dataArabic.menu : data.menu
  const nahawandPackages = offersData?.packages || []

  const textAlignmentClass = language === 'arabic' ? styles.rtl : styles.ltr

  return (
    <div>
      <div className={`${styles.itemContainer} ${textAlignmentClass}`}>
        <div className={styles.itemImageContainer}>
          <img
            src={nahawandPackages.image}
            alt={nahawandPackages.name}
            className={styles.itemImage}
          />
          <div className={styles.itemText}>
            <h4 className={styles.itemName}>
              {language === 'arabic' ? 'بكج الخير' : 'Offer packages'}
            </h4>
            <p className={styles.itemDescription}>
              {nahawandPackages.description}
            </p>
          </div>
          <div className={styles.mapItems}>
            {nahawandPackages.item.map(item => (
              <div key={item.id} className={styles.mapItem}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {language === 'arabic'
                  ? `السعر: ${item.price} ريال`
                  : `Price: ${item.price} SAR`}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
