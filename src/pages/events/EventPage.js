import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Event from "./Event";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import PopularProfiles from "../profiles/PopularProfiles";

import Comment from "../comments/Comments";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Assets";
import { fetchMoreData } from "../../utils/utils";

function EventPage() {
  const  { id } = useParams();
  const [event, setEvent] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
        try {
            const [{ data: event }, { data: comments} ] = await Promise.all([
                axiosReq.get(`/events/${id}`),
                axiosReq.get(`/comments/?event=${id}`),
            ]);
            setEvent({ results: [event] });
            setComments(comments);
        } catch(err) {
            console.log(err);
        };
    };
    handleMount();
}, [id]);

  return (
     <Row className="h-100">
     <Col className="py-2 p-0 p-lg-2" lg={8}>
      <PopularProfiles mobile />
       <Event {...event.results[0]} setEvents={setEvent} eventPage />
       <Container>
         {currentUser ? (
           <CommentCreateForm
             profile_id={currentUser.profile_id}
             profileImage={profile_image}
             event={id}
             setEvent={setEvent}
             setComments={setComments}
             evComment
           />
         ) : comments.results.length ? (
           "Comments"
         ) : null}

         {comments.results.length ? (
            <InfiniteScroll
              children={comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setEvent={setEvent}
                  event={id}
                  setComments={setComments}
                  evPage
                />
              ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
       </Container>
     </Col>
     <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
       <PopularProfiles />
     </Col>
   </Row>
  );
};

export default EventPage;