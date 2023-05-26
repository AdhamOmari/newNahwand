import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import styles from './style.module.css'
import Spinner from '../../Component/Spinner/spinner'
import HeroImage from '../Brief/Heero'
import { useSelector } from 'react-redux'

const StoreLocation = lazy(() => import('../Location/StoreLocation'))
const MenusBrowse = lazy(() => import('../EXPLOREMENU/MenusBrowse'))
const Offers = lazy(() => import('../ExclusiveOffers/offers'))
const RatingButton = lazy(() => import('../Opinion/Rating'))
const ChefSelection = lazy(() => import('../ChefSelection/ChefSelection'))

const HomePage = () => {
  const language = useSelector(state => state.rootReducer.isArabic)

  const pageTitle =
    language === 'arabic' ? 'بيت المشاوي - Nahawand' : 'Nahawand - بيت المشاوي'

  const siteDescription =
    'سلطات طازجة بيت المشاوي، مشويات، مشاوي، أفضل مطعم، ريش غنم، اكل مصري، اكل لبناني، برياني هندي، مقبلات لبناني، باستا ايطالية، مشاوي شامية، مشاوي تركية، مانتو روز، كارديو كافيه لحوم بلدية، دجاج طازج'

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name='description' content={siteDescription} />
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
