import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
// Redux
import { connect } from "react-redux";
import * as actionTypes from "./store/actions";

import "./utils/firebase";

import Sidebar from "./components/Sidebar/sidebar";

import { LanguageProvider } from "./utils/language/Language";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/LoginPage/SignupPage";
import OtpScreen from "./pages/LoginPage/OtpScreen";
import ForgotPassword from "./pages/LoginPage/ForgotPassword";
import ForgotPswdOtp from "./pages/LoginPage/ForgotPswdOtp";
import ResetPassword from "./pages/LoginPage/ResetPassword";
import ChangePassword from "./pages/LoginPage/ChangePassword";

import AllBlogs from "./pages/NavbarCarrot/Blogs/AllBlogs";
import BlogDetails from "./pages/NavbarCarrot/Blogs/BlogDetails";

import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Protecting from "./components/protecting/Protecting";
import Shop_SecondComp from "./components/shop_secondcomp/page";
import About_Us from "./components/About_Us/About_us";
import Videosection from "./components/videosection/videosection";
import Bodypart from "./components/bodypart/bodypart";
import Propfile_setting from "./components/Profile_setting/Propfile_setting";
import Purchase_step from "./components/purchase_step/purchase_step";
import Scroller from "./components/scroller/Scroller";
import Scrollertwo from "./components/scrollertwo/Scrollertwo";
import Consume from "./components/consume/Consume";
import Slider_section from "./components/slider_section/Slider_section";
import Footer from "./components/footer/footer";
import Offer from "./components/offer/Offer";
import Ordernow from "./components/order_now/order";
import Shipping from "./components/shipping/shiping";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import Order_Details from "./components/Order_Details/Order_Details";
import Order_Details_Cancel from "./components/Order_Details/order_details_cancel";
import Faqbar from "./components/faq/Faq";
import Notification from "./components/notification/Notification";
import { useNavigate } from "react-router-dom";
import About_Page from "./components/About_Us/About_page";
import Podcast from "./components/podcast/podcast";
import Ongoing from "./components/OrderHistory/OngoingOrder";
import Dilivered from "./components/OrderHistory/Diliverd_order";
import CancelOrder from "./components/OrderHistory/CancelOrder";
import Contact_us from "./components/contact_us/Contact_us";
import Refer_and_earn from "./components/refer_and_earn/Refer_and_earn";
import Reviews from "./components/reviews/Reviews";
import Ingredients_benefits from "./components/ingredients&benefits/ingredients&benefits";

