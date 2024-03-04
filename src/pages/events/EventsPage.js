import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/EventsPage.module.css";
import NoResults from "../../assets/no-results.png";
import PopularProfiles from "../profiles/PopularProfiles";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

function EventsPage({ message, filter = "" }) {
  const [events, setEvents] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
         try {
             const { data } = await axiosReq.get(`/events/?${filter}search=${query}`);
             setEvents(data);
             setHasLoaded(true);
         } catch (err) {
             console.log(err);
         }
     };

    setHasLoaded(false);

      const timer = setTimeout(() => {
          fetchEvents();
      }, 1000);
  
      return () => {
          clearTimeout(timer);
      }
  }, [filter, query, pathname]);
  
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