import { useState } from 'react'
import { useSelector } from 'react-redux'

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
    window.open('https://api.whatsapp.com/send?phone=PHONE_NUMBER', '_blank')
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
            <option key={key} value={key}>
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
              {language === 'arabic'
                ? 'ابدأ الطلب عبر الواتساب'
                : 'Start Order via WhatsApp'}
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
              <ul>
                <li>HungerStation</li>
                <li>Mrsool</li>
                <li>jahez</li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default FoodOrderType
