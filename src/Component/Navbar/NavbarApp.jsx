import { useState, useEffect } from 'react'
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
import { AiOutlineWhatsApp } from 'react-icons/ai'
import {
  FaMotorcycle,
  FaUtensils,
  FaCarSide,
  FaShoppingBag
} from 'react-icons/fa'
import { BsCheckCircle } from 'react-icons/bs'

const FoodOrderType = () => {
  const { isArabic: language } = useSelector(state => state.rootReducer)
  console.log(language)
  const [orderType, setOrderType] = useState('')

  const handleOrderTypeChange = type => {
    setOrderType(type)
  }

  const orderTypes = [
    {
      type: 'delivery',
      text: language === 'arabic' ? 'توصيل' : 'Delivery',
      icon: <FaMotorcycle size={20} color='#FFFF' />
    },
    {
      type: 'dineIn',
      text: language === 'arabic' ? 'التناول في المطعم' : 'Dine-in',
      icon: <FaUtensils size={20} color='#FFFF' />
    },
    {
      type: 'takeout',
      text:
        language === 'arabic'
          ? 'استلام الطلب من السيارة '
          : 'Pickup from the car',
      icon: <FaCarSide size={20} color='#FFFF' />
    },
    {
      type: 'pickup',
      text:
        language === 'arabic'
          ? 'الاستلام من المطعم'
          : 'Pickup from the restaurant',
      icon: <FaShoppingBag size={20} color='#FFFF' />
    }
  ]

  const openWhatsApp = () => {
    const whatsappText = language
      ? 'مرحبًا، أرغب في معرفة المزيد عن عناصر القائمة في المطعم ؟'
      : 'Hello, I want to know more about the menu items in the restaurant?'
    window.open(
      `https://api.whatsapp.com/send?phone=966 55 310 4477&text=${encodeURIComponent(
        whatsappText
      )}`,
      '_blank',
      'noopener noreferrer'
    )
  }

  const containerClass = `${styles.container} ${
    language === 'arabic' ? styles.ar : ''
  }`

  return (
    <div className={styles.foodOrderTypeWrapper}>
      <div className={containerClass}>
        <div className={styles.cardContainer}>
          {orderTypes.map(order => (
            <div
              key={order.type}
              className={`${styles.card} ${
                orderType === order.type ? styles.selected : ''
              }`}
              onClick={() => handleOrderTypeChange(order.type)}
            >
              <div className={styles.cardIcon}>{order.icon}</div>
              <p className={`${styles.cardText} ${styles.cardTextWithIcon}`}>
                {orderType === order.type && (
                  <BsCheckCircle size={20} color='#5EDBC2' />
                )}
                {order.text}
              </p>
            </div>
          ))}
        </div>
        {orderType && (
          <>
            {(orderType === 'dineIn' ||
              orderType === 'takeout' ||
              orderType === 'pickup') && (
              <button
                className={`${styles.button} ${
                  language === 'arabic' ? styles.ar : ''
                }`}
                onClick={openWhatsApp}
              >
                <AiOutlineWhatsApp size={35} color='green' />
              </button>
            )}
            {orderType === 'delivery' && (
              <div className={styles.location}>
                <h4 className={styles.apps}>
                  {language === 'arabic' ? 'التطبيقات' : 'Apps'}
                </h4>
                <ul className={styles.cardList}>
                  <li>
                    <a href='/'>
                      <img
                        src='/HungerStation-01-3.svg'
                        alt='App 1'
                        className={styles.cardImage}
                      />
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      <img
                        src='/Mrsool-01.svg'
                        alt='App 2'
                        className={styles.cardImage}
                      />
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      <img
                        src='/jahez.svg'
                        alt='App 3'
                        className={styles.cardImage}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

const NavbarApp = () => {
  const [showSearch, setShowSearch] = useState(false)
  const { isArabic: language } = useSelector(state => state.rootReducer)

  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {}, [language, dispatch])
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
          {language === 'arabic' ? 'نهاوند' : 'Nahawand'}
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
                  {/* <Button
                    variant='link'
                    onClick={handleLanguageChange}
                    className={styles.languageIcon}
                  >
                    <div className={styles.languageIcon}>
                      <MdLanguage style={{ color: '#FFF' }} />
                    </div>
                  </Button> */}
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

const App = () => {
  return (
    <div>
      <NavbarApp />
      <FoodOrderType />
    </div>
  )
}

export default App
