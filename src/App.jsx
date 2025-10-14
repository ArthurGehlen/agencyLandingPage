// Utils
import "./App.css";

// Components
import Header from "./components/Header";
import InfoText from "./components/InfoText";

// Images
import image_transform from "./images/desktop/image-transform.jpg";
import image_stand_out from "./images/desktop/image-stand-out.jpg";

function App() {
  return (
    <>
      <Header />
      <div className="info_wrapper">
        <InfoText
          title="Tranform your brand"
          text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you"
          btn_color="yellow"
        />
        <img src={image_transform} alt="Transform" />
      </div>
      <div className="info_wrapper" style={{ flexDirection: "row-reverse" }}>
        <InfoText
          title="Stand out to the right audience"
          text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
          btn_color="red"
        />
        <img src={image_stand_out} alt="Stand Out" />
      </div>
    </>
  );
}

export default App;
