import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";
import './footer.css'



const Footer = () => (
  <div className="footer-bg-container">
    <div className="social-media-container">
    <Popup
              modal
              trigger={ <div>
                  <p style={{"color":"white",}}>Security Policy</p>
              </div>
              }
            >
              {(close) => (
              <div  className="balu"
              style={{
                fontFamily: "'Red Hat Mono', monospace",
                fontSize: "17px",
                background: "white",
                color: "black",
                marginLeft: "11px",
                marginRight: "11px",
                borderRadius: "9px",
                marginTop: "11px",
                overflow: "auto",
                width: "900px",
                height: "500px"
               }} >
                  <p>
                    <ul>
                      This platform is created so that indviduals can donate the things they have by submitting a listing. A listing consists of name of the person
                      who is donating, contact details of all soughts. We do not provide any delivery services in Ukraine as of now. So if you are making a donation, you have to specify the drop 
                      off location where you'll be delivering it by yourself.
                      Delivering a donation can have many scenarios, 

                     <li> You can go to the person who is contacting you for the donation. How far you'll go is upto your availability. Do consider the risk you are going 
                      to take if you travel to another city in a war torn country. To ease this off people can make their donation from the city they are currently residing. </li>

                     <li> Both the parties can decide a common place where they could meet and exchange the donation. If they are reciding in the same city or town.  </li>
  
                    <li> However, these are just two possilities of how you can exchange the donation. There are plenty more ways to exchange the donation. We recommend to 
                          choose the one which is safe and reliable for you.</li>

                    Data Security: 
                    <li>The data and details you submit are just used here to display the possible donars from a particular city.</li>
                    <li> We don't use your personal details for any other reasons. </li> 
                    <li>This platform was created so that people could find a place where they can reach out to possible donars and contact them. </li>

                    <li>Your data is safe. And is not used for any other secondary uses. </li> 

                    </ul>
                  </p>
                  <Button variant="info" type="button" onClick={() => close()}>
                    close
                  </Button>
              </div>
                 
                      )}
            </Popup>
    </div>
  </div>
)

export default Footer