import Container from "react-bootstrap/Container";
import BlogCard from "./card";
import locationsData from "../data/locationsData.json";

interface Props {
  handleReadAboutButtonClick: (locationId: number) => void;
}

const HomePage = (props: Props) => {
  return (
    <>
      <br />
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 30,
        }}
      >
        {locationsData.map((card: any) => (
          <BlogCard
            key={card.locationId}
            locationId={card.locationId}
            title={card.title}
            desc={card.desc}
            image={card.image}
            handleReadAboutButtonClick={props.handleReadAboutButtonClick}
          />
        ))}
      </Container>
    </>
  );
};

export default HomePage;
