import { lazy, Suspense } from 'react'
import styles from './style.module.css'
import Spinner from '../../Component/Spinner/spinner'

const Brief = lazy(() => import('../Brief/Heero'))
const StoreLocation = lazy(() => import('../Location/StoreLocation'))
const MenusBrowse = lazy(() => import('../EXPLOREMENU/MenusBrowse'))
const Offers = lazy(() => import('../ExclusiveOffers/offers'))
const FoodOrderType = lazy(() => import('../FoodOrderType/FoodOrderType'))
const RatingButton = lazy(() => import('../Opinion/Rating'))
const ChefSelection = lazy(() => import('../ChefSelection/ChefSelection'))
const Footer = lazy(() => import('../../Component/Footer/footer'))

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <Brief />
        <FoodOrderType />
        <Offers />
        <MenusBrowse />
        <ChefSelection />
        <StoreLocation />
        <RatingButton />
        <Footer />
      </Suspense>
    </div>
  )
}

export default HomePage
