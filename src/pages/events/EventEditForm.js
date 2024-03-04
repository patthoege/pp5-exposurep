import React, { useEffect, useState } from "react";

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
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function EventEditForm() {
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
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/events/${id}`);
            const { title, content, date, time, place, event_link, category, is_owner } = data;
    
            is_owner ? setEventData({ 
                title, content, date, time, place, event_link, category
            }) : history.push("/");
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [history, id]);

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
        await axiosReq.put(`/events/${id}`, formData);
        history.push(`/events/${id}`);
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
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors?.title?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter content"
                        name="content"
                        value={content}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors?.content?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group>
                    <Form.Label>Event Link</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter event link"
                        name="event_link"
                        value={event_link}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors?.event_link?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter category"
                        name="category"
                        value={category}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors?.category?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Enter date"
                                name="date"
                                value={date}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors?.date?.map((message, idx) => (
                          <Alert variant="warning" key={idx}>
                              {message}
                          </Alert>
                        ))}
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                type="time"
                                placeholder="Enter time"
                                name="time"
                                value={time}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors?.time?.map((message, idx) => (
                          <Alert variant="warning" key={idx}>
                              {message}
                          </Alert>
                        ))}
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Place</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter place"
                                name="place"
                                value={place}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors?.place?.map((message, idx) => (
                          <Alert variant="warning" key={idx}>
                              {message}
                          </Alert>
                        ))}
                    </Col>
                </Row>
                <Button
                  className={`${btnStyles.Button} ${btnStyles.Blue}`}
                  onClick={() => history.goBack()}
                >
                  cancel
                </Button>
                <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                  save
                </Button>
            </Form>
        </Container>
    );
}

export default EventEditForm;
