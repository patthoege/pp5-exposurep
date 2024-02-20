import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>
          <Form>
            <Form.Group controlId="username">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text" 
                    placeholder="Username" 
                    name="username"/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword1">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="password" 
                    placeholder="Password" 
                    name="password1" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword2">
                <Form.Label className="d-none">Confirm password</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="password" 
                    placeholder="Confirm password" 
                    name="password2" />
            </Form.Group>
            <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} type="submit">
                Sign Up
            </Button>
        </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://img.freepik.com/free-photo/vibrant-s-curves-lens-generated-by-ai_24640-82071.jpg?t=st=1708434733~exp=1708438333~hmac=d1a8d38d51dfb85e99bebef1fe3ad3ea871440dffb5fb69f4874d41133198c01&w=1380"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;