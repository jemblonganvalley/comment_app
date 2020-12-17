import "./Card.css";

const Card = ({ username, body }) => {
  return (
    <section className="card-container">
    <div className="card">
      <h3 className="comment_username"> {username} </h3>
      <p className="comment_body">{body}</p>
    </div>
    </section>
  );
};

export default Card;
