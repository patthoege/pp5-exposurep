import React, { useState } from "react";
import axios from "axios"

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";

function SignInForm() {

    const setCurrentUser = useSetCurrentUser();
    useRedirect("loggedIn");

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
      });
    const { username, password} = signInData;

    const [errors, setErrors] = useState({});

    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
            try {
            const {data} = await axios.post("/dj-rest-auth/login/", signInData);
            setCurrentUser(data.user)
            history.goBack();
            } catch (err) {
                setErrors(err.response?.data);
            }
        };

    const handleChange = (event) => {
        setSignInData({
          ...signInData,
          [event.target.name]: event.target.value,
        });
      };

  return (
    <div className={styles.FullScreen}>
      <spline-viewer url="https://prod.spline.design/UOR17FL-TIPiTqGW/scene.splinecode"></spline-viewer> 
      <div className={`${styles.Row} ${styles.Overlay}`}>
        <div className="text-center text-md-left d-none d-lg-block p-0 p-lg-2">
          <p className="font-weight-bold">Dive into the World of ExposePX</p>
        </div>
        <Col className="my-auto p-0 p-md-2" md={6}>
          <Container className="p-4">
            <Row className="justify-content-center">
              <Col xs={12} sm={10} md={8} lg={6}>
                <h1 className={styles.Header}>Sign In</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="text" 
                      placeholder="Username" 
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.username?.map((message, idx) => (
                    <Alert key={idx} variant="warning">
                      {message}
                    </Alert>
                  ))}
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="password" 
                      placeholder="Password" 
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.password?.map((message, idx) => (
                    <Alert key={idx} variant="warning">
                      {message}
                    </Alert>
                  ))}
                  <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} type="submit">
                    Sign In
                  </Button>
                  {errors.non_field_errors?.map((message, idx) => (
                    <Alert key={idx} variant="warning" className="mt-3">
                      {message}
                    </Alert>
                  ))}
                </Form>
              </Col>
            </Row>
          </Container>
          <Container className="mt-3">
            <Link className={styles.Link} to="/signup">
              Don't have an account? <span>Sign up now!</span>
            </Link>
          </Container>
        </Col>
      </div>
    </div>
  );
}

export default SignInForm;