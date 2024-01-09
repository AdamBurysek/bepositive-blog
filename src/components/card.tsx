import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface Props {
  locationId: number;
  title: string;
  desc: string;
  image: string;
  handleReadAboutButtonClick: (locationId: number) => void;
}

function BlogCard(props: Props) {
  return (
    <Card style={{ width: "32rem" }}>
      <Card.Img variant="top" src={props.image} />
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
