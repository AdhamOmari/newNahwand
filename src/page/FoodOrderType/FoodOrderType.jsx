import { useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import {
  FaMotorcycle,
  FaUtensils,
  FaCarSide,
  FaShoppingBag
} from 'react-icons/fa'
import { BsCheckCircle } from 'react-icons/bs'

import styles from './FoodOrderType.module.css'

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

export default FoodOrderType
