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
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  function onComment(text: string) {
    console.log(text);
  }

  function onReply(text: string) {
    console.log(text);
  }

  function onDelete() {
    console.log("Deleted");
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
              key={comment.date}
              onReply={onReply}
              onDelete={onDelete}
              user={props.user?.username}
              userId={props.user?.userId}
              commentText={comment.text}
              commentUsername={comment.username}
              commentUsernameID={comment.userId.toString()}
            />
          ))
        ) : (
          <h5 style={{ paddingTop: 30, color: "grey" }}>Nobody comment this</h5>
        )}
        <AddComment onComment={onComment} />
      </Container>
    </>
  );
}

export default LocationPage;
