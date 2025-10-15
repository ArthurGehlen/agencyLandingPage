// Utils
import "./App.css";

// Components
import Header from "./components/Header";
import InfoText from "./components/InfoText";
import ServiceInfo from "./components/ServiceInfo";

// Images
import image_transform from "./images/desktop/image-transform.jpg";
import image_stand_out from "./images/desktop/image-stand-out.jpg";

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
      <div className="info_wrapper" style={{flexDirection: "row"}}>
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
    </>
  );
}

export default App;
