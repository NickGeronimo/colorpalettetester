const Card = ({ title, description, bgColor, textColor }) => {
  return (
    <div
      className="rounded-sm p-6 shadow-lg"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
