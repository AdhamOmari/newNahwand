import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import data from '../../../public/DB/ChefSelectionEnglish.json'
import dataArabic from '../../../public/DB/ChefSelectionArabic.json'
import styles from './style.module.css'
import OfferSlider from '../OfferSlider/OfferSlider'
import Spinner from '../../Component/Spinner/spinner'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const ChefSelection = () => {
  const { isArabic } = useSelector(state => state.rootReducer)
  const menuData = isArabic === 'arabic' ? dataArabic.menu : data.menu
  useEffect(() => {}, [isArabic])

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

  const description =
    'اختيار الشيف, سلطات طازجة بيت المشاوي، مشويات، مشاوي، افضل مطعم، ريش غنم اكل مصري، اكل لبناني، برياني هندي، مقبلات لبناني، باستا ايطالية، مشاوي شامية، مشاوي تركية، مانتو روز، كارديو كافيه لحوم بلدية دجاج طازج'

  return (
    <>
      <Helmet>
        <title>{browseMenuText}</title>
        <meta name='description' content={description} />
        <meta
          name='keywords'
          content='restaurant, food, menu, chef, delivery'
        />
        <meta
          name='address'
          content='الخبر السعودية، شارع حي العليا - شارع فراس بن النضر'
        />
        <meta name='keywords' content={description} />

        <meta name='keywords' content='مطعم، طعام، قائمة طعام، شيف، توصيل' />
        <meta name='author' content='نهاوند بيت المشاوي ' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='canonical' href='https://www.nahawandbbq.com/' />
      </Helmet>
      <section className={styles.menuSection}>
        <h4 aria-label='Browse Menu'>{browseMenuText}</h4>
      </section>
      <OfferSlider category={nahawandPackages.item} />
      <div className={linkContainerStyle}>
        <Link to='/menu' className={linkContainerStyle}>
          <button>{seeMoreText}</button>
        </Link>
      </div>
    </>
  )
}

export default ChefSelection
