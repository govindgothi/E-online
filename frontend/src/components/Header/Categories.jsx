import React from 'react'
import styles from "./Categories.module.css"
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className={styles.Categories}>
      <span> <Link to='ShowAllProduct' style={{color:"white",textDecoration:"none"}}>Mobile</Link></span>
      <span><Link to='ShowAllProduct' style={{color:"white",textDecoration:"none"}}>Watches</Link></span>
      <span><Link to='ShowAllProduct' style={{color:"white",textDecoration:"none"}}>Earphones</Link></span>
      <span><Link to='ShowAllProduct' style={{color:"white",textDecoration:"none"}}>Samsung</Link></span>
      <span>Accessories</span>
      <span>Offer's</span>

    </div>
  )
}

export {Categories}