import "./Testimonial.css";

function Testimonial({ avatar, text, user_name, role }) {
  return (
    <div className="testimonial">
      <img src={avatar} alt="Avatar" />
      <p className="text">{text}</p>
      <div className="user_info">
        <h3>{user_name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default Testimonial;
