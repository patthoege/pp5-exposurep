import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import styles from "../../styles/CreateEventForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function CreateEventForm() {
    const [errors, setErrors] = useState({});
    const [eventData, setEventData] = useState({
        title: "",
        content: "",
        date: "",
        time: "",
        place: "",
        event_link: "",
        category: "",
    });
    const { title, content, date, time, place, event_link, category } = eventData;
    const history = useHistory();

    const handleChange = (event) => {
      setEventData({
        ...eventData,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
  
      formData.append('title', title);
      formData.append('content', content);
      formData.append('date', date);
      formData.append('time', time);
      formData.append('place',place);
      formData.append('event_link',event_link);
      formData.append('category', category);

      try {
        const { data } = await axiosReq.post("/events/", formData);
        history.push(`/events/${data.id}`);
        console.log(formData);
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    };

    return (
        <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        name="title"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter content"
                        name="content"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Event Link</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter event link"
                        name="event_link"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter category"
                        name="category"
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Enter date"
                                name="date"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                type="time"
                                placeholder="Enter time"
                                name="time"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Place</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter place"
                                name="place"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button
                  className={`${btnStyles.Button} ${btnStyles.Blue}`}
                  onClick={() => {}}
                >
                  cancel
                </Button>
                <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                  create
                </Button>
            </Form>
        </Container>
    );
}

export default CreateEventForm;
