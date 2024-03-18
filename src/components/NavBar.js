import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import Avatar from "./Avatar";

import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink 
      className={styles.NavLink}
      activeClassName={styles.Active}
      aria-label="AddPost"
      rel="noreferrer"
      to="/posts/create">
      <i className="fas fa-plus-square"></i> Create
    </NavLink>
  )

  const addEventIcon = (
    <NavLink 
      className={styles.NavLink}
      activeClassName={styles.Active}
      aria-label="AddEvent"
      rel="noreferrer"
      to="/events/create">
      <i className="fa-solid fa-calendar-plus"></i> AddEvent
    </NavLink>
  )

  const loggedInIcons = (
    <> 
    <NavLink 
      className={styles.NavLink}
      activeClassName={styles.Active}
      aria-label="Feed"
      rel="noreferrer"
      to="/feed">
      <i className="fas fa-stream"></i> Feed
    </NavLink>
    <NavLink 
      className={styles.NavLink}
      activeClassName={styles.Active}
      aria-label="Likes"
      rel="noreferrer"
      to="/liked">
      <i className="fas fa-heart"></i> Liked
    </NavLink>
    <NavLink 
      className={styles.NavLink}
      activeClassName={styles.Active}
      aria-label="Saved"
      rel="noreferrer"
      to="/saved">
      <i className="fas fa-bookmark"></i> Saved
    </NavLink>
    <NavLink 
      className={styles.NavLink} 
      aria-label="SignOut"
      rel="noreferrer"
      to="/" 
      onClick={handleSignOut}>
      <i className="fas fa-sign-out-alt"></i> SignOut
      </NavLink>
    <NavLink
      className={styles.NavLink}
      aria-label="Profile"
      rel="noreferrer"
      to={`/profiles/${currentUser?.profile_id}`}>
      <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
    </NavLink>
  </>
  );

  const loggedOutIcons = (
  <>
    <NavLink 
      className={styles.NavLink}
      activeClassName={styles.Active}
      aria-label="Sign In"
      rel="noreferrer"
      to="/signin">
      <i className="fas fa-sign-in-alt"></i> Sign In
    </NavLink>
    <NavLink 
      className={styles.NavLink}
      activeClassName={styles.Active}
      aria-label="Sign Up"
      rel="noreferrer"
      to="/signup">
      <i className="fas fa-user-plus"></i> Sign Up
    </NavLink>
  </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} variant="dark" expand="md" fixed="top">
      <Container>
      <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="50" />
          </Navbar.Brand>
      </NavLink>
      {currentUser && addPostIcon}
      {currentUser && addEventIcon}
        <Navbar.Toggle
        ref={ref}
        onClick={() => setExpanded(!expanded)}
        aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink 
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              aria-label="home page"
              rel="noreferrer"
              to="/">
              <i className="fas fa-home"></i> Home
            </NavLink>
            <NavLink 
              className={styles.NavLink}
              activeClassName={styles.Active}
              aria-label="events page"
              rel="noreferrer"
              to="/events">
              <i className="fa-solid fa-location-crosshairs"></i> Events
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              aria-label="about page"
              rel="noreferrer"
              to="/about">
              <i className="fa-brands fa-readme"></i> About
            </NavLink>
            
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;