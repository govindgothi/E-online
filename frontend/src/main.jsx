import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import { Index } from "./components/index.jsx";
import { LoginForm } from "./components/RegistrationForm/LoginForm.jsx";
import { SignUpForm } from "./components/RegistrationForm/SignUpForm.jsx";
import { PasswordVerification } from "./components/RegistrationForm/passwordVerification.jsx";
import { PurchaseBag } from "./components/PurchaseBag/PurchaseBag.jsx";
import { UserAccount } from "./components/UserAcoount/UserAccount.jsx";
import { ShowAllProduct } from "./components/Products/ShowAllProduct.jsx";
import { UserDetail } from "./components/UserAcoount/UserDetail.jsx";
import { ManageAddress } from "./components/UserAcoount/ManageAddress.jsx";
import Redis from "./components/UserAcoount/Redis.jsx";
// import { ShowAllProduct } from "./components/Products/ShowAllProduct.jsx";
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="ShowAllProduct" element={<ShowAllProduct />} />
      <Route path="SignUpForm/" element={<SignUpForm />}>
        <Route path="LoginForm" element={<LoginForm />} />
        <Route path="PasswordVerification" element={<PasswordVerification />} />
      </Route>
      <Route path="LoginForm" element={<LoginForm />} />
      <Route path="UserAccount" element={<UserAccount />}>
        <Route path="" element={<UserDetail />} />
        <Route path="ManageAddress" element={<ManageAddress />} />
      </Route>
      <Route path="PurchaseBag" element={<PurchaseBag />} />
      <Route path="ShowAllProduct" element={<ShowAllProduct />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
