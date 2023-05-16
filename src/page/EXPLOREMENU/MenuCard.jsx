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
          slidesToShow: 2
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
        style={{
          position: 'absolute',
          left: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: '1',
          background: 'rgba(0, 0, 0, 0.6)',
          color: '#fff',
          padding: '8px',
          borderRadius: '50%',
          border: 'none',
          outline: 'none',
          cursor: 'pointer'
        }}
      >
        Prev
      </button>
    ),
    nextArrow: (
      <button
        type='button'
        style={{
          position: 'absolute',
          right: '0',
          top: '50%',
          transform: 'translateY(50%)',
          zIndex: '1',
          background: '#000',
          color: '#000',
          padding: '8px',
          borderRadius: '50%',
          border: 'none',
          outline: 'none',
          cursor: 'pointer'
        }}
      >
        Next{' '}
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
                />

                <button
                  onClick={() => move(cat, item)}
                  className={styles.categoryLink}
                >
                  <h4>{cat}</h4>
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
