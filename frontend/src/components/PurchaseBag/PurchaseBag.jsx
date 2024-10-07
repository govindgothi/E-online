import React from 'react'
import styles from "./PurchaseBag.module.css"
import { PriceDetailCard } from './PriceDetailCard.jsx'
import { ProductCard } from './ProductCard.jsx'
const PurchaseBag = () => {
  return (
    <div className={styles.PurchaseBag}>
      <div className={styles.productContainer}>
      <ProductCard></ProductCard>
     
      <h2 className={styles.PlaceOrderButton}>place order</h2>
      </div>
      <PriceDetailCard></PriceDetailCard>
    </div>
  )
}

export {PurchaseBag}
