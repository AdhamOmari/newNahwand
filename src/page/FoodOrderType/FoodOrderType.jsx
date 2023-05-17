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
      takeout: 'Takeout'
    },
    arabic: {
      dineIn: 'التناول في المطعم',
      delivery: 'توصيل',
      takeout: 'الطلب للخارج'
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
      <div className={styles.radioGroupClass}>
        <label>
          <input
            type='radio'
            value='dine-in'
            checked={orderType === 'dine-in'}
            onChange={handleOrderTypeChange}
          />
          <span
            className={styles.customRadio}
            onClick={() => setOrderType('dine-in')}
          ></span>
          <span className={styles.radioLabel}>
            {selectedOrderTypeText.dineIn}
          </span>
        </label>
        <label>
          <input
            type='radio'
            value='delivery'
            checked={orderType === 'delivery'}
            onChange={handleOrderTypeChange}
          />
          <span
            className={styles.customRadio}
            onClick={() => setOrderType('delivery')}
          ></span>
          <span className={styles.radioLabel}>
            {selectedOrderTypeText.delivery}
          </span>
        </label>
        <label>
          <input
            type='radio'
            value='takeout'
            checked={orderType === 'takeout'}
            onChange={handleOrderTypeChange}
          />
          <span
            className={styles.customRadio}
            onClick={() => setOrderType('takeout')}
          ></span>
          <span className={styles.radioLabel}>
            {selectedOrderTypeText.takeout}
          </span>
        </label>
      </div>
      {orderType && (
        <>
          {orderType === 'dine-in' && (
            <button
              className={`${styles.button} ${
                language === 'arabic' ? styles.ar : ''
              }`}
              onClick={openWhatsApp}
            >
              {language === 'ar'
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
              <p>{language === 'arabic' ? 'الموقع' : 'Location:'}</p>
              <p
                className={`${styles.apps} ${
                  language === 'arabic' ? styles.ar : ''
                }`}
              >
                {language === 'arabic'
                  ? 'يمكنك العثور علينا على تلك التطبيقات'
                  : 'You can find us on these apps'}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default FoodOrderType
