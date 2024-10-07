import React from 'react'
import styles from "./Footer.module.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.Footerbox}>
      <div className={styles.FooterDetail}></div>
      <div className={styles.FooterIconBox}>
        <div className={styles.Facebook}><FaFacebookSquare /></div>
        <div className={styles.Facebook}><FaXTwitter /></div>
        <div className={styles.Facebook}><FaInstagramSquare /></div>
      </div>
    </div>
  )
}

export {Footer}
