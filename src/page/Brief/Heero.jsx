import { useSelector } from 'react-redux'
import styles from './style.module.css'
import Spinner from '../../Component/Spinner/spinner'
import offerImage from '../../../public/04.jpg' // Replace with the path to your offer image
import { Helmet } from 'react-helmet'

const HeroImage = () => {
  const { isArabic: language } = useSelector(state => state.rootReducer)

  if (!offerImage) {
    return <Spinner />
  }

  const pageTitle = '  مطعم نهاوند بيت المشاوي'

  const textAlignmentClass = language === 'arabic' ? styles.rtl : styles.ltr

  const description =
    'سلطات طازجة بيت المشاوي، مشويات، مشاوي،أفضل مطعم مشاوي في الخبر ،أفضل مطعم لبناني ,افضل مشويات, افضل مطعم، ريش غنم اكل مصري، اكل لبناني، برياني هندي، مقبلات لبناني، باستا ايطالية، مشاوي شامية، مشاوي تركية، مانتو روز، كارديو كافيه لحوم بلدية دجاج طازج'

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
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
        <meta name='keywords' content='مطعم، طعام، قائمة طعام، شيف، توصيل أفضل مطعم مشاوي في الخبر ،أفضل مطعم لبناني ,افضل مشويات,مطعم نهاوند بيت المشاوي ' />

        <meta name='keywords' content='مطعم، طعام، قائمة طعام، شيف، توصيل' />
        <meta name='author' content='نهاوند بيت المشاوي ' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='canonical' href='https://www.nahawandbbq.com/' />
      </Helmet>
      <section>
        <div className={`${styles.itemContainer} ${textAlignmentClass}`}>
          <div className={styles.itemImageContainer}>
            <img
              src={offerImage}
              alt='Offers'
              className={styles.itemImage}
              loading='lazy' // Add this attribute for lazy-loading
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroImage
