import { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import commentsDataService from "../services/commentsDataService";
import Comment from "../stories/Comment";
import { useLocation, useNavigate } from "react-router-dom";
import locationsData from "../data/locationsData.json";
import AddComment from "../stories/AddComment";

function LocationPage(props: any) {
  const [comments, setComments] = useState<any>();
  const [locationInfo, setLocationInfo] = useState<any>();
  const url = useLocation();
  const navigate = useNavigate();

  // This reads data from locationData.json when page is visited or refreshed
  useEffect(() => {
    const queryParams = new URLSearchParams(url.search);
    const locationId = queryParams.get("locationId");
    const locationIdNumber = locationId ? parseInt(locationId, 10) : null;
    const selectedLocation = locationsData.find(
      (location) => location.locationId === locationIdNumber
    );
    if (selectedLocation) {
      setLocationInfo(selectedLocation);
    } else {
      console.error(`Card with id ${locationId} not found`);
      navigate("/notFound");
    }
  }, []);

  useEffect(() => {
    getComments();
  }, [locationInfo]);

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

  function onComment(commentText: string) {
    const newComment = {
      id: new Date().getTime().toString(),
      locationId: locationInfo.locationId.toString(),
      text: commentText,
      username: props.user.username,
      userId: props.user.userId,
      replies: [],
    };
    setComments((prevComments: any) => [...prevComments, newComment]);
    commentsDataService.createComment(newComment).catch((e) => {
      console.error(e);
    });
  }

  function onReply(replyText: string, id: string) {
    setComments((prevComments: any) => {
      const updatedComments = prevComments.map((comment: any) => {
        if (comment.id === id) {
          const newReply = {
            commentId: id,
            replyId: new Date().getTime().toString(),
            username: props.user.username,
            userId: props.user.userId,
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
    setComments((prevComments: any) => {
      const updatedComments = prevComments.filter(
        (comment: any) => comment.id !== id
      );
      return updatedComments;
    });
  }

  return (
    <>
      <br />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{locationInfo?.title}</h1>
        <Image src={locationInfo?.image} height={300} width={500} />
        <br />
        <p style={{ padding: "0 10vw", fontSize: 20 }}>{locationInfo?.text}</p>
        <h4>Comments:</h4>

        {comments && comments.length > 0 ? (
          comments.map((comment: any) => (
            <Comment
              key={comment.id}
              id={comment.id}
              onReply={onReply}
              onDelete={onDelete}
              user={props.user?.username}
              userId={props.user?.userId}
              commentText={comment.text}
              commentUsername={comment.username}
              commentUsernameID={comment.userId.toString()}
              replies={comment.replies}
            />
          ))
        ) : (
          <h5 style={{ paddingTop: 30, color: "grey" }}>Nobody comment this</h5>
        )}
        <AddComment onComment={onComment} user={props.user?.username} />
      </Container>
    </>
  );
}

export default LocationPage;
