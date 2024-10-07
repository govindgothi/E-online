import React from 'react'
import styles from "./LoginForm.module.css"

const LoginForm = () => {
  return (<>
     <div className={styles.Login_Container}>
      <form action="" className={styles.Form}>
         <h2 className={`${styles.Heading}`}>Login</h2>

        <div className={`${styles.Email} ${styles.InputDiv}`}>
          <label htmlFor="" className={styles.Label}>email</label><br />
          <input type="text" 
           placeholder='username'
          name=''
          onChange={""}
          className={styles.Input_Container} />
          <p className={styles.error}>hello errors</p>
        </div>

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
          <h3>If you are new user? <span style={{color:"yellow", }}>Sign up</span></h3>
          <button className={styles.button}>Login</button>
         </div>
      </form>
    </div>
  </>)
}

export {LoginForm}
