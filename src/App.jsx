import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Spinner from './Component/Spinner/spinner'
import NotFound from './Component/Notfound'
import NavbarApp from './Component/Navbar/NavbarApp'
import Heero from './page/Brief/Heero'
import MenusBrowse from './page/EXPLOREMENU/MenusBrowse'
import ShowMenuItem from './page/ShowMenuItem/ShowMenuItem'
import AllMenus from './page/Menu/Menus'

const HomePage = lazy(() => import('./page/Home/homePage'))
const StoreLocation = lazy(() => import('./page/Location/StoreLocation'))

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarApp />

        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Herero' element={<Heero />} />
            <Route path='/Location' element={<StoreLocation />} />
            <Route path='/menu' element={<AllMenus />} />
            <Route path='/menu/:category' element={<ShowMenuItem />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
