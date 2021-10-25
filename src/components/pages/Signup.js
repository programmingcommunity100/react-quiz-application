import React from "react";
import classes from "../../styles/Signup.module.css";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInputs from "../TextInputs";
import Checkbox from "../Checkbox";
import Button from "../Button";
const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />

        <Form className={`${classes.signup}`}>
          <TextInputs
            type="text"
            placeholder="Enter name"
            icon="person"
          />
          <TextInputs
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInputs
            type="password"
            placeholder="Enter password"
            icon="lock"
          />
          <TextInputs
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox
            text="I agree to the Terms &amp; Conditions"
          />
          <Button>
            Submit Now
          </Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
