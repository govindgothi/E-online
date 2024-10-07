import React from 'react'
import styles from "./LoginForm.module.css"
const PasswordVerification = () => {
  return (
    <div className={styles.SignUp_Container}>
      <form action="" className={styles.Form}>
         <h2 className={`${styles.Heading}`}>Verification</h2>

        <div className={`${styles.Password} ${styles.InputDiv}`}>
          <label htmlFor="" className={styles.Label}>password</label><br />
          <input type="text" 
          name=''
           placeholder='username'
          onChange={""}
          className={styles.Input_Container} />
          <p className={styles.error}>hello errors</p>
        </div>
          
         <div className={`${styles.SubmitArea} ${styles.InputDiv}`}>
          <h3>6 digit code send on your <span style={{color:"yellow", }}>Email</span></h3>
          <button className={styles.button}>Register</button>
         </div>
      </form>
    </div>
  )
}

export {PasswordVerification}