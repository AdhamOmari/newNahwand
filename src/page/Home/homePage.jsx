import { lazy, Suspense } from 'react'
import StoreLocation from '../Location/StoreLocation'
import styles from './style.module.css'
import Brief from '../Brief/Heero'
import Footer from '../../Component/Footer/footer'
import MenusBrowse from '../EXPLOREMENU/MenusBrowse'

const Menus = lazy(() => import('../Menu/Menus'))

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Brief />
      <Suspense fallback={<div>Loading...</div>}>
        <MenusBrowse />
        {/* <Offers /> */}
        <StoreLocation />
        {/* <Menus className={styles.menusWrap} /> */}
        <Footer />
      </Suspense>
    </div>
  )
}

export default HomePage
