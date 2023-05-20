import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Spinner from './Component/Spinner/spinner'
import NotFound from './Component/Notfound'
import NavbarApp from './Component/Navbar/NavbarApp'
import Footer from './Component/Footer/footer'
import HomePage from './page/Home/HomePage'

const Heero = lazy(() => import('./page/Brief/Heero'))
const StoreLocation = lazy(() => import('./page/Location/StoreLocation'))
const AllMenus = lazy(() => import('./page/Menu/Menus'))
const ShowMenuItem = lazy(() => import('./page/ShowMenuItem/ShowMenuItem'))
const RatingButton = lazy(() => import('./page/Opinion/Rating'))
const FoodOrderType = lazy(() => import('./page/FoodOrderType/FoodOrderType'))
const ChefSelection = lazy(() => import('./page/ChefSelection/ChefSelection'))

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <NavbarApp />

        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Herero' element={<Heero />} />
            <Route path='/Location' element={<StoreLocation />} />
            <Route path='/menu' element={<AllMenus />} />
            <Route path='/menu/:category' element={<ShowMenuItem />} />
            <Route path='/RateUs' element={<RatingButton />} />
            <Route path='/Delivery' element={<FoodOrderType />} />
            <Route path='/ChefSelection' element={<ChefSelection />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
