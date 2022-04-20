import { Component } from "react/cjs/react.production.min";
import "./lists.css";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import './lists.css';



const apiStatusList = {
  initial: 'INITIAL',
  in_progress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
} 

class Listings extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],
    };
  }
  
  renderTheList = () => (
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
    <div>
      {this.state.listings.map((listing) => (
        <div className="post"
          key={listing.id}
          style={{
            background: "linear-gradient(90deg, #0057B7, #FFDD00)", "border":" 9px solid #0E0E10",
          }}
        >
            <h3>Name: {listing.name}</h3>
            <br /> <p>City: {listing.city} <br /> Donation I want to make:{" "}
            {listing.donation} <br />
            Describe the donation you are making: {
              listing.describe
            } <br /> DropoffLocation: {listing.dropofflocation} <br />{" "}
            PhoneNo: {listing.phoneno} <br /> WhatsApp No:{" "}
            {listing.whatsapp} <br /> Instagram: {listing.instagram} <br />{" "}
            Facebook: {listing.facebook} <br /> Website: {listing.website} </p>
        </div>
      ))}
    </div>
  </div>
  )

 
  componentDidMount() {
    axios
      .get("http://localhost:9000/api/v1/tasks")
      .then((res) => this.setState({ listings: res.data.lists }))
      .catch((err) => console.log(err));
    // fetch('')
    //    .then(res => res.json())
    //    .catch(err=>console.log(err))
    //    .then(listings => this.setState({listings: listings}, () => console.log('listings fetched...',
    //    listings))).catch(err=>console.log(err))
  }
  render() {
    return (
      <>
      {this.renderTheList()}
      </>
    );
  }
}

export default Listings;
