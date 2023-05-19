import { useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineWhatsApp } from 'react-icons/ai'

import styles from './FoodOrderType.module.css'

const FoodOrderType = () => {
  const language = useSelector(state => state.isArabic)
  const [orderType, setOrderType] = useState('')

  const handleOrderTypeChange = event => {
    setOrderType(event.target.value)
  }

  const orderTypeText = {
    en: {
      dineIn: 'Dine-in',
      delivery: 'Delivery',
      takeout: 'Pickup from the car',
      pickup: 'Pickup from the restaurant'
    },
    arabic: {
      dineIn: 'التناول في المطعم',
      delivery: 'توصيل',
      takeout: 'الاستلام من السيارة',
      pickup: 'التناول في المطعم'
    }
  }

  const selectedOrderTypeText = orderTypeText[language] || orderTypeText.en

  const openWhatsApp = () => {
    const whatsappText = 'Your WhatsApp message' // Replace with your desired WhatsApp message
    window.open(
      `https://api.whatsapp.com/send?phone=962796087362&text=${encodeURIComponent(
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
    <div className={containerClass}>
      <h3>{language === 'arabic' ? 'نوع الطلب' : 'Food Order Type:'}</h3>
      <div className={styles.dropdownContainer}>
        <select
          value={orderType}
          onChange={handleOrderTypeChange}
          className={styles.dropdownSelect}
        >
          <option value=''>
            {language === 'arabic' ? 'اختر نوع الطلب' : 'Select Order Type'}
          </option>
          {Object.keys(selectedOrderTypeText).map(key => (
            <option key={key} value={key} className={styles.delivery}>
              {selectedOrderTypeText[key]}
            </option>
          ))}
        </select>
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
            <div
              className={`${styles.location} ${
                language === 'arabic' ? styles.ar : ''
              }`}
            >
              <p
                className={`${styles.apps} ${
                  language === 'arabic' ? styles.ar : ''
                }`}
              >
                {language === 'arabic'
                  ? 'يمكنك العثور علينا على تلك التطبيقات'
                  : 'You can find us on these apps'}
              </p>
              <ul className={styles.cardList}>
                <li>
                  <a
                    href='https://example.com/hungerstation'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src='/HungerStation-01-3.svg' alt='HungerStation' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://example.com/mrsool'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src='/Mrsool-01.svg' alt='Mrsool' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://example.com/jahez'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src='/jahez.svg' alt='Jahez' />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default FoodOrderType
