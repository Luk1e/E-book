import React from 'react';
// react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Home from './Home/Home';
import Contact from './Contact Us/Contact';
import Error from './Error/Error';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import User from './Login/User';
// NavBar
import Navbar from './Navbar/Navbar.jsx';



const RouterSetup = () => {
  return (
    <Router>
      <Navbar show={true} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route exact path="/Login" element={ < Login />} />
        {/*
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/person/:id' children={<Person />}></Route>
         */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default RouterSetup;
