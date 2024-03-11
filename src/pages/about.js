import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "../styles/About.module.css";
import btnStyles from "../styles/Button.module.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from "react-bootstrap/Button";

function About() {
  return (
    <Container className={styles.Content}>
    <h2>
      <strong>About Us</strong>
    </h2>
    <hr />
    <p>
      Explore a vibrant online community designed exclusively for passionate photographers like you! ExposePX is your ultimate destination to connect, share, and be inspired by the world of photography.
    </p>
    <p>
      Whether you're a seasoned professional or an enthusiastic beginner, ExposePX offers a welcoming space where you can showcase your creativity, discover new talents, and engage with fellow shutterbugs from around the globe.
    </p>
    <hr />
    <h3>
        <strong>Here's what you can do on ExposePX</strong>
    </h3>
    <ul className="list-unstyled">
      <li>Share your best shots: Upload your favorite photos and let the community appreciate your talent</li>
      <li>Discover amazing content: Explore a curated collection of stunning photographs from photographers worldwide</li>
      <li>Join photography events: Share and participate in exciting events tailored to your interests, from photo walks to exhibitions</li>
      <li>Connect with like-minded individuals: Follow other photographers, leave comments, and build meaningful relationships within the community</li>
    </ul>
    <p>
      Ready to dive in? Join ExposePX today and embark on an exciting journey filled with creativity and inspiration!
    </p>
    <Container className="mt-3">
        <Link className={styles.Link} to="/signup">
        <Button className={`${btnStyles.Button} ${btnStyles.Bright}`}>
            Sign Up
        </Button>
        </Link>
    </Container>
    <hr />
    <h4><strong>Connect with us</strong></h4>
   
    <Row className={styles.SocialIconsAlign}>
        <a
          href="https://github.com/patthoege/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit my Github page (opens in a new tab)"
        >
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/patricia-höge"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit my Linkedin page (opens in a new tab)"
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a
          href="https://www.instagram.com/____patthoege/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our Instagram page (opens in a new tab)"
        >
          <i className="fa-brands fa-instagram" />
        </a>
    </Row>
    <br />
    <div id={styles.Footer}>
      <p >&copy; 2024 ExposePX <br/>All rights reserved</p>
      Project created for educational purposes only          
   </div>
  </Container>
  );
}

export default About;