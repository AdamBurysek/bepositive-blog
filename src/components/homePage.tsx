import Container from "react-bootstrap/Container";
import BlogCard from "./card";

const HomePage = (props: any) => {
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
        {props.cards.map((card: any) => (
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
