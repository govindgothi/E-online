import React from "react";
import { Header } from "./components/Header/Header";
import { Categories } from "./components/Header/Categories";
// import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Header></Header>
      <Categories></Categories>
      <Outlet></Outlet>  
      <Footer></Footer>
    </>
  );
};

export default App;


/*
continue in this project 
1 Use of React-redux-toolkit for state managment // reducer,dispatch,selector,middleware
2 data transfer one page another logic using of react router // use onclick properties 
3 use of app.module.css for protect overide name of class and Id 

Mistakes in this project 
1 not adding comment according to function
2 naming convention 
3 Not using figma UI design 

*/ 
