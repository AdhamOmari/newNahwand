import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Spinner from './Component/Spinner/spinner'
import NotFound from './Component/Notfound'
import NavbarApp from './Component/Navbar/NavbarApp'
import Footer from './Component/Footer/footer'
import HomePage from './page/Home/HomePage'
import { Helmet } from 'react-helmet'

const Heero = lazy(() => import('./page/Brief/Heero'))
const StoreLocation = lazy(() => import('./page/Location/StoreLocation'))
const AllMenus = lazy(() => import('./page/Menu/Menus'))
const ShowMenuItem = lazy(() => import('./page/ShowMenuItem/ShowMenuItem'))
const RatingButton = lazy(() => import('./page/Opinion/Rating'))
const FoodOrderType = lazy(() => import('./page/FoodOrderType/FoodOrderType'))
const ChefSelection = lazy(() => import('./page/ChefSelection/ChefSelection'))
const pageTitle = 'نهاوند  بيت المشاوي - Nahawand'
const siteDescription =
  'اختيار الشيف، سلطات طازجة بيت المشاوي، مشويات، مشاوي، أفضل مطعم، ريش غنم، اكل مصري، اكل لبناني، برياني هندي، مقبلات لبناني، باستا ايطالية، مشاوي شامية، مشاوي تركية، مانتو روز، كارديو كافيه لحوم بلدية، دجاج طازج'

const App = () => {
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

        <meta name='keywords' content='مطعم، طعام، قائمة طعام، شيف، توصيل' />
        <meta name='author' content='نهاوند بيت المشاوي ' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='canonical' href='https://www.nahawandbbq.com/' />
      </Helmet>
      <BrowserRouter>
        <NavbarApp />

        <Suspense fallback={<Spinner />}>
          <Routes aria-label='نهاوند مطعم'>
            <Route path='/' element={<HomePage />} aria-label='Home' />
            <Route path='/Herero' element={<Heero />} aria-label='Brief' />
            <Route
              path='/Location'
              element={<StoreLocation />}
              aria-label='Store Location'
            />
            <Route path='/menu' element={<AllMenus />} aria-label='Menu' />
            <Route
              path='/menu/:category'
              element={<ShowMenuItem />}
              aria-label='Menu Category'
            />
            <Route
              path='/RateUs'
              element={<RatingButton />}
              aria-label='Rate Us'
            />
            <Route
              path='/Delivery'
              element={<FoodOrderType />}
              aria-label='Food Order Type'
            />
            <Route
              path='/ChefSelection'
              element={<ChefSelection />}
              aria-label='Chef Selection'
            />
            {/* <Route path='*' element={<NotFound />} aria-label='Not Found' /> */}
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
