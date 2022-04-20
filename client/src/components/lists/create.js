import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import './Form.css';

export const AddName = () => {
  var [name, setName] = useState();

  const nameUpdate = (event) => {
    setName(event.target.value);
  };

  var [donation, setDonation] = useState();

  const donationUpdate = (event) => {
    setDonation(event.target.value);
  };

  var [describe, setDescribe] = useState();

  const describeUpdate = (event) => {
    setDescribe(event.target.value);
  };

  var [city, setCity] = useState();

  const cityUpdate = (event) => {
    setCity(event.target.value);
  };

  var [dropofflocation, setdropofflocation] = useState();

  const dropofflocationUpdate = (event) => {
    setdropofflocation(event.target.value);
  };

  var [phoneno, setphoneno] = useState();

  const phonenoUpdate = (event) => {
    setphoneno(event.target.value);
  };

  var [whatsapp, setwhatsapp] = useState();

  const whatsappUpdate = (event) => {
    setwhatsapp(event.target.value);
  };

  var [instagram, setinstagram] = useState();

  const instagramUpdate = (event) => {
    setinstagram(event.target.value);
  };

  const [facebook, setfacebook] = useState();

  const facebookUpdate = (event) => {
    setfacebook(event.target.value);
  };

  const [website, setwebsite] = useState("");

  const websiteUpdate = (event) => {
    setwebsite(event.target.value);
  };

  /*const [food, setfood] = useState({
    isFood: false,
    isCookingUtensils: false,
    isHygieneItems: false,
    isNewbornSupplies: false,
    isClothing: false,
    isSchoolSupplies: false,
    isToys: false,
    isBooks: false,
    isShoes: false,
  });*/

  const handleSubmit = () => {
    const postURL = "http://localhost:9000/api/v1/tasks";
    fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        city: city,
        // cityValue:city.toLowerCase(),
        donation: donation,
        describe: describe,
        dropofflocation: dropofflocation,
        phoneno: phoneno,
        whatsapp: whatsapp,
        instagram: instagram,
        facebook: facebook,
        website: website
      }),
    }).then(() => {
      alert("You have submitted a listing!");
    });
  };

 /* const foodUpdate = () => {
    setfood({
      ...food,
      isFood: "Food",
    });
  };*/

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="justify-content-end" activeKey="/home">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt="hey"
                src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1648232030/loGoo.png_q5chmu.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
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
      <h1
        class="create"
        style={{
          "color": "#0057B7",
          "textAlign": "right",
          "display": "flex-end",
          "justifyContent": "right",
          "marginTop": "200px",
          "marginLeft": "270px",
          "fontFamily": "'Red Hat Mono', monospace",
          "fontWeight": "200",
          "fontSize": "40px",
          "backgroundColor": "#FFDD00",
          "borderBottom": "0.5px solid",
          "width": "60%",
          "boxShadow": "10px 10px",
          "marginBottom": "12%",
        }}
      >
        Help by donating the people of Ukraine. Create a listing by filling out
        the information below and the donation you are making! 
      </h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      <Form className="joel" onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
          <span style={{
          "color": "#0057B7",
          "fontFamily": "'Roboto Mono', monospace",
          "fontWeight": "200",
          "fontSize": "20px",
          "backgroundColor": "#FFDD00",
          "borderBottom": "0.5px solid",
          "boxShadow": "10px 10px",
          
        }}> Full Name: </span>
          </Form.Label>
          <Col sm="10">
          <Form.Control 
            id="name"
            type="text"
            name="name"
            placeholder="type your full name"
            required
            onChange={nameUpdate}
          ></Form.Control></Col>
           <Form.Text className="text-muted">
      Please type your fullname.
    </Form.Text>
        </Form.Group>
        <br />
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
          <span style={{
          "color": "#0057B7",
          "fontFamily": "'Roboto Mono', monospace",
          "fontWeight": "200",
          "fontSize": "20px",
          "backgroundColor": "#FFDD00",
          "borderBottom": "0.5px solid",
          "boxShadow": "10px 10px",
          
        }}> City: </span>
          </Form.Label>
          <Col sm="10">
          <Form.Control
            type="text"
            name="city"
            placeholder="type the name of the place you live"
            required
            onChange={cityUpdate}
          ></Form.Control></Col>
          <Form.Text className="text-muted">
      Please type the name of the place from where you'll be donating in small letters.
    </Form.Text>
        </Form.Group>
        <br />

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
          <span style={{
          "color": "#0057B7",
          "fontFamily": "'Roboto Mono', monospace",
          "fontWeight": "200",
          "fontSize": "20px",
          "backgroundColor": "#FFDD00",
          "borderBottom": "0.5px solid",
          "boxShadow": "10px 10px",
          
        }}> Donate: </span>
          </Form.Label>
          <Col sm="10">
          <Form.Control
            type="text"
            name="donation"
            placeholder=""
            required
            onChange={donationUpdate}
          ></Form.Control>
          </Col>
          <Form.Text className="text-muted">
      Type your Donation
    </Form.Text>
        </Form.Group>
        <br />

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            <span style={{
          "color": "#0057B7",
          "fontFamily": "'Roboto Mono', monospace",
          "fontWeight": "200",
          "fontSize": "20px",
          "backgroundColor": "#FFDD00",
          "borderBottom": "0.5px solid",
          "boxShadow": "10px 10px",
          
        }}> Describe: </span>
          </Form.Label>
          <Col sm="10">
          <Form.Control as="textarea" rows={3} onChange={describeUpdate} /></Col>
          <Form.Text className="text-muted">
      Please describe the donation you are making and how you are planning to donate it.
    </Form.Text>
          <br />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
          <span style={{
          "color": "#0057B7",
          "fontFamily": "'Roboto Mono', monospace",
          "fontWeight": "200",
          "fontSize": "20px",
          "backgroundColor": "#FFDD00",
          "borderBottom": "0.5px solid",
          "boxShadow": "10px 10px",
          
        }}> Drop off location: </span>
          </Form.Label>
          <Col sm="10">
          <Form.Control
            type="text"
            name="dropofflocation"
            placeholder=""
            required
            onChange={dropofflocationUpdate}
          ></Form.Control>
          </Col>
          <Form.Text className="text-muted">
      Please type the location name where you'll be exchanging the donation with the refugee.
    </Form.Text>
        </Form.Group>

        <br />

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            <span style={{
          "color": "#0057B7",
          "fontFamily": "'Roboto Mono', monospace",
          "fontWeight": "200",
          "fontSize": "20px",
          "backgroundColor": "#FFDD00",
          "borderBottom": "0.5px solid",
          "boxShadow": "10px 10px",
          
        }}> PhoneNo: </span>
          </Form.Label>
          <Col sm="10">
          <Form.Control
            type="text"
            name="phoneno"
            placeholder=""
            required
            onChange={phonenoUpdate}
          ></Form.Control></Col>
          <Form.Text className="text-muted">
      PhoneNO.
    </Form.Text>
        </Form.Group>

        <br />
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
          <span style={{
          "color": "#0057B7",
          "fontFamily": "'Roboto Mono', monospace",
          "fontWeight": "200",
          "fontSize": "20px",
          "backgroundColor": "#FFDD00",
          "borderBottom": "0.5px solid",
          "boxShadow": "10px 10px",
          
        }}> WhatsApp: </span>
          </Form.Label>
          <Col sm="10">
          <Form.Control
            type="text"
            name="whatsapp"
            placeholder=""
            required
            onChange={whatsappUpdate}
          ></Form.Control>
          </Col>
          <Form.Text className="text-muted">
      Share your Whatsapp No.
    </Form.Text>
        </Form.Group>
        <br />

        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="2">
          <span style={{
          "color": "#0057B7",
          "fontFamily": "'Roboto Mono', monospace",
          "fontWeight": "200",
          "fontSize": "20px",
          "backgroundColor": "#FFDD00",
          "borderBottom": "0.5px solid",
          "boxShadow": "10px 10px",
          
        }}> Instagram: </span>
          </Form.Label>
          <Col sm="10">
          <Form.Control
            type="text"
            name="instagram"
            placeholder=""
            required
            onChange={instagramUpdate}
          ></Form.Control>
          </Col>
        </Form.Group>

        <br />

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
          <span style={{
          "color": "#0057B7",
          "fontFamily": "'Roboto Mono', monospace",
          "fontWeight": "200",
          "fontSize": "20px",
          "backgroundColor": "#FFDD00",
          "borderBottom": "0.5px solid",
          "boxShadow": "10px 10px",
          
        }}> Facebook: </span>
          </Form.Label>
          <Col sm="10">
          <Form.Control
            type="text"
            name="facebook"
            placeholder=""
            required
            onChange={facebookUpdate}
          ></Form.Control></Col>
        </Form.Group>
        <br />

        <Form.Group as={Row}>
          <Form.Label column sm="2">
          <span style={{
          "color": "#0057B7",
          "fontFamily": "'Roboto Mono', monospace",
          "fontWeight": "200",
          "fontSize": "20px",
          "backgroundColor": "#FFDD00",
          "borderBottom": "0.5px solid",
          "boxShadow": "10px 10px",
          
        }}> Website: </span>
          </Form.Label>
          <Col sm="10">
          <Form.Control
            type="text"
            name="facebook"
            placeholder=""
            required
            onChange={websiteUpdate}
          ></Form.Control></Col>
        </Form.Group>

        <br /> 

        <Button variant='dark' type="submit"> Submit</Button>
      </Form>
      </div>
    
  );
};

export default AddName;
