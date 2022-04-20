import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Footer from './footer'
import "./landing.css";

import { Link } from "react-router-dom";

const Land = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="justify-content-end" activeKey="/home">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt="cor"
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1648232030/loGoo.png_q5chmu.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              Donate Ukraine
            </Navbar.Brand>
          </Container>
          &nbsp;&nbsp;
          <Nav.Item>
            <Nav.Link href="/create-form">Create</Nav.Link>
          </Nav.Item>
          &nbsp;&nbsp;
          <Nav.Item>
            <Nav.Link href="/list-form">Listings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
       
      <div className="rrr"> 
      <div className="task-input">
        <Link to="/create-form">
          <Button
            type="button"
            variant="dark"
            className="btn submit-btn"
            id="hey"
          >
            <span>Create a listing</span>
          </Button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/list-form">
          <Button
            type="button"
            variant="dark"
            className="btn submit-btn"
            id="heyy"
          >
            <span>show the listing</span>
          </Button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/search">
          <Button
            type="button"
            variant="dark"
            className="btn submit-btn"
            id="heyy"
          >
            <span>Search</span>
          </Button>
        </Link>
      </div>

      <p className="ger">What is Donate Ukraine?</p>
      <p className="gee">
        Donate Ukraine is an independent platorm built for the people who are stuck in middle of a war
        between Ukraine and Russia. This platform will help the Ukranian population to connect
        and help them donate eachother with whatever they have.
      </p>
      <p className="ger">Who developed this platform?</p>

      <p className="gee">
        This platform is developed by a <a href="https://www.linkedin.com/in/chintam-kaushik-3778701a7/">Chintam Kaushik</a> a student at Dr. Mgr University in Chennai, India.
        For inquiries contact us here, mckaushik20@gmail.com
        <br />
        <a href="/search">Click here</a> to search for donations.
      </p>

      <p className="ger">
      How to use this platform?
      </p>

      <p className="gee">
        You can add your donation which can be anything and specify the city from where you are, and the dropoff location, so that the refugee can obtain it.
        Refugees are accountable for their own safety and well-being.
      </p>

      <p className="ger">
        Distinctive gratitude
      </p>

      <p className="gee">
        MuraliDharan, Bala Nagendra Kumar, Dharun
      </p>
      <Footer />
    </div>
    </>
  );
};

export default Land;
