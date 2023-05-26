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
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

import styles from './style.module.css'

const NavbarApp = () => {
  const { isArabic: language } = useSelector(state => state.rootReducer)
  const [selectedOrderType, setSelectedOrderType] = useState('')

  useEffect(() => {}, [language])

  const handleOrderTypeChange = type => {
    setSelectedOrderType(type)
  }

  const navbarDirection = language === 'arabic' ? 'rtl' : 'ltr'

  const openWhatsApp = () => {
    const encodedText =
      'مرحبًا، أرغب في معرفة المزيد عن عناصر القائمة في المطعم ؟'

    const whatsappLink = `https://api.whatsapp.com/send?phone=966553104477&text=${encodeURIComponent(
      encodedText
    )}`
    window.open(whatsappLink, '_blank')
  }

  const pageTitles =
    language === 'arabic'
      ? 'بيت المشاوي  نهاوند- Nahawand'
      : 'نهاوند Nahawand - بيت المشاوي'

  const orderTypes = [
    {
      type: 'delivery',
      text: language === 'arabic' ? 'توصيل' : 'Delivery',
      icon: <FaMotorcycle size={20} color='#FFFF' />,
      label: language === 'arabic' ? 'نهاوند توصيل' : 'Delivery'
    },
    {
      type: 'dineIn',
      text: language === 'arabic' ? 'في المطعم' : 'Dine-in',
      icon: <FaUtensils size={20} color='#FFFF' />,
      label: language === 'arabic' ? 'نهاوند في المطعم' : 'Dine-in'
    },
    {
      type: 'takeout',
      text: language === 'arabic' ? 'اتصل بنا' : 'Call us',
      icon: <FaPhoneAlt size={20} color='#FFFF' />,
      label: language === 'arabic' ? 'نهاوند اتصل بنا' : 'Call us'
    },
    {
      type: 'pickup',
      text: language === 'arabic' ? 'الاستلام' : 'Pickup from the restaurant',
      icon: <FaStoreAlt size={20} color='#FFFF' />,
      label:
        language === 'arabic' ? 'نهاوند الاستلام' : 'Pickup from the restaurant'
    }
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSelectedOrderType('')
    }, 5000) // 5 seconds

    return () => clearTimeout(timeout)
  }, [selectedOrderType])
  const siteDescription =
    'اختيار الشيف، سلطات طازجة بيت المشاوي، مشويات، مشاوي، أفضل مطعم، ريش غنم، اكل مصري، اكل لبناني، برياني هندي، مقبلات لبناني، باستا ايطالية، مشاوي شامية، مشاوي تركية، مانتو روز، كارديو كافيه لحوم بلدية، دجاج طازج'

  return (
    <>
      <Helmet>
        <title>{pageTitles}</title>
        <meta name='description' content={siteDescription} />
        <meta
          name='keywords'
          content='restaurant, food, menu, chef, delivery'
        />
        <meta
          name='address'
          content='الخبر السعودية، شارع حي العليا - شارع فراس بن النضر'
        />
        <meta name='keywords' content='مطعم، طعام، قائمة طعام، شيف، توصيل' />
        <meta name='author' content='نهاوند بيت المشاوي ' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='canonical' href='https://www.nahawandbbq.com/' />
      </Helmet>
      <Navbar
        expand='lg'
        variant='dark'
        sticky='top'
        className={styles.navbar}
        dir={navbarDirection}
        aria-label={language === 'arabic' ? 'القائمة العلوية' : 'Top Menu'}
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
              aria-label={order.label}
              role='button'
              tabIndex={0}
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
            <Nav.Link
              as={Link}
              to='/'
              className={styles.navLink}
              smooth
              aria-label={language === 'arabic' ? 'الرئيسية' : 'Home'}
            >
              {language === 'arabic' ? 'الرئيسية' : 'Home'}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/menu'
              className={styles.navLink}
              smooth
              aria-label={language === 'arabic' ? 'القائمة' : 'Menu'}
            >
              {language === 'arabic' ? 'القائمة' : 'Menu'}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/ChefSelection'
              className={styles.navLink}
              smooth
              aria-label={
                language === 'arabic' ? 'اختيار الشيف' : `Chef's Selection`
              }
            >
              {language === 'arabic' ? 'اختيار الشيف' : `Chef's Selection`}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/Delivery'
              className={styles.navLink}
              smooth
              aria-label={language === 'arabic' ? 'توصيل' : 'Delivery'}
            >
              {language === 'arabic' ? 'توصيل' : 'Delivery'}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/RateUs'
              className={styles.navLink}
              smooth
              aria-label={language === 'arabic' ? 'قيِّمنا' : 'Rate US'}
            >
              {language === 'arabic' ? 'قيِّمنا' : 'Rate US'}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {orderTypes.map(order => {
          if (selectedOrderType === order.type && order.type === 'delivery') {
            return (
              <div className={styles.location} key={order.type}>
                <h4 className={styles.apps}>
                  {/* {language === 'arabic' ? 'موجودون على ' : 'Apps'} */}
                </h4>
                <ul className={styles.cardList}>
                  <li>
                    <a href='/' aria-label='App 1'>
                      <img
                        src='/HungerStation-01-3.svg'
                        alt='App 1'
                        className={styles.cardImage}
                      />
                    </a>
                  </li>
                  <li>
                    <a href='/' aria-label='App 2'>
                      <img
                        src='/Mrsool-01.svg'
                        alt='App 2'
                        className={styles.cardImage}
                      />
                    </a>
                  </li>
                  <li>
                    <a href='/' aria-label='App 3'>
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
                aria-label={language === 'arabic' ? 'واتساب' : 'WhatsApp'}
              >
                <AiOutlineWhatsApp size={45} color='white' />
              </button>
            )
          }
          return null
        })}
      </Navbar>
    </>
  )
}

export default NavbarApp
