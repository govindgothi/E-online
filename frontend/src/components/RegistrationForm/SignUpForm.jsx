import React, { useState } from 'react';
import styles from './SignUpForm.module.css'; // Import the external CSS file
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  
  return (<>
    <div className={styles.SignUp_Container}>
      <form action="" className={styles.Form}>
         <h2 className={`${styles.Heading}`}>Create Account</h2>
        <div className={`${styles.Username} ${styles.InputDiv}`}>
          <label htmlFor="" className={styles.Label}>username </label><br />
          <input type="text" 
          placeholder='username'
          name=''
          onChange={""}
          className={styles.Input_Container} />
          <p className={styles.error}>hello errors</p>
        </div>

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
          

        <div className={`${styles.Contact} ${styles.InputDiv}`}>
          <label htmlFor="" className={styles.Label}>contact</label><br />
          <input type="text" 
          name=''
           placeholder='username'
          onChange={""}
          className={styles.Input_Container} />
          <p className={styles.error}>hello errors</p>
        </div>
          
         <div className={`${styles.SubmitArea} ${styles.InputDiv}`}>
          <h3>If you are already register? <span ><Link to='/LoginForm' style={{color:"yellow", }}>Login</Link></span></h3>
          <button className={styles.button}>SignUp</button>
         </div>
      </form>
    </div>
  </>);
};

export { SignUpForm};
