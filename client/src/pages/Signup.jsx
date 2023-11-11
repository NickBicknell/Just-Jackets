import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  return (
    <>
    <h1 className="text-center text-white fs-1">Signup</h1>
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "50rem" }}>
      {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
        <Form className="p-3" onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" name="username" value={formState.name} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="example@example.com" name="email" value={formState.email} onChange={handleChange} />
            <Form.Text className="text-muted">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="********" name="password" value={formState.password} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I want to receive email notifications"
            />
          </Form.Group>
          <Button className="form-btn" type="submit">
            Signup
          </Button>
        </Form>
         )}
         {error && (
           <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
         )}
      </Card>
    </Container>
    </>
  );
};

export default Signup;
