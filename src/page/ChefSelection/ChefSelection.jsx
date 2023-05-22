import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import data from '../../../public/DB/ChefSelectionEnglish.json'
import dataArabic from '../../../public/DB/ChefSelectionArabic.json'
import styles from './style.module.css'
import OfferSlider from '../OfferSlider/OfferSlider'
import Spinner from '../../Component/Spinner/spinner'
import { useEffect } from 'react'

const ChefSelection = () => {
  const { isArabic } = useSelector(state => state.rootReducer)
  const menuData = isArabic === 'arabic' ? dataArabic.menu : data.menu
  useEffect(() => {}, [isArabic])
  console.log(isArabic, 'arabic')
  if (!menuData) {
    return <Spinner />
  }

  const nahawandPackages = menuData || []

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
        <button>{seeMoreText}</button>
      </Link>
    </>
  )
}

export default ChefSelection
