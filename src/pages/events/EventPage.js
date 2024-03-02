import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Event from "./Event";

function EventPage() {
  const  { id } = useParams();
  const [event, setEvent] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
        try {
            const [{ data: event }] = await Promise.all([
                axiosReq.get(`/events/${id}`),
            ]);
            console.log(event)
            setEvent({ results: [event] });
        } catch (err) {
            console.log(err);
        };
    };
    handleMount();
}, [id]);

  return (
    <Container>
      <Event {...event.results[0]} setEvents={setEvent} eventPage />
    </Container>
  );
}

export default EventPage;