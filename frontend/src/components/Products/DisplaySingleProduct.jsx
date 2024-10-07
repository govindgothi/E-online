import React from "react";
import styles from "./DisplaySingleProduct.module.css";
import { IoMdStar } from "react-icons/io";
import { ShowReview } from "../ReviewArea/ShowReview";

const DisplaySingleProduct = () => {
  return (
    <>
      <div className={styles.DisplaySingleProduct_Containet}>
        <div className={styles.RightBox}>
          <div className={styles.Image_Container}>
            <div className={styles.ArrayOfImage}>
              <div className={styles.image}><img src="https://rukminim2.flixcart.com/image/400/400/xif0q/smartwatch/0/n/c/-original-imagy97zqacba8e3.jpeg?q=50" alt="" className={styles.img} /></div>
              <div className={styles.image}><img src="https://rukminim2.flixcart.com/image/400/400/xif0q/smartwatch/0/n/c/-original-imagy97zqacba8e3.jpeg?q=50" alt="" className={styles.img} /></div>
              <div className={styles.image}><img src="https://rukminim2.flixcart.com/image/400/400/xif0q/smartwatch/0/n/c/-original-imagy97zqacba8e3.jpeg?q=50" alt="" className={styles.img} /></div>
              <div className={styles.image}><img src="https://rukminim2.flixcart.com/image/400/400/xif0q/smartwatch/0/n/c/-original-imagy97zqacba8e3.jpeg?q=50" alt="" className={styles.img} /></div>
              <div className={styles.image}><img src="https://rukminim2.flixcart.com/image/400/400/xif0q/smartwatch/0/n/c/-original-imagy97zqacba8e3.jpeg?q=50" alt="" className={styles.img} /></div>
              <div className={styles.image}><img src="https://rukminim2.flixcart.com/image/400/400/xif0q/smartwatch/0/n/c/-original-imagy97zqacba8e3.jpeg?q=50" alt="" className={styles.img} /></div>
            </div>
            <div className={styles.SingleImage}>
              <img src="https://rukminim2.flixcart.com/image/400/400/xif0q/smartwatch/0/n/c/-original-imagy97zqacba8e3.jpeg?q=50" alt="" className={styles.DisplayImage} />
            </div>
          </div>
          <div className={styles.Buttons}> 
            <button className={styles.Cart_Button}>Add to Cart</button>
            <button className={styles.Buy_Button}>Buy Now</button>
          </div>
        </div>
        <div className={styles.Detail_Container}>
          <p className={styles.NameOfProduct}>Noise Buds MVP102 with Dual Pairing, 60 Hours Playtime,Ultra Low Latency,ENC,Quad Mic Bluetooth  (Rogue Grey, True Wireless)</p>
          <h3 className={styles.ProductRating}> <p className={styles.Star}><span>4<IoMdStar className={styles.StarIcon}/></span></p> <p className={styles.review}> {"1240"} rating & {"1240"} review</p></h3>
          <h3 className={styles.price}>$1299 <span className={styles.original}>3999</span> <span className={styles.Offs}>33% off</span></h3>
           <div className={styles.HighlightArea}><h3>Highlight</h3>
           <ul className={styles.HighlightFeature}>
              <li className={styles.list}>With Mic:Yes</li>
              <li className={styles.list}>[Best-in-class Sound Quality]: 10.4mm+6mm dynamic dual driver, LHDC5.0 Bluetooth CODEC and high resolution certification makes the product best in its sound quality with deeper bass, delicate treble and clear vocals</li>
              <li className={styles.list}>[Sliding Volume Control]: Slide on the surface of touch area of buds to adjust the volume.Sliding up increases the volume, while sliding down decreases the volume</li>
           </ul></div>
          <ShowReview />
        </div>
      </div>
    </>)
}

export { DisplaySingleProduct };
