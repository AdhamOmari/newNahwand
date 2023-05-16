import { useSelector } from 'react-redux'
import { MDBFooter, MDBContainer, MDBBtn } from 'mdb-react-ui-kit'
import { FaFacebookF, FaGithub } from 'react-icons/fa'
import { Helmet } from 'react-helmet'
import styles from './style.module.css'
import logo from '../../../public/logos.png'

const Footer = () => {
  // const language = useSelector(state => state.isArabic);

  return (
    <>
      <Helmet>
        <title>Your Website Title</title>
        <meta name='description' content='Your website description' />
        {/* Add other necessary SEO tags */}
      </Helmet>
      <MDBFooter className={`bg-light text-center text-white ${styles.footer}`}>
        <MDBContainer className='p-4 pb-0'>
          <div className={styles.logoContainer}>
            <img src={logo} alt='Logo' className={styles.logo} />
          </div>
          <section className='mb-0'>
            <MDBBtn
              floating
              className={`m-1 ${styles.socialBtn}`}
              style={{ backgroundColor: '#3b5998' }}
              href='#!'
              role='button'
            >
              <FaFacebookF />
            </MDBBtn>
            {/* Rest of the social buttons */}
            <MDBBtn
              floating
              className={`m-1 ${styles.socialBtn}`}
              style={{ backgroundColor: '#333333' }}
              href='#!'
              role='button'
            >
              <FaGithub />
            </MDBBtn>
          </section>
        </MDBContainer>
      </MDBFooter>
    </>
  )
}

export default Footer
