import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import commentsDataService from "../services/commentsDataService";
import { Container, Image } from "react-bootstrap";
import Comment from "../stories/Comment";
import AddComment from "../stories/AddComment";
import locationsData from "../data/locationsData.json";
import {
  Props,
  CommentData,
  LocationData,
  ReplyData,
} from "./locationPageTypes";

function LocationPage(props: Props) {
  const [comments, setComments] = useState<CommentData[] | null>(null);
  const [locationInfo, setLocationInfo] = useState<LocationData | null>(null);
  const url = useLocation();
  const navigate = useNavigate();

  // This reads data from locationData.json when the page is visited or refreshed
  useEffect(() => {
    getData();

    function getData() {
      const queryParams = new URLSearchParams(url.search);
      const locationIdNumber = parseInt(queryParams.get("locationId")!);
      const selectedLocation = locationsData.find(
        (location) => location.locationId === locationIdNumber
      );
      if (selectedLocation) {
        setLocationInfo(selectedLocation);
      } else {
        console.error(`Card with id ${locationIdNumber} not found`);
        navigate("/notFound");
      }
    }
  }, [navigate, url.search]);

  // After getting data about the location, then download comments
  useEffect(() => {
    const getComments = () => {
      if (locationInfo) {
        commentsDataService
          .getComments(locationInfo.locationId)
          .then((response) => {
            setComments(response.data);
          })
          .catch((e) => {
            console.error(e);
          });
      }
    };

    if (locationInfo) {
      getComments();
    }
  }, [locationInfo]);

  // This function manages interactions such as posting comments, replies, or deleting comments.
  // Each action occurs twice: first on the frontend to provide a smooth user experience,
  // and secondly by sending the corresponding command to the database.

  function onComment(commentText: string) {
    if (locationInfo) {
      const newComment: CommentData = {
        id: new Date().getTime().toString(),
        locationId: locationInfo.locationId.toString(),
        text: commentText,
        username: props.user?.username,
        userId: props.user?.userId,
        replies: [],
      };
      setComments((prevComments) => [...(prevComments || []), newComment]);
      commentsDataService.createComment(newComment).catch((e) => {
        console.error(e);
      });
    }
  }

  function onReply(replyText: string, id: string) {
    setComments((prevComments) => {
      if (!prevComments) return prevComments;

      const updatedComments = prevComments.map((comment) => {
        if (comment.id === id) {
          const newReply: ReplyData = {
            commentId: id,
            replyId: new Date().getTime().toString(),
            username: props.user?.username,
            userId: props.user?.userId,
            text: replyText,
          };
          commentsDataService.addReply(newReply).catch((e) => {
            console.error(e);
          });
          return {
            ...comment,
            replies: [...comment.replies, newReply],
          };
        }
        return comment;
      });
      return updatedComments;
    });
  }

  function onDelete(id: string) {
    commentsDataService.deleteComment(id).catch((e) => {
      console.error(e);
    });
    setComments((prevComments) => {
      if (!prevComments) return prevComments;

      const updatedComments = prevComments.filter(
        (comment) => comment.id !== id
      );
      return updatedComments;
    });
  }

  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <h1>{locationInfo?.title}</h1>
        <Image src={locationInfo?.image} className="location-image" />
        <br />
        <p style={{ fontSize: 20, width: "90vw", maxWidth: 800 }}>
          {locationInfo?.text}
        </p>
        <h4>Comments:</h4>

        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              onReply={onReply}
              onDelete={onDelete}
              user={props.user?.username}
              userId={props.user?.userId}
              commentText={comment.text}
              commentUsername={comment.username}
              commentUsernameID={comment.userId?.toString() || ""}
              replies={comment.replies}
            />
          ))
        ) : (
          <>
            <h5 style={{ paddingTop: 30, color: "grey" }}>No comments yet</h5>
            <p style={{ color: "grey", fontSize: 14 }}>
              Be the first to comment on this post!
            </p>
          </>
        )}
        <AddComment onComment={onComment} user={props.user?.username} />
      </Container>
    </>
  );
}

export default LocationPage;
