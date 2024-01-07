import { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import commentsDataService from "../services/commentsDataService";
import Comment from "../stories/Comment";
import { useLocation } from "react-router-dom";
import locationsData from "../data/locationsData.json";

function LocationPage(props: any) {
  const [comments, setComments] = useState<any>();
  const [locationInfo, setLocationInfo] = useState<any>();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const locationId = queryParams.get("locationId");
    const locationIdNumber = locationId ? parseInt(locationId, 10) : null;
    const selectedLocation = locationsData.find(
      (location) => location.locationId === locationIdNumber
    );
    if (selectedLocation) {
      setLocationInfo(selectedLocation);
    } else {
      console.error(`Card with id ${locationId} not found`);
    }
  }, []);

  useEffect(() => {
    getComments();
  }, [locationInfo]);

  function onReply(text: string) {
    console.log(text);
  }

  function onDelete() {
    console.log("Deleted");
  }

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
        <div style={{ position: "relative" }}>
          <h1>Comments:</h1>
          {comments &&
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
            ))}
        </div>
      </Container>
    </>
  );
}

export default LocationPage;
