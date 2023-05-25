import { Helmet } from 'react-helmet'
import styles from './style.module.css'
import { useSelector } from 'react-redux'

const StoreLocation = () => {
  const { isArabic: language } = useSelector(state => state.rootReducer)
  const latitude = 26.298368369233014 // Replace with the latitude of the target location
  const longitude = 50.18112060674594 // Replace with the longitude of the target location

  const locationName =
    language === 'arabic' ? 'مطعم نهاوند الاعلى تقييما' : 'Your Store Location'

  return (
    <div className={`${styles.card} ${styles['store-location']}`} id='Location'>
      <Helmet>
        <title>
          {language === 'arabic'
            ? 'موقع مطعم  نهاوند  الاعلى  تقييما مشويات'
            : 'Store Location'}
          - Your Website
        </title>
        <meta
          name='description'
          content={
            language === 'arabic'
              ? 'مطعم نهاوند الاعلى تقييما'
              : 'Your Store Location - The best restaurant in town'
          }
        />
      </Helmet>
      <div className={styles['map-container']}>
        <iframe
          title='Store Map'
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0.003235!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13ab8f64d87915e0!2s${encodeURIComponent(
            locationName
          )}!5e0!3m2!1sen!2sjo!4v1683648975856!5m2!1sen!2sjo`}
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
