import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FaMotorcycle, FaUtensils } from 'react-icons/fa'

import Button from 'react-bootstrap/Button'
import styles from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'

const NavbarApp = () => {
  const [showSearch, setShowSearch] = useState(false)
  const { isArabic: language } = useSelector(state => state.rootReducer)

  const dispatch = useDispatch()
  // const location = useLocation()
  useEffect(() => {}, [language, dispatch])
  const handleSearchIconClick = () => {
    setShowSearch(!showSearch)
  }

  // const handleLanguageChange = () => {
  //   const newLanguage = language === 'arabic' ? 'english' : 'arabic'
  //   dispatch(setLanguage(newLanguage))
  // }

  const navbarDirection = language === 'arabic' ? 'rtl' : 'ltr'
  // const hideLanguageIcon = location.pathname.includes('/menu/') // Check if the user is on the /menu/:category route

  return (
    <Navbar
      expand='lg'
      variant='dark'
      sticky='top'
      className={styles.navbar}
      dir={navbarDirection}
    >
      <Navbar.Brand
        as={Link}
        to='/'
        className={`${styles.brand} ${
          language === 'arabic' ? styles.arabic : ''
        }`}
      >
        <h1 className={`${styles.brand} `}>
          {language === 'arabic' ? 'نهاوند' : 'Nahawand'}
        </h1>
      </Navbar.Brand>
      <Nav className={styles.foodOrderType}>
        <div className={styles.foodOrderTypeItem}>
          <FaMotorcycle className={styles.foodOrderTypeIcon} />
          <span className={styles.foodOrderTypeText}>Delivery</span>
        </div>
        <div className={styles.foodOrderTypeItem}>
          <FaUtensils className={styles.foodOrderTypeIcon} />
          <span className={styles.foodOrderTypeText}>Dine-in</span>
        </div>
      </Nav>
      <Navbar.Toggle aria-controls='navbar-nav' />
      <Navbar.Collapse
        id='navbar-nav'
        className={styles.navbarCollapse}
        bg-light
      >
        <Nav className={`${styles.navLinks} ${styles.centeredLinks}`}>
          <Nav.Link as={Link} to='/' className={styles.navLink} smooth>
            {language === 'arabic' ? 'الرئيسية' : 'Home'}
          </Nav.Link>
          <Nav.Link as={Link} to='/menu' className={styles.navLink} smooth>
            {language === 'arabic' ? 'القائمة' : 'Menu'}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to='/ChefSelection'
            className={styles.navLink}
            smooth
          >
            {language === 'arabic' ? 'اختيار الشيف' : `Chef's Selection`}
          </Nav.Link>
          <Nav.Link as={Link} to='/Delivery' className={styles.navLink} smooth>
            {language === 'arabic' ? 'توصيل' : 'Delivery'}
          </Nav.Link>

          <Nav.Link as={Link} to='/RateUs' className={styles.navLink} smooth>
            {language === 'arabic' ? 'قيِّمنا' : 'Rate US'}
          </Nav.Link>
          <Button
            variant='outline-primary'
            onClick={handleSearchIconClick}
            className={`${styles.searchIcon} ${styles.searchButton}`}
          >
            {/* <FiSearch size={20} /> */}
          </Button>
          {/* <Button
                    variant='link'
                    onClick={handleLanguageChange}
                    className={styles.languageIcon}
                  >
                    <div className={styles.languageIcon}>
                      <MdLanguage style={{ color: '#FFF' }} />
                    </div>
                  </Button> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarApp
