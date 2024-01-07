import { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import commentsDataService from "../services/commentsDataService";

function LocationPage(props: any) {
  const [comments, setComments] = useState<any>();

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    commentsDataService
      .getComments(props.locationInfo.locationId)
      .then((response) => {
        setComments(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
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
        <h1>{props.locationInfo.title}</h1>
        <Image src={props.locationInfo.image} height={300} width={500} />
        <br />
        <p style={{ padding: "0 10vw", fontSize: 20 }}>
          {props.locationInfo.text}
        </p>
        {comments &&
          comments.map((comment: any) => (
            <p key={comment._id}>{comment.text}</p>
          ))}
      </Container>
    </>
  );
}

export default LocationPage;
