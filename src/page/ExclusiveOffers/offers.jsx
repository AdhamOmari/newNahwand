import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './style.module.css'
import Spinner from '../../Component/Spinner/spinner'
import offerImage from '../../../public/offer.jpg'
// import tahenyoffer from '../../../public/ImageFood/tahenyoffer.jpeg'
// import mozanew from '../../../public/ImageFood/mozanew.jpg'
import { Helmet } from 'react-helmet'

const Offers = () => {
  const { isArabic: language } = useSelector(state => state.rootReducer)

  const [currentOfferIndex, setCurrentOfferIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const offers = [
    // {
    //   image: mozanew,
    //   description:
    //     'موزة غنم نعيمي مطهوة على طريقة نهاوند الخاصة مع الارز وصوص البرياني المميز'
    // },
    // {
    //   image: tahenyoffer,
    //   description: 'اللحم البلدي المفروم مع بهارات نهاوند الخاصة  بالطحينة'
    // },
    {
      image: offerImage,
      description:
        'باكج الخير  - مشاوي مشكلة (لحم ودجاج)  8 اسياخ -  نصف دجاجة من البرياني المميز  - ٣ حبّات كبه مقليه و مقبلات ساخنه - تبولة , سلطة جرجير , حمص  - حمص بيروتي ,  متبل ,  بابا غنوج  - متبل شمندر ,  محمرة  - 2 من كريمة الثوم  , خبز  - 179 ريال شامل الضريبة'
    }
  ]

  const textAlignmentClass = language === 'arabic' ? styles.rtl : styles.ltr
  const pageTitle = 'العروض'

  useEffect(() => {
    // Set the isLoaded state to true after the component has mounted
    setIsLoaded(true)

    // Set a timer to rotate the offers every 3 seconds
    const timer = setInterval(() => {
      setCurrentOfferIndex(prevIndex =>
        prevIndex === offers.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer)
  }, [])

  if (!isLoaded) {
    return <Spinner />
  }

  const offerItems = offers[currentOfferIndex].description.split(' - ')

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name='keywords'
          content='مطعم، طعام، قائمة طعام، شيف، توصيل أفضل مطعم مشاوي في الخبر ،أفضل مطعم لبناني ,افضل مشويات,مطعم نهاوند بيت المشاوي '
        />
      </Helmet>
      <section>
        <h2
          className={`${textAlignmentClass} ${styles.headingClass}`}
          aria-label='Offers'
        >
          العروض
        </h2>
        <div className={`${styles.itemContainer} ${textAlignmentClass}`}>
          <div className={`${styles.itemImageContainer}`}>
            <img
              src={offers[currentOfferIndex].image}
              alt='Offer'
              className={`${styles.itemImage}`}
            />
            <div className={`${styles.offerDescription}`}>
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
