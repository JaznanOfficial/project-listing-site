import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="my-5">
            <div className="my-3">
                <Link to="/">
                    <Button variant="outline-dark">Homepage</Button>
                </Link>
            </div>
            <div className="d-flex mb-2 justify-content-center align-items-center text-center">
                <Card
                    style={{ width: "18rem" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <Card.Img
                        variant="top"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6IrIk4SLn7-Uc5g0gE28o3vL1XBYjXgLEzFglZn4SABYEzDppXBSEhtma8d2CA7C_d4&usqp=CAU"
                        width="200px"
                    />
                    <Card.Body>
                        <button
                            // onClick={signIn}
                            className="btn btn-google btn-login text-uppercase fw-bold btn-outline-danger"
                            type="submit"
                        >
                            <i className="fab fa-google"></i> Sign in with Google
                        </button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;
