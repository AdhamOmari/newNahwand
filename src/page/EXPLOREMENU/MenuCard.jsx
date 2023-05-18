import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'

// Custom Prev Arrow Component
const CustomPrevArrow = ({ className, style, onClick }) => (
  <button
    type='button'
    className={`${className} ${styles.arrowButton} ${styles.prevButton}`}
    style={{
      ...style,
      left: '-40px',
      width: '0',
      height: '0',
      borderLeft: '0 solid transparent',
      borderRight: '15px solid #113463',
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      color: 'red'
    }}
    onClick={onClick}
  >
    Prev
  </button>
)

// Custom Next Arrow Component
const CustomNextArrow = ({ className, style, onClick }) => (
  <button
    type='button'
    className={`${className} ${styles.arrowButton} ${styles.nextButton}`}
    style={{
      ...style,
      right: '-40px',
      width: '0',
      height: '0',
      borderRight: '0 solid transparent',
      borderLeft: '15px solid #113463',
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent'
    }}
    onClick={onClick}
  >
    Next
  </button>
)

const MenuCard = ({ category }) => {
  const navigate = useNavigate()

  const move = (cat, item) => {
    navigate(`/menu/${cat}`, { state: item })
  }

  const [sliderSettings] = useState({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />
  })

  const itemMargin = 10 // Adjust the value as per your preference

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {Object.entries(category).map(([cat, { image, item }]) => (
            <div
              key={cat}
              className={styles.sliderItem}
              style={{
                marginRight: `${itemMargin}px`
              }}
            >
              <div className={styles.categoryContainer}>
                <img
                  src={image}
                  alt='Image 1'
                  className={styles.categoryImage}
                  loading='lazy' // Add this attribute for lazy-loading
                />
                <button
                  onClick={() => move(cat, item)}
                  className={styles.categoryLink}
                >
                  <h4 className={styles.itemName}>{cat}</h4>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

MenuCard.propTypes = {
  category: PropTypes.objectOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      item: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          calories: PropTypes.number.isRequired,
          image: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired
}

export default MenuCard
