import styles from './style.module.css'
import { useSelector } from 'react-redux'

const StoreLocation = () => {
  const language = useSelector(state => state.isArabic)

  return (
    <div className={`${styles.card} ${styles['store-location']}`} id='Location'>
      <h2 className={styles['map-title']}>
        {language ? ' موقعنا على الخرائط' : 'Store Location'}
      </h2>
      <div className={styles['map-container']}>
        <iframe
          title='Store Map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.2152711897796!2d50.18081453585139!3d26.298410475653522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e7d309dbe141%3A0x13ab8f64d87915e0!2sYour%20Store%20Location!5e0!3m2!1sen!2sjo!4v1683648975856!5m2!1sen!2sjo'
          width='100%'
          height='450'
          frameBorder='0'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>
    </div>
  )
}

export default StoreLocation
