import React from 'react'
import styles from "./ProductCard.module.css"
import { HiPlusSmall } from "react-icons/hi2";
import { RxMinus } from "react-icons/rx";
import { IoTrashBinOutline } from "react-icons/io5";

const ProductCard = () => {
  return (
    // <div className={styles.ProductCardBox}>
       <div className={styles.container}>
         <div className={styles.image}><img src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM=" alt="" className={styles.imge} /></div>
         <div className={styles.detail}>
            <h2 className={`${styles.Headcontainer} ${styles.heading1}`}>Noise Colorfit Icon 2 1.8'' Display with Bluetooth Calling, AI Voice Assistant Smartwatch  (Black Strap, Regular)</h2>
            <h3 className={`${styles.Headcontainer} ${styles.heading2}`}>color: yellow</h3>
            <h2 className={`${styles.Headcontainer} ${styles.heading3}`}>$12,999</h2>
            <div className={styles.quantity}><HiPlusSmall /> <span className={styles.count}>4</span> <RxMinus /></div>
         </div>
         <span ><IoTrashBinOutline className={styles.remove} /></span>
       </div>
    // </div>
  )
}

export  {ProductCard}
