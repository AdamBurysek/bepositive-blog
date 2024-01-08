import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function PageNavbar(props: any) {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" bg="success" data-bs-theme="dark">
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          BePositive Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            {props.user ? (
              <Nav.Link onClick={() => props.onLogout()}>
                Logout {props.user}
              </Nav.Link>
            ) : (
              <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
