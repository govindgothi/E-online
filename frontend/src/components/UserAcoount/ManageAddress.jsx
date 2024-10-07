import React from 'react'
import styles from "./ManageAddress.module.css"

const ManageAddress = () => {
  return (<>
  <div className={styles.Address_Container}>
      <h2 className={styles.Address_Heading}>Manage Address</h2>
      <h3 className={styles.Add_Address}> +&nbsp; Add a new Address</h3> 
      <div className={styles.Edited_Address}>
        <h6>work</h6>
         <h3>Govind Gothi  8839571505</h3>
         <h4>89 Kavita kirana store, Shree ram nagar, kanadia road , kalimata mandir bengali, Indore, Madhya Pradesh - 452016</h4>
      </div>
  </div>
  </>)
}

export {ManageAddress}
