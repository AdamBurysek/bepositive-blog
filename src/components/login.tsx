import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

interface LoginValues {
  username: string;
  userId: string;
}

function Login(props: any) {
  const [showErrorSign, setShowErrorSign] = useState(false);
  const [loginValues, setLoginValues] = useState<LoginValues>({
    username: "",
    userId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const updatedLoginValues: LoginValues = { ...loginValues, [name]: value };
    setLoginValues(updatedLoginValues);
  };

  const handleLoginButtonClick = () => {
    if (loginValues.username && loginValues.userId) {
      props.onLogin(loginValues);
      navigate("/");
    } else {
      setShowErrorSign(true);
      setTimeout(() => {
        setShowErrorSign(false);
      }, 1000);
    }
  };

  return (
    <>
      <Container style={{ maxWidth: 600 }}>
        <br />
        <br />
        <Form.Label>Username</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            name="username"
            placeholder="Your Username"
            value={loginValues.username}
            onChange={handleChange}
            maxLength={30}
          />
        </InputGroup>
        <Form.Label>ID</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            name="userId"
            placeholder="Your ID"
            value={loginValues.userId}
            onChange={handleChange}
            maxLength={15}
          />
        </InputGroup>
        <br />
        <Button
          variant={showErrorSign ? "danger" : "success"}
          size="lg"
          onClick={handleLoginButtonClick}
        >
          Login
        </Button>
      </Container>
    </>
  );
}

export default Login;
