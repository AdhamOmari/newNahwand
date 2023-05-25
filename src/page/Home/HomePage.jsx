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

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name='description'
          content=' سلطات طازجة بيت المشاوي ،مشويات ، مشاوي ، افضل مطعم ،  ريش غنم اكل مصري ، اكل لبناني ، برياني هندي ، مقبلات لبناني ، باستا ايطالية ، مشاوي شامية ، مشاوي تركية ، مانتو روز ، كارديو كافيه لحوم بلدية دجاج طازج'
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <HeroImage />
        <div className={styles.home}>
          <Suspense fallback={<Spinner />}>
            {/* <FoodOrderType /> */}
            <Offers />
            <MenusBrowse />
            <ChefSelection />
            <StoreLocation />
            <RatingButton />
          </Suspense>
        </div>
      </Suspense>
    </>
  )
}

export default HomePage
