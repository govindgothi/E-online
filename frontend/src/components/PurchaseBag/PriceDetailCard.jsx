import React from 'react'
import styles from "./PriceDetailCard.module.css"
const PriceDetailCard = () => {
  return (<>
    <div className={styles.PriceDetailCardBox}>
        <h2 className={styles.Detail}>PRICE DETAILS</h2>
        <div className={styles.PriceSectionBox}>
            <div className={styles.PriceSectionRight}>
                <h3>Price (1 item)</h3>
                <h3>Discount</h3>
                <h3>Platform Fee</h3>
                <h3>Delivery Charges</h3>
            </div>
            <div className={styles.PriceSectionLeft}>
                <h3>1000</h3>
                <h3>100</h3>
                <h3>3</h3>
                <h3>40</h3>
            </div>
        </div>
        <div className={styles.TotalPrice}>
            <h3>Total Price</h3>
            <h3>890</h3>
        </div>
        <h3 className={styles.PriceSave}>You will save ₹2,793 on this order</h3>
    </div>
    </> )
}

export {PriceDetailCard}
