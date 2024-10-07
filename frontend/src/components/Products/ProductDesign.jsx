import React from 'react';
import styles from'./ProductDesign.module.css'; // Import the external CSS file

const ProductDesign = ({image, name, price, rating, discount, color }) => {
  return (
    <div className={styles.product_card}>
      <img src={image} alt={name} className={styles.product_image} />
      <h2 className={styles.product_name}>{name}</h2>
      <p className={styles.product_price_discount}>
        ${price} <span className={styles.product-discount}>({discount}% OFF)</span>
      </p>
      <p className={styles.product_rating}>Rating: ⭐{rating}</p>
      <p className={styles.product_color}>Color: {color}</p>
      <button className={styles.purchase_button}>Buy Now</button>
      <button className={styles.Cart_button}>Add To Cart</button>
    </div>
  );
};

export {ProductDesign};
