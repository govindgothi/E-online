import React from 'react'
import styles from "./Header.module.css"
import { Link } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
//import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { LuCodesandbox } from "react-icons/lu";
import { FaGift } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";

// import { useSelector } from 'react-redux';


function Header() {
  // const cart= useSelector(store=>store.cart)

  
  return (
    <div className={styles.Headerbox}>
      <div className={styles.Logo} ><Link to="/" className={styles.Logo}>Logo</Link></div>
      <div className={styles.Input}>
      <IoSearchSharp className={styles.icon}/>
      <input type="text" placeholder='search watch' name='product' className={styles.input}/>
      </div>
      <div>
      <div className={styles.Login}><CgProfile /><Link to='LoginForm' style={{color:"white", textDecoration:"none"}}><span>login</span></Link></div>
      <div className={styles.menu}>
         <div className={styles.div1}><h3 className={styles.customer}>New Customer ?</h3><h3 className={styles.signIn}><Link to='SignUpForm'>Sign In</Link></h3></div>
         <div className={styles.div}> <h3 className={styles.icon}><CgProfile /></h3><h3 className={styles.iconName}><Link to='UserAccount'> My Profile</Link></h3> </div>
          <div className={styles.div}><h3 className={styles.icon}><LuCodesandbox /></h3><h3 className={styles.iconName}>Order</h3></div>
          <div className={styles.div}><h3 className={styles.icon}><CiHeart /></h3><h3 className={styles.iconName}>Whishlist</h3></div>
          <div className={styles.div}><h3 className={styles.icon}><FaGift /></h3><h3 className={styles.iconName}>Gift</h3></div>
        <div className={styles.div}> <h3 className={styles.icon}><IoPricetagOutline /></h3><h3 className={styles.iconName}>Voucher</h3></div>
      </div>
      </div>
      <div className={styles.Cart}>
        <div className={styles.seller}>Become a seller</div>
        <div className={styles.Cartinside}>
        <div className={styles.Cart}><Link to="PurchaseBag" className={styles.Cart}>Cart</Link></div><div className={styles.length}>{"3"}</div>
        </div>
      </div>
    </div>
  )
}

export {Header}
