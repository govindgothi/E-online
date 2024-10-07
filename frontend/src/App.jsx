import React from "react";
import { Header } from "./components/Header/Header";
import { Categories } from "./components/Header/Categories";
// import "./App.css";
import { Outlet } from "react-router-dom";
// import { ProductCard } from "./components/PurchaseBag/ProductCard";
// import { PriceDetailCard } from "./components/PurchaseBag/PriceDetailCard";
// import { UserAccount } from "./components/UserAcoount/UserAccount";
// import { PurchaseBag } from "./components/PurchaseBag/PurchaseBag";
// import { ShowAllProduct } from "./components/Products/ShowAllProduct";
// import { ProductDesign } from "./components/Products/ProductDesign";
// import { HomePageProduct } from "./components/Products/HomePageProduct";
// import { SignUpForm } from "./components/RegistrationForm/SignUpForm";
// import { LoginForm } from "./components/RegistrationForm/LoginForm";
// import { PasswordVerification } from "./components/RegistrationForm/passwordVerification";
// import { DisplaySingleProduct } from "./components/Products/DisplaySingleProduct";
import { Footer } from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Header></Header>
      <Categories></Categories>
      <Outlet></Outlet>  
      <Footer></Footer>
      {/* <DisplaySingleProduct /> */}
       {/* <ShowAllProduct /> */}
      {/* <PurchaseBag></PurchaseBag> */}
      {/* <UserAccount></UserAccount>  */}
      {/* <HomePageProduct 
         image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70"  
         name="Product Name"
         discount={25}  /> */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <LoginForm></LoginForm> */}
      {/* <PasswordVerification></PasswordVerification> */}
    </>
  );
};

export default App;
