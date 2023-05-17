import PropTypes from 'prop-types'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'

const MenuCard = ({ category }) => {
  const navigate = useNavigate()
  const move = (cat, item) => {
    navigate(`/menu/${cat}`, { state: item })
  }

  console.log(category)
  const [sliderSettings] = useState({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
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
          slidesToScroll: 1,
          prevArrow: (
            <button
              type='button'
              className={`${styles.arrowButton} ${styles.prevButton}`}
            >
              Prev
            </button>
          ),
          nextArrow: (
            <button
              type='button'
              className={`${styles.arrowButton} ${styles.nextButton}`}
            >
              Next
            </button>
          )
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    prevArrow: (
      <button
        type='button'
        className={`${styles.arrowButton} ${styles.prevButton}`}
      >
        Prev
      </button>
    ),
    nextArrow: (
      <button
        type='button'
        className={`${styles.arrowButton} ${styles.nextButton}`}
      >
        Next
      </button>
    )
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
