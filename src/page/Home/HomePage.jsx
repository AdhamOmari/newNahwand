import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import styles from './style.module.css'
import Spinner from '../../Component/Spinner/spinner'
import HeroImage from '../Brief/Heero'

const StoreLocation = lazy(() => import('../Location/StoreLocation'))
const MenusBrowse = lazy(() => import('../EXPLOREMENU/MenusBrowse'))
const Offers = lazy(() => import('../ExclusiveOffers/offers'))
const RatingButton = lazy(() => import('../Opinion/Rating'))
const ChefSelection = lazy(() => import('../ChefSelection/ChefSelection'))

const HomePage = () => {
  const pageTitle = ' مطعم نهاوند بيت المشاوي    '

  const siteDescription =
    'سلطات طازجة بيت المشاوي، مشويات، مشاوي، أفضل مطعم، ريش غنم، أفضل مطعم مشاوي في الخبر ،أفضل مطعم لبناني ,افضل مشويات,اكل مصري، اكل لبناني، برياني هندي، مقبلات لبناني، باستا ايطالية، مشاوي شامية، مشاوي تركية، مانتو روز، كارديو كافيه لحوم بلدية، دجاج طازج'

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

        <meta name='keywords' content='مطعم، طعام، قائمة طعام، شيف، توصيل أفضل مطعم مشاوي في الخبر ،أفضل مطعم لبناني ,افضل مشويات,مطعم نهاوند بيت المشاوي ' />
        <meta name='author' content='نهاوند بيت المشاوي ' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='canonical' href='https://www.nahawandbbq.com/' />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <HeroImage />
        <main className={styles.home}>
          <Suspense fallback={<Spinner />}>
            {/* <FoodOrderType /> */}
            <section>
              <h2
                className={styles.sectionTitle}
                aria-label='Exclusive Offers'
              ></h2>
              <Offers />
            </section>
            <section>
              <h2
                className={styles.sectionTitle}
                aria-label='Browse Our Menu'
              ></h2>
              <MenusBrowse />
            </section>
            <section>
              <h2
                className={styles.sectionTitle}
                aria-label='Chef Selection'
              ></h2>
              <ChefSelection />
            </section>
            <section>
              <h2
                className={styles.sectionTitle}
                aria-label='Store Location'
              ></h2>
              <StoreLocation />
            </section>
            <section>
              <h2
                className={styles.sectionTitle}
                aria-label='Rate Our Service'
              ></h2>
              <RatingButton />
            </section>
          </Suspense>
        </main>
      </Suspense>
    </>
  )
}

export default HomePage
