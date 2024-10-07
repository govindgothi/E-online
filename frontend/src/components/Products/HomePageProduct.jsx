import React from 'react'
import styles from "./HomePageProduct.module.css"

const HomePageProduct = ({ image, name, discount }) => {
  return (
    <div className={styles.product_card}>
    <img src={image} alt={name} className={styles.product_image} />
    <div className={styles.product_info}>
      <h2 className={styles.product_name}>{name}</h2>
      <p className={styles.discount_percentage}>{discount}% OFF</p>
    </div>
  </div>
  )
}

export { HomePageProduct}
