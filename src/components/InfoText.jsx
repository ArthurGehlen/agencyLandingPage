// Utils
import "./InfoText.css";

function InfoText({ title, text, btn_color }) {
  return (
    <div className="info_text">
      <h2>{title}</h2>

      <p>{text}</p>

      <div className="btn_container">
        <button className={btn_color}>Learn More</button>
      </div>
    </div>
  );
}

export default InfoText;
