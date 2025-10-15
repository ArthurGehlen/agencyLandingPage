import "./ServiceInfo.css";

function ServiceInfo({ img, title, text }) {
  return (
    <div className={`service_info ${img}`}>
      <div className="content_area">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ServiceInfo;
