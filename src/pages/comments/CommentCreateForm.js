import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
  const { post, setPost, event, setEvent, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  console.log('Post:', post);
  console.log('Event:', event);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  // BUG !
  // TypeError: setPost and setEvent are not a function
  // In Post comment field the event value stays undefined in the console
  // In Event comment field the post value stays undefined in the console
  // Comment input field remains the recent content after submitting it
  // Creates a comment and the comments_count increases
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post: props.post, // Use props.post directly
        event: props.event, // Use props.event directly
      });

      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      })); 
      
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));

      setEvent((prevEvent) => ({
        results: [
          {
            ...prevEvent.results[0],
            comments_count: prevEvent.results[0].comments_count + 1,
          },
        ],
      }));

      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="What do you think..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        submit
      </button>
    </Form>
  );
}

export default CommentCreateForm;
