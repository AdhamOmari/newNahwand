import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GiFire } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { Helmet } from 'react-helmet'
import styles from './style.module.css'

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

  const pageTitle =
    isArabic === 'arabic'
      ? 'قائمة بيت المشاوي - Nahawand'
      : 'قائمة Nahawand - بيت المشاوي'
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

      <div className={`${styles.menuContainer} ${menuContainerClass}`}>
        {items.map((item, index) => (
          <article
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
              aria-label={`View ${item.name} Image`}
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
                {isArabic === 'arabic' ? 'SAR ' : 'SAR'}
                {item.price}
              </p>
              {item.calories > 0 && (
                <p className={styles.calories}>
                  {item.calories}
                  <GiFire />
                </p>
              )}
              <p className={styles.description}>{item.description}</p>
              <div className={styles.cover}></div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}

export default ShowMenuItem
