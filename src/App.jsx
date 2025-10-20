// Utils
import "./App.css";

// Components
import Header from "./components/Header";
import InfoText from "./components/InfoText";
import ServiceInfo from "./components/ServiceInfo";
import Testimonial from "./components/Testimonial";

// Images
import image_transform from "./images/desktop/image-transform.jpg";
import image_stand_out from "./images/desktop/image-stand-out.jpg";
import { footer_logo } from "./components/FooterLogo";
// Images - Clients
import image_emily from "./images/image-emily.jpg";
import image_jennie from "./images/image-jennie.jpg";
import image_thomas from "./images/image-thomas.jpg";
// Images - Socials
import social_svgs from "./utils/svgs.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="info_wrapper">
        <img src={image_transform} alt="Transform" />
        <InfoText
          title="Tranform your brand"
          text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you"
          btn_color="yellow"
        />
      </div>
      <div className="info_wrapper" style={{ flexDirection: "row" }}>
        <img src={image_stand_out} alt="Stand Out" />
        <InfoText
          title="Stand out to the right audience"
          text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
          btn_color="red"
        />
      </div>
      <div className="service_info_wrapper">
        <ServiceInfo
          img="graphic"
          title="Graphic Design"
          text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention"
          bg_color="green"
        />
        <ServiceInfo
          img="photo"
          title="Photography"
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          bg_color="blue"
        />
      </div>
      <div className="testimonials_wrapper">
        <h2>Client Testimonials</h2>
        <div className="testimonials">
          <Testimonial
            avatar={image_emily}
            text="We put our trus in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            user_name="Emily R."
            role="Marketing Director"
          />
          <Testimonial
            avatar={image_thomas}
            text="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
            user_name="Thomas S."
            role="Chief Operating Officer"
          />
          <Testimonial
            avatar={image_jennie}
            text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            user_name="Jennie F."
            role="Business Owner"
          />
        </div>
      </div>
      <div className="image_shown">
        <div className="image milkbottle"></div>
        <div className="image orange"></div>
        <div className="image cone"></div>
        <div className="image sugarcubes"></div>
      </div>
      <footer>
        <div className="footer_logo">{footer_logo}</div>
        <ul className="footer_links">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
        <div className="social_links">
          {social_svgs.facebook}
          {social_svgs.instagram}
          {social_svgs.twitter}
          {social_svgs.pinterest}
        </div>
      </footer>
    </>
  );
}

export default App;
