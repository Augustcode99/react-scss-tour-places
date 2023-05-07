import cardStyle from "../scss/card.module.scss";

const Card = ({ title, desc, image }) => {
  return (
    <div className={cardStyle.card}>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{desc}</p>
    </div>
  );
};

export default Card;
