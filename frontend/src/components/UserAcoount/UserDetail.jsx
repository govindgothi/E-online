import React from "react";
import styles from "./UserDetail.module.css";
import { useState } from "react";

const UserDetail = () => {
    const [readOnly,setReadOnly]= useState(true)
    const [inputValue, setInputValue] = useState({
        input:""
      });
       console.log(inputValue)
      const handleInputChange = (e) => {
        e.preventDefault()
        // setInputValue(e.target.value); // Update state with the input value
      };
      
      const   handleChange = (e)=>{
        let {name,value} = e.target
          console.log(name,value)
          setInputValue({
            ...inputValue,
            [name]:value
          })
        }
  return (
    <>
      <div className={styles.UserDetailBox}>
        <div className={styles.PersonalInformation}>
          <div className={styles.ShowHeadInfo}>
            <h3 className={styles.personal}>Personal Information </h3>
            <h3 className={styles.edit}>Edit</h3>
          </div>
          <div className={styles.ShowInfo}>
            <textarea
              readOnly={readOnly}
              onSubmit={handleInputChange}
              name="input"
              placeholder="Govind"
              className={styles.textarea}
              value={inputValue.name}
              onChange={handleChange}
            ></textarea>
            <textarea
              onSubmit={handleInputChange}
              name="input"
              placeholder="Gothi"
              className={styles.textarea}
              value={inputValue.name}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
     
        <div className={styles.ShowGenderBox}>
            <h2 className={styles.GenderHead}>Your Gender</h2>
            <div className={styles.RadioButtonBox}>
                <div className={styles.radioKey}></div> <h3 className={styles.Gender}>male</h3>
                <div className={styles.radioKey}></div> <h3 className={styles.Gender}>female</h3>
            </div>
        </div>

        <div className={styles.PersonalInformation}>
          <div className={styles.ShowHeadInfo}>
            <h3 className={styles.personal}>Personal Information </h3>
            <h3 className={styles.edit}>Edit</h3>
          </div>
          <div className={styles.ShowInfo}>
            <textarea
              readOnly={readOnly}
              onSubmit={handleInputChange}
              name="input"
              placeholder="govindgothi5815@gmail.com"
              className={styles.textarea}
              value={inputValue.name}
              onChange={handleChange}
            ></textarea>
          
          </div>
        </div> 

        <div className={styles.PersonalInformation}>
          <div className={styles.ShowHeadInfo}>
            <h3 className={styles.personal}>Personal Information </h3>
            <h3 className={styles.edit}>Edit</h3>
          </div>
          <div className={styles.ShowInfo}>
            <textarea
              readOnly={readOnly}
              onSubmit={handleInputChange}
              name="input"
              placeholder="+91 8839571505"
              className={styles.textarea}
              value={inputValue.name}
              onChange={handleChange}
            >govind</textarea>
            
          </div>
        </div>

      </div>
    </>
  );
};

export { UserDetail }