import { useSelector } from 'react-redux'
import styles from './style.module.css'
import Spinner from '../../Component/Spinner/spinner'
import offerImage from '../../../public/offer.jpg' // Replace with the path to your offer image
import { Helmet } from 'react-helmet'

const Offers = () => {
  const { isArabic: language } = useSelector(state => state.rootReducer)

  if (!offerImage) {
    return <Spinner />
  }

  const offersDescription =
    'باكج الخير  - مشاوي مشكلة (لحم ودجاج)  8 اسياخ -  نصف دجاجة من البرياني المميز  - ٣ حبّات كبه مقليه و مقبلات ساخنه - تبولة , سلطة جرجير , حمص  - حمص بيروتي ,  متبل ,  بابا غنوج  - متبل شمندر ,  محمرة  - 2 من كريمة الثوم  , خبز  - 179 ريال شامل الضريبة'

  const offerItems = offersDescription.split(' - ')

  const textAlignmentClass = language === 'arabic' ? styles.rtl : styles.ltr
  const pageTitle =
    language === 'arabic'
      ? 'بيت المشاوي - نهاوند العروض'
      : 'العروض Nahawand - بيت المشاوي'

  const description =
    'اختيار الشيف, سلطات طازجة بيت المشاوي، مشويات، مشاوي، افضل مطعم، ريش غنم اكل مصري، اكل لبناني، برياني هندي، مقبلات لبناني، باستا ايطالية، مشاوي شامية، مشاوي تركية، مانتو روز، كارديو كافيه لحوم بلدية دجاج طازج'

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

        <meta name='keywords' content='مطعم، طعام، قائمة طعام، شيف، توصيل' />
        <meta name='author' content='نهاوند بيت المشاوي ' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='canonical' href='https://www.nahawandbbq.com/' />
      </Helmet>
      <section>
        <h1
          className={`${textAlignmentClass} ${styles.headingClass}`}
          aria-label='Offers'
        >
          العروض
        </h1>
        <div className={`${styles.itemContainer} ${textAlignmentClass}`}>
          <div className={styles.itemImageContainer}>
            <img
              src={offerImage}
              alt='Offers'
              className={styles.itemImage}
              loading='lazy' // Add this attribute for lazy-loading
            />
            <div className={styles.offerDescription} aria-label='Offer Details'>
              {offerItems.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Offers
