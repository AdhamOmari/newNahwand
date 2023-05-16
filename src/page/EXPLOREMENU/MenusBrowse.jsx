import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MenuCard from './MenuCard'
import data from '../../../public/DB/Food.json'
import dataArabic from '../../../public/DB/ArabicFood.json'
import styles from './style.module.css'

const MenusBrowse = () => {
  const language = useSelector(state => state.isArabic)
  const menuData = language === 'arabic' ? dataArabic.menu : data.menu

  return (
    <div className={styles.menuSection}>
      <h4>BROWSE OUR MENU</h4>
      <p>Hungry? Order & Eat</p>
      <MenuCard category={menuData} />
      <Link to='/all-menus' className={styles.seeMoreLink}>
        See More
      </Link>
    </div>
  )
}

export default MenusBrowse
