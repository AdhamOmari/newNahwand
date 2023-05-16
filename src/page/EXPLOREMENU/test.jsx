<div class="uk-margin"></div>
<div class="uk-section"><div class="owl-carousel owl-theme">
{Object.entries(category).map(([cat, { image, item }]) => (
        <div key={cat} className={`${styles.clider} ${styles.card}`}>
          <img src={image} alt='Image 1' className={styles['card-img-top']} />
          <div className={styles['card-body']}>
            <Link
              to={`/menu/${cat}`}
              className={`${styles.cardTitle} ${styles.title}`}
            >
              {cat}
            </Link>
          </div>
        </div>
      ))}
</div>
  </div>