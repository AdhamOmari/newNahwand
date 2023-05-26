import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MenuCard from './MenuCard'
import data from '../../../public/DB/Food.json'
import dataArabic from '../../../public/DB/ArabicFood.json'
import styles from './style.module.css'
import Spinner from '../../Component/Spinner/spinner'
import { Helmet } from 'react-helmet'

const MenusBrowse = () => {
  const { isArabic } = useSelector(state => state.rootReducer)
  const menuData = isArabic === 'arabic' ? dataArabic.menu : data.menu
  const navigate = useNavigate()

  if (!menuData) {
    return <Spinner />
  }

  const browseMenuText =
    isArabic === 'arabic' ? 'تصفح قائمتنا' : 'BROWSE OUR MENU'
  const seeMoreText = isArabic === 'arabic' ? 'شاهد المزيد' : 'See More'
  const linkContainerStyle =
    isArabic === 'arabic'
      ? styles.seeMoreLink
      : `${styles.seeMoreLink} ${styles.alignRight}`

  const move = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate('/menu/')
  }

  const pageTitle =
    isArabic === 'arabic'
      ? 'بيت المشاوي - Nahawand  تصفح  قائمتنا'
      : 'تصفح  قائمتنا Nahawand - بيت المشاوي'

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name='description'
          content='اختيار الشيف، سلطات طازجة بيت المشاوي، مشويات، مشاوي، افضل مطعم، ريش غنم اكل مصري، اكل لبناني، برياني هندي، مقبلات لبناني، باستا ايطالية، مشاوي شامية، مشاوي تركية، مانتو روز، كارديو كافيه لحوم بلدية دجاج طازج'
        />
      </Helmet>
      <section className={styles.menuSection}>
        <h1>{browseMenuText}</h1>
      </section>
      <MenuCard category={menuData} />
      <button
        className={linkContainerStyle}
        onClick={move}
        aria-label={seeMoreText} // Add ARIA label for accessibility
      >
        {seeMoreText}
      </button>
    </>
  )
}

export default MenusBrowse
