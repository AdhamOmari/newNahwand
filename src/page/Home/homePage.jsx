import { Suspense } from 'react'
import StoreLocation from '../Location/StoreLocation'
import styles from './style.module.css'
import Brief from '../Brief/Heero'
import Footer from '../../Component/Footer/footer'
import MenusBrowse from '../EXPLOREMENU/MenusBrowse'
import Offers from '../ExclusiveOffers/offers'
import FoodOrderType from '../FoodOrderType/FoodOrderType'
import RatingButton from '../Opinion/Rating'
import ChefSelection from '../ChefSelection/ChefSelection'
import Spinner from '../../Component/Spinner/spinner'

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Brief />
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
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
