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

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Brief />
        <div className={styles.home}>
          <Suspense fallback={<Spinner />}>
            <div id='Delivery'>
              <FoodOrderType />
            </div>
            <div id='Offers'>
              <Offers />
            </div>
            <div id='menu'>
              <MenusBrowse />
            </div>
            <div id='ChefSelection'>
              <ChefSelection />
            </div>
            <div id='StoreLocation'>
              <StoreLocation />
            </div>
            <div id='RateUs'>
              <RatingButton />
            </div>
          </Suspense>
        </div>
      </Suspense>
    </>
  )
}

export default HomePage
