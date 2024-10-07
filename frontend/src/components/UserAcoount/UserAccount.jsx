import React from "react";
import styles from "./UserAccount.module.css";
import { PiWalletFill } from "react-icons/pi";
import { FaChevronRight } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaPowerOff } from "react-icons/fa6";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { UserDetail } from "./UserDetail";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ManageAddress } from "./ManageAddress";
const UserAccount = () => {
  return (
    <>
      <div className={styles.UserAccountBox}>
        <div className={styles.RightBox}>
          <div className={styles.UsernameDiv}>
            <div className={styles.UserProfile}>
              <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid" alt="" className={styles.Profile} />
            </div>
            <div className={styles.UserName}>
              <h4>Hello,</h4>
              <h2 className={styles.Name}>Govind Gothi</h2>
            </div>
          </div>
          <div className={styles.UserDetail}>
            <div className={styles.UserOrder}>
              <h2 className={styles.WalletOrderIcon}>
                <PiWalletFill />
              </h2>
              <h2 className={styles.Order}><Link to='ManageAddress'>MY ORDERS</Link></h2>
              <h3 className={styles.RightArrow}>
                <FaChevronRight />
              </h3>
            </div>
            <div className={styles.Account}>
              <h2 className={styles.AccountIcon}>
                <CgProfile />
              </h2>
              <div className={styles.AccountFunction}>
                <h2 className={styles.HeadAccount}><Link to='ManageAddress'>ACOOUNT SETTING</Link></h2>
                <h3 className={styles.MenuAccount}>Profile Information</h3>
                <h3 className={styles.MenuAccount}>Manage Adresses</h3>
                <h3 className={styles.MenuAccount}>PAN Card Information</h3>
              </div>
            </div>
            <div className={styles.Pyment}>
              <h2 className={styles.PymentIcon}>
              <MdAccountBalanceWallet />
              </h2>
              <div className={styles.PymentFunction}>
                <h2 className={styles.HeadAccount}>Pyment</h2>
                <h3 className={styles.MenuAccount}>Gift Cards</h3>
                <h3 className={styles.MenuAccount}>Save UPI</h3>
                <h3 className={styles.MenuAccount}>Save Cards</h3>
              </div>
            </div>
            <div className={styles.Stuff}>
              <h2 className={styles.StuffIcon}>
                <MdPermContactCalendar />
              </h2>
              <div className={styles.StuffFunction}>
                <h2 className={styles.HeadAccount}>MY STUFF</h2>
                <h3 className={styles.MenuAccount}>My Coupon</h3>
                <h3 className={styles.MenuAccount}>My Review & Rating</h3>
                <h3 className={styles.MenuAccount}>All Notification</h3>
                <h3 className={styles.MenuAccount}>Whishlist</h3>
              </div>
            </div>
            <div className={styles.UserLogOut}>
              <h2 className={styles.PowerIconLogout}>
                <FaPowerOff />
              </h2>{" "}
              <h2 className={styles.Logout}>LogOut</h2>{" "}
            </div>
          </div>
        </div>
        <div className={styles.LeftBox}>
          <Outlet></Outlet>
           {/* <UserDetail></UserDetail> */}
           {/* <ManageAddress /> */}
        </div>
      </div>
    </>
  );
};

export { UserAccount };
