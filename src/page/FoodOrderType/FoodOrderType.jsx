import { useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineWhatsApp } from 'react-icons/ai'

import styles from './FoodOrderType.module.css'

const FoodOrderType = () => {
  const language = useSelector(state => state.isArabic)
  console.log(language)
  const [orderType, setOrderType] = useState('')

  const handleOrderTypeChange = event => {
    setOrderType(event.target.value)
  }

  const orderTypeText = {
    en: {
      delivery: 'Delivery',
      dineIn: 'Dine-in',
      takeout: 'Pickup from the car',
      pickup: 'Pickup from the restaurant'
    },
    arabic: {
      delivery: 'توصيل',
      dineIn: 'التناول في المطعم',
      takeout: 'الاستلام من السيارة',
      pickup: 'الاستلام من المطعم'
    }
  }

  const selectedOrderTypeText = orderTypeText[language] || orderTypeText.en

  const openWhatsApp = () => {
    const whatsappText = language
      ? 'مرحبًا، أرغب في معرفة المزيد عن عناصر القائمة في المطعم  ؟ '
      : 'Hello, I want to know more about the menu items in the restaurant  ?'
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
    <div className={containerClass}>
      <h3>{language === 'arabic' ? 'نوع الطلب' : 'Food Order Type:'}</h3>
      <div className={styles.dropdownContainer}>
        <select
          value={orderType}
          onChange={handleOrderTypeChange}
          className={styles.dropdownSelect}
        >
          <option value=''>{language === 'arabic' ? '-' : '-'}</option>
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
                  ? 'يمكنك العثور علينا على  '
                  : 'You can find us on these apps'}
              </p>
              <ul className={styles.cardList}>
                <li>
                  <a
                    href='https://example.com/hungerstation'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='/HungerStation-01-3.svg'
                      alt='HungerStation'
                      loading='lazy' // Add this attribute for lazy-loading
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://example.com/mrsool'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='/Mrsool-01.svg'
                      alt='Mrsool'
                      loading='lazy' // Add this attribute for lazy-loading
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://example.com/jahez'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='/jahez.svg'
                      alt='Jahez'
                      loading='lazy' // Add this attribute for lazy-loading
                    />
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
