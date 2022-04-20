import { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";
import "./CitSer.css";

const apiStatusList = {
  initial: "INITIAL",
  in_progress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class SearchedResults extends Component {
  state = {
    apiStatus: apiStatusList.initial,
    list: [],
    input: "",
  };

  componentDidMount() {
    this.getTheSearchedListAndUpdateState();
  }

  onChangeInput = (event) => {
    this.setState(
      { input: event.target.value },
      this.getTheSearchedListAndUpdateState
    );
  };

  getTheSearchedListAndUpdateState = async () => {
    this.setState({ apiStatus: apiStatusList.in_progress });
    const { input } = this.state;
    const urlForSearchedList = `http://localhost:9000/api/v1/tasks/${input.toLowerCase()}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(urlForSearchedList, options);
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      this.setState({ apiStatus: apiStatusList.success, list: [...data.list] });
    } else {
      this.setState({ apiStatus: apiStatusList.failure });
    }
  };

  renderMatchNotFound = () => {
    const { input } = this.state;
    return (
      <div className="no-match-c">
        <img
          src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1627896995/movie%20app%20mini%20project/Group_7394_sbnlxy.png"
          alt="no movies"
          className="match-img"
        />
        <p className="no-match-para">
          Your search for {input} did not find any matches.
        </p>
      </div>
    );
  };

  renderTheContent = () => {
    const { list } = this.state;
    console.log(list);
    return (
      <div>
        {this.state.list.map((eachItem) => (
          <div>
            <Popup
              modal
              trigger={
                <div
                  className="post"
                  key={eachItem.id}
                  style={{
                    background: "linear-gradient(90deg, #0057B7, #FFDD00)",
                  }}
                >
                  <h3>Name: {eachItem.name}</h3>
                  <br />{" "}
                  <p>
                    City: {eachItem.city} <br /> Donation I want to make:{" "}
                    {eachItem.donation} <br />
                    Describe the donation you are making: {
                      eachItem.describe
                    }{" "}
                    <br /> DropoffLocation: {eachItem.dropofflocation} <br />{" "}
                    PhoneNo: {eachItem.phoneno} <br /> WhatsApp No:{" "}
                    {eachItem.whatsapp} <br /> Instagram: {eachItem.instagram}{" "}
                    <br /> Facebook: {eachItem.facebook} <br /> Website:{" "}
                    {eachItem.website}{" "}
                  </p>
                </div>
              }
            >
              {(close) => (
                <div
                  className="balu"
                  style={{
                    fontFamily: "'Red Hat Mono', monospace",
                    fontSize: "17px",
                    background: "#0E0E10",
                    color: "white",
                    marginLeft: "11px",
                    marginRight: "11px",
                    borderRadius: "9px",
                    marginTop: "11px",
                    overflow: "auto",
                    height: "500px",
                  }}
                  key={eachItem.id}
                >
                  <h3>Name: {eachItem.name}</h3>
                  <br />{" "}
                  <p>
                    City: {eachItem.city} <br /> Donation I want to make:{" "}
                    {eachItem.donation} <br />
                    Describe the donation you are making: {
                      eachItem.describe
                    }{" "}
                    <br /> DropoffLocation: {eachItem.dropofflocation} <br />{" "}
                    PhoneNo: {eachItem.phoneno} <br /> WhatsApp No:{" "}
                    {eachItem.whatsapp} <br /> Instagram: {eachItem.instagram}{" "}
                    <br /> Facebook: {eachItem.facebook} <br /> Website:{" "}
                    {eachItem.website}{" "}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Red Hat Mono', monospace",
                      fontSize: "21px",
                    }}
                  >
                    How to Approach the Donar?
                  </p>
                  <p
                    style={{
                      fontFamily: "'Red Hat Mono', monospace",
                      fontSize: "17px",
                    }}
                  >
                    Contact the donar through the potential contact details they
                    had submitted in the listings provided. Ask them for their
                    identification it can be video call or photo of theirs and
                    do ask them their national card before meeting.
                  </p>
                  <p
                    style={{
                      fontFamily: "'Red Hat Mono', monospace",
                      fontSize: "21px",
                    }}
                  >
                    Precautionary Methods
                  </p>
                  <ul>
                    <li>Do not give your exact position.</li>
                    <li>
                      Do not give your information before finding their
                      authenticity.
                    </li>
                    <li>
                      Do not give your national card if you are holding one.
                    </li>
                  </ul>
                  <p>
                    Please do your research before accepting any donation from
                    anyone, as the donation is in the explicit form. We can not
                    validate the listing or the donar. If you find any
                    suspicious lisitng please report it.
                  </p>
                  <p>
                    As the donar is deciding the drop off location at where they
                    can provide the donation try to search for the city where
                    you live, you might find listings from your city too. And
                    later negotiate with the donar where you will receive it
                    from the drop off location.
                  </p>
                  <p style={{ color: "red" }}>Red Flags</p>
                  <p>
                    If the donar is asking you for money in return of the
                    donation they are making.
                  </p>
                  <p>
                    If they are prompting for any sexual activities in return of
                    their donation.
                  </p>
                  <p>
                    If they are not willing to identify themselves. This applies
                    for both.
                  </p>
                  <p>
                    There can be many red flags, if you feel it is risky. Do not
                    take the donation and look for other donations.
                  </p>
                  <br />
                  <Button variant="info" type="button" onClick={() => close()}>
                    close
                  </Button>
                </div>
              )}
            </Popup>
          </div>
        ))}
      </div>
    );
  };

  renderTheFunction = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusList.success:
        return this.renderTheContent();
      case apiStatusList.failure:
        return this.renderMatchNotFound();
      default:
        return null;
    }
  };

  render() {
    return (
      <>
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

        <input
          className="serr"
          type="search"
          onChange={this.onChangeInput}
          placeholder="type the city in small letters..."
        />
        {this.renderTheFunction()}
      </>
    );
  }
}

export default SearchedResults;
