import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { FiX } from 'react-icons/fi'
import styles from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from '../../Redux/Language/LangugeAction'
import { MdLanguage } from 'react-icons/md'

const NavbarApp = () => {
  const [showSearch, setShowSearch] = useState(false)
  const language = useSelector(state => state.isArabic)
  const dispatch = useDispatch()
  const location = useLocation()

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch)
  }

  const handleSearchClose = () => {
    setShowSearch(false)
  }

  const handleLanguageChange = () => {
    const newLanguage = language === 'arabic' ? 'english' : 'arabic'
    dispatch(setLanguage(newLanguage))
  }

  const navbarDirection = language === 'arabic' ? 'rtl' : 'ltr'
  const hideLanguageIcon = location.pathname.includes('/menu/') // Check if the user is on the /menu/:category route

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
          {' '}
          {language === 'arabic' ? 'نهاوند' : 'Nahwand'}
        </h1>
      </Navbar.Brand>
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
          <Nav.Link href='/ChefSelection' className={styles.navLink} smooth>
            {language === 'arabic' ? 'اختيار الشيف' : 'Chef Selection'}
          </Nav.Link>
          <Nav.Link href='/Delivery' className={styles.navLink} smooth>
            {language === 'arabic' ? 'توصيل' : 'Delivery'}
          </Nav.Link>

          <Nav.Link href='/RateUs' className={styles.navLink} smooth>
            {language === 'arabic' ? 'قيِّمنا' : 'Rate US'}
          </Nav.Link>
          <Form inline className={styles.form}>
            <div className={styles.btnWrap}>
              {!showSearch && !hideLanguageIcon && (
                <>
                  <Button
                    variant='outline-primary'
                    onClick={handleSearchIconClick}
                    className={`${styles.searchIcon} ${styles.searchButton}`}
                  >
                    {/* <FiSearch size={20} /> */}
                  </Button>
                  <Button
                    variant='link'
                    onClick={handleLanguageChange}
                    className={styles.languageIcon}
                  >
                    <div className={styles.languageIcon}>
                      <MdLanguage style={{ color: '#FFF' }} />
                    </div>
                  </Button>
                </>
              )}
            </div>
            <div>
              {showSearch && (
                <div className={`${styles.searchForm}`}>
                  <FormControl
                    type='text'
                    placeholder={language === 'arabic' ? 'ابحث' : 'Search'}
                    className={styles.searchInput}
                    dir={language === 'arabic' ? 'rtl' : 'ltr'}
                  />
                  <Button
                    variant='link'
                    onClick={handleSearchClose}
                    className={styles.closeIcon}
                  >
                    <FiX />
                  </Button>
                </div>
              )}
            </div>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarApp
