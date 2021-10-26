import React from "react";
import classes from "../../styles/Login.module.css";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInputs from "../TextInputs";
import Button from "../Button";
const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classes.login}`}>
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
                    <Button>
                        <span>Submit Now</span>
                    </Button>
                    <div className="info">
                        Don't have an account? <a href="#">Signup</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Login;
