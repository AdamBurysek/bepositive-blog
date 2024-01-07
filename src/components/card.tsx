import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BlogCard(props: any) {
  return (
    <Card style={{ width: "28rem" }}>
      <Card.Img variant="top" src={props.image} height={250} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Button
          variant="success"
          onClick={() => props.handleReadAboutButtonClick(props.locationId)}
        >
          Read about {props.title}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
