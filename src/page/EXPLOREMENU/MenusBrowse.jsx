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
       '     قائمة طعام مطعم نهاوند  '

  const siteDescription =
    'اختيار الشيف، سلطات طازجة بيت المشاوي، مشويات، مشاوي، أفضل مطعم، ريش غنم، اكل مصري، اكل لبناني، برياني هندي، مقبلات لبناني، باستا ايطالية، مشاوي شامية، مشاوي تركية، مانتو روز، كارديو كافيه لحوم بلدية، دجاج طازج'

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name='description' content={siteDescription} />
        <meta
          name='keywords'
          content='restaurant, food, menu, chef, delivery'
        />
        <meta
          name='address'
          content='الخبر السعودية، شارع حي العليا - شارع فراس بن النضر'
        />
        <meta name='keywords' content={siteDescription} />

        <meta name='keywords' content='مطعم، طعام، قائمة طعام، شيف، توصيل' />
        <meta name='author' content='نهاوند بيت المشاوي ' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='canonical' href='https://www.nahawandbbq.com/' />
      </Helmet>
      <section className={styles.menuSection}>
        <h2>{browseMenuText}</h2>
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
