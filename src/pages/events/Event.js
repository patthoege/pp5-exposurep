import React from 'react'
import styles from "../../styles/Event.module.css";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';


function Event(props) {
  const {
      id,
      owner,
      profile_id, 
      profile_image,
      save_id,
      saved_count,
      created_on, 
      title,
      content, 
      date, 
      time,
      place, 
      event_link, 
      category,
      eventPage,
      setEvents,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleSave = async () => {
    try {
      const { data } = await axiosRes.post("/saved/", { event: id });
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? { ...event, saved_count: event.saved_count + 1, save_id: data.id }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnsave = async () => {
    try {
      await axiosRes.delete(`/saved/${save_id}/`);
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? { ...event, saved_count: event.saved_count - 1, save_id: null }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Event}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-left">
            <span className="text-muted">Created on {created_on}.</span>
          </div>
          <div>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't save your own event!</Tooltip>}
            >
              <i className="far fa-bookmark" />
            </OverlayTrigger>
          ) : save_id ? (
            <span onClick={handleUnsave}>
              <i className={`fas fa-bookmark ${styles.Save}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleSave}>
              <i className={`far fa-bookmark ${styles.SaveOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to save events!</Tooltip>}
            >
              <i className="fa-regular fa-bookmark"/>
            </OverlayTrigger>
          )}
          {saved_count}
          {is_owner && eventPage && "..."}
        </div>
        </Media>
      </Card.Body>
      <Card.Body>

      <Card.Body className="ml-2">
      <div className="row">
          <div className="col">
            {title && <Card.Title>{title}</Card.Title>}
          </div>
        </div>
        {category && <Card.Text className="text-muted">{category}</Card.Text>}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>  

      <Card.Body className="text-center">
        <div>
          Date: {date}  |  Time: {time}
        </div>
        <div>
          Location event will take place at <strong>{place}</strong>            
        </div>
        {event_link && (
          <div>
            For more information, you can visit the event page {' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={event_link}
              className={styles.OnHover}>
              <strong>HERE</strong>
            </a>
          </div> 
        )}
        </Card.Body>      
      </Card.Body>
    </Card>
  )
}

export default Event