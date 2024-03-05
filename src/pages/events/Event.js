import React from 'react'
import styles from "../../styles/Event.module.css";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { MoreDropdown } from '../../components/MoreDropdown';


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
      comments_count
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/events/${id}/edit`);
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (confirmDelete) {
      try {
        await axiosRes.delete(`/events/${id}`);
        history.goBack();
      } catch (err) {
        console.log(err);
      }
    }
  };

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
          <div className="d-flex align-items-center">
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
            <div className="mr-2">{saved_count}</div>
              {is_owner && eventPage && (
              <MoreDropdown 
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              />
              )}
            </div>
          </div>
        </Media>
      </Card.Body>
      <Card.Body>
        <Card.Body className="ml-2">
          <div className="row">
            <div className="col">
              <Link to={`/events/${id}`}> 
                {title && <Card.Title><strong>{title}</strong></Card.Title>} 
              </Link> 
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
      <div className="text-center">
        <Link to={`/events/${id}`}>
          <i className="far fa-comments" />
        </Link>
      {comments_count}
      </div>
      
    </Card>
  )
}

export default Event