const AllRoutes = (props) => {
  const {
    defaultState,
    setDefaultState,
    userData,
    userToken,
    deviceToken,
    setDeviceToken,
  } = props;
  const naviagte = useNavigate();

  const [isOpenRight, setIsOpenRight] = useState(false);

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleRight = () => {
    setIsOpenRight(!isOpen);
  };

  console.log("rajan");

  const token = localStorage.getItem("access_token");

  const shopnow = () => {
    // if (token != null) {
    //   naviagte("/shop-now");
    // } else {
    //   naviagte("/login");
    // }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              toggle={toggle}
              setIsOpen={setIsOpen}
              shopnow={shopnow}
            />
            <Header toggle={toggle} />
            <Banner shopnow={shopnow} />
            <Scroller />

            <Protecting shopnow={shopnow} />
            <Videosection />
            <Bodypart />
            <Purchase_step shopnow={shopnow} />
            {/* <Plan shopnow={shopnow} /> */}
            <Scrollertwo />
            <Consume />
            <Slider_section />
            <About_Us setIsOpen={setIsOpen} />
            <Offer />
            <Footer />
          </>
        }
      />

      <Route
        path="/shop"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              toggle={toggle}
              setIsOpen={setIsOpen}
              shopnow={shopnow}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Protecting />
            <Shop_SecondComp />
          </>
        }
      />
      <Route
        path="/aboutUs"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggle={toggle}
              shopnow={shopnow}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <About_Page />
          </>
        }
      />

      <Route
        path="/login"
        exact
        element={
          <>
            {/* <Header toggle={toggle} /> */}
            <LoginPage />
          </>
        }
      />
      <Route
        path="/signup"
        exact
        element={
          <>
            {/* <Header toggle={toggle} /> */}
            <SignupPage />
          </>
        }
      />
      <Route
        path="/OtpScreen"
        exact
        element={
          <>
            {/* <Header toggle={toggle} /> */}
            <OtpScreen />
          </>
        }
      />
      <Route
        path="/verifyOtp"
        exact
        element={
          <>
            {/* <Header toggle={toggle} /> */}
            <OtpScreen />
          </>
        }
      />
      <Route
        path="/forgot"
        exact
        element={
          <>
            {/* <Header toggle={toggle} /> */}
            <ForgotPassword />
          </>
        }
      />
      <Route
        path="/forgototp"
        exact
        element={
          <>
            {/* <Header toggle={toggle} /> */}
            <ForgotPswdOtp />
          </>
        }
      />

      <Route
        path="/resetpassword"
        exact
        element={
          <>
            {/* <Header toggle={toggle} /> */}
            <ResetPassword />
          </>
        }
      />

      <Route
        path="/ProfileSetting"
        exact
        element={
          <>
            <Sidebar isOpen={isOpen} toggle={toggle} setIsOpen={setIsOpen} />
            <Header toggle={toggle} shopnow={shopnow} />
            <Propfile_setting />
          </>
        }
      />
      <Route
        path="/change-password"
        exact
        element={
          <>
            <ChangePassword />
          </>
        }
      />
      <Route
        path="/shop-now"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggle={toggle}
              shopnow={shopnow}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Ordernow />
          </>
        }
      />

      <Route
        path="/podcast"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggle={toggle}
              shopnow={shopnow}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Podcast />
          </>
        }
      />

      <Route
        path="/shop-payment/:id"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggle={toggle}
              shopnow={shopnow}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Shipping />
          </>
        }
      />
      <Route
        path="/order-history"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggle={toggle}
              shopnow={shopnow}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <OrderHistory />
          </>
        }
      />
      {/* for ongoint order */}
      <Route
        path="/ongoing-order"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggle={toggle}
              shopnow={shopnow}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Ongoing />
          </>
        }
      />
      {/* for cancel order */}
      <Route
        path="/cancelled-order"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggle={toggle}
              shopnow={shopnow}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <CancelOrder />
          </>
        }
      />

      {/* for dilivered */}
      <Route
        path="/completed-order"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggle={toggle}
              shopnow={shopnow}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Dilivered />
          </>
        }
      />

      <Route
        path="/order-details/:id"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggle={toggle}
              shopnow={shopnow}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Order_Details />
          </>
        }
      />
      <Route
        path="/order-details_cancel/:id"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              shopnow={shopnow}
              setIsOpen={setIsOpen}
              toggle={toggle}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Order_Details_Cancel />
          </>
        }
      />

      <Route
        path="/blogs"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              shopnow={shopnow}
              setIsOpen={setIsOpen}
              toggle={toggle}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <AllBlogs />
          </>
        }
      />
      <Route
        path="/blog/:_id"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              shopnow={shopnow}
              setIsOpen={setIsOpen}
              toggle={toggle}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <BlogDetails />
          </>
        }
      />
      <Route
        path="/faqbar"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              shopnow={shopnow}
              setIsOpen={setIsOpen}
              toggle={toggle}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Faqbar />
          </>
        }
      />

      <Route
        path="/notification"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              shopnow={shopnow}
              setIsOpen={setIsOpen}
              toggle={toggle}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Notification />
          </>
        }
      />

      <Route
        path="/contact-us"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              shopnow={shopnow}
              setIsOpen={setIsOpen}
              toggle={toggle}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Contact_us />
          </>
        }
      />

      <Route
        path="/refer-and-earn"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              shopnow={shopnow}
              setIsOpen={setIsOpen}
              toggle={toggle}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Refer_and_earn />
          </>
        }
      />
      <Route
        path="/review"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              shopnow={shopnow}
              setIsOpen={setIsOpen}
              toggle={toggle}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Reviews />
          </>
        }
      />
      <Route
        path="/ingredients&benefits"
        exact
        element={
          <>
            <Sidebar
              isOpen={isOpen}
              shopnow={shopnow}
              setIsOpen={setIsOpen}
              toggle={toggle}
            />
            <Header toggle={toggle} shopnow={shopnow} />
            <Ingredients_benefits />
          </>
        }
      />
    </Routes>
  );
};

function App(props) {
  const { userData, userToken, deviceToken, setDeviceToken } = props;

  return (
    <LanguageProvider>
      <AllRoutes
        userData={userData}
        userToken={userToken}
        deviceToken={deviceToken}
        setDeviceToken={setDeviceToken}
      />
      <ToastContainer theme="colored" />
    </LanguageProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    locationData: state.locations,
    defaultState: state.defaultState,
    userData: state.userData,
    deviceToken: state.deviceToken,
    userToken: state.userToken,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (updatedValue) => {
      dispatch({
        type: actionTypes.UPDATE_USER,
        updatedUser: updatedValue,
      });
    },
    setLocations: (updatedValue) => {
      dispatch({
        type: actionTypes.GET_LOCATIONS,
        locationData: updatedValue,
      });
    },
    setDeviceToken: (updatedValue) => {
      dispatch({
        type: actionTypes.DEVICE_TOKEN,
        updateDeviceToken: updatedValue,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
