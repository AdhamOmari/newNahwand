import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import data from '../../../public/DB/Food.json'
import dataArabic from '../../../public/DB/ArabicFood.json'
import styles from './style.module.css'
import OfferSlider from '../OfferSlider/OfferSlider'

const ChefSelection = () => {
  const isArabic = useSelector(state => state.isArabic)
  const menuData = isArabic === 'arabic' ? dataArabic.menu : data.menu

  console.log('menuData:', menuData)

  const nahawandPackages = menuData?.Coldmezzesandappetizers || []

  console.log('filteredMenuData:', nahawandPackages)

  const browseMenuText =
    isArabic === 'arabic' ? 'اختيار الشيف' : "Chef's Selection"

  const seeMoreText = isArabic === 'arabic' ? 'شاهد المزيد' : 'See More'
  const linkContainerStyle =
    isArabic === 'arabic'
      ? styles.seeMoreLink
      : `${styles.seeMoreLink} ${styles.alignRight}`

  return (
    <>
      <div className={styles.menuSection}>
        <h4>{browseMenuText}</h4>
      </div>
      <OfferSlider category={nahawandPackages.item} />
      <Link to='/menu' className={linkContainerStyle}>
        {seeMoreText}
      </Link>
    </>
  )
}

export default ChefSelection
