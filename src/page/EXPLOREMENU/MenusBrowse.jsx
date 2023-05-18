import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MenuCard from './MenuCard'
import data from '../../../public/DB/Food.json'
import dataArabic from '../../../public/DB/ArabicFood.json'
import styles from './style.module.css'
import Spinner from '../../Component/Spinner/spinner'

const MenusBrowse = () => {
  const isArabic = useSelector(state => state.isArabic)
  const menuData = isArabic === 'arabic' ? dataArabic.menu : data.menu
  const navigate = useNavigate()
  if (!menuData) return <Spinner />

  const browseMenuText =
    isArabic === 'arabic' ? 'تصفح قائمتنا' : 'BROWSE OUR MENU'
  const hungryText =
    isArabic === 'arabic'
      ? 'هل أنت جائع؟ اطلب وتناول الطعام'
      : 'Hungry? Order & Eat'
  const seeMoreText = isArabic === 'arabic' ? 'شاهد المزيد' : 'See More'
  const linkContainerStyle =
    isArabic === 'arabic'
      ? styles.seeMoreLink
      : `${styles.seeMoreLink} ${styles.alignRight}`

  const move = () => {
    navigate(`/menu/`)
  }

  return (
    <>
      <div className={styles.menuSection}>
        <h4>{browseMenuText}</h4>
        <p>{hungryText}</p>
      </div>
      <MenuCard category={menuData} />
      <button className={linkContainerStyle} onClick={() => move(menuData)}>
        {seeMoreText}
      </button>
    </>
  )
}

export default MenusBrowse
