import React, { useState } from "react";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import { Form } from "../components";

const SignIn = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";
  const handleSignIn = (e) => {
    e.preventDefault();

    // firebase work here
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.SmallText> 
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignIn;
