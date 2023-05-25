import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
  FaMotorcycle,
  FaUtensils,
  FaPhoneAlt,
  FaStoreAlt
} from 'react-icons/fa'

import styles from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const NavbarApp = () => {
  const { isArabic: language } = useSelector(state => state.rootReducer)
  const [selectedOrderType, setSelectedOrderType] = useState('')

  const dispatch = useDispatch()
  useEffect(() => {}, [language, dispatch])

  const handleOrderTypeChange = type => {
    setSelectedOrderType(type)
  }

  const navbarDirection = language === 'arabic' ? 'rtl' : 'ltr'

  const openWhatsApp = () => {
    const encodedText =
      'مرحبًا، أرغب في معرفة المزيد عن عناصر القائمة في المطعم ؟'

    const whatsappLink = `https://api.whatsapp.com/send?phone=966553104477&text=${encodedText}`
    window.open(whatsappLink, '_blank')
  }

  const orderTypes = [
    {
      type: 'delivery',
      text: language === 'arabic' ? 'توصيل' : 'Delivery',
      icon: <FaMotorcycle size={20} color='#FFFF' />
    },
    {
      type: 'dineIn',
      text: language === 'arabic' ? ' في المطعم' : 'Dine-in',
      icon: <FaUtensils size={20} color='#FFFF' />
    },
    {
      type: 'takeout',
      text: language === 'arabic' ? 'اتصل بنا' : 'Call us',
      icon: <FaPhoneAlt size={20} color='#FFFF' />
    },
    {
      type: 'pickup',
      text: language === 'arabic' ? '  الاستلام' : 'Pickup from the restaurant',
      icon: <FaStoreAlt size={20} color='#FFFF' />
    }
  ]
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSelectedOrderType('')
    }, 5000) // 5 seconds

    return () => clearTimeout(timeout)
  }, [selectedOrderType])

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
        <h1 className={styles.brand}>
          {language === 'arabic' ? 'نهاوند' : 'Nahawand'}
        </h1>
      </Navbar.Brand>
      <Nav className={styles.foodOrderType}>
        {orderTypes.map(order => (
          <div
            key={order.type}
            className={`${styles.foodOrderTypeItem} ${
              selectedOrderType === order.type ? styles.activeItem : ''
            }`}
            onClick={() => handleOrderTypeChange(order.type)}
          >
            {order.icon}
            <span className={styles.foodOrderTypeText}>{order.text}</span>
          </div>
        ))}
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
        </Nav>
      </Navbar.Collapse>
      {orderTypes.map(order => {
        if (selectedOrderType === order.type && order.type === 'delivery') {
          return (
            <div className={styles.location} key={order.type}>
              <h4 className={styles.apps}>
                {language === 'arabic' ? 'موجودون على ' : 'Apps'}
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
          )
        } else if (
          selectedOrderType === order.type &&
          order.type !== 'delivery'
        ) {
          return (
            <button
              key={order.type}
              className={`${styles.button} ${
                language === 'arabic' ? styles.ar : ''
              }`}
              onClick={openWhatsApp}
            >
              <AiOutlineWhatsApp size={35} color='white' />
            </button>
          )
        }
        return null
      })}
    </Navbar>
  )
}

export default NavbarApp
