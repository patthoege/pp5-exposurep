import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/EventsPage.module.css";
import NoResults from "../../assets/no-results.png";
import PopularProfiles from "../profiles/PopularProfiles";

function EventsPage() {
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
       <PopularProfiles mobile />
        <p>List of events coming soon here!</p>
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
       <PopularProfiles />
      </Col>
    </Row>
  );
}

export default EventsPage;