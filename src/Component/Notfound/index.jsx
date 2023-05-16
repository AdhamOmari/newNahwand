import styles from './style.module.css'
import Logo from '../../../public/image-003.svg'
import { IoIosArrowBack } from 'react-icons/io'
import { useSelector } from 'react-redux'

export default function NotFound () {
  const handleGoBack = () => {
    window.location.href = '/'
  }
  const isArabic = useSelector(state => state.isArabic)

  return (
    <div className={styles.notfound}>
      <img src={Logo} alt='Logo' className={styles.logo} />
      <h1 className={styles.title}>
        {' '}
        {isArabic ? 'صفحة غير موجودة' : 'Page Not Found'}
      </h1>
      <IoIosArrowBack className={styles.arrow} onClick={handleGoBack} />
    </div>
  )
}
