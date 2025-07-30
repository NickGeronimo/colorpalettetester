const Card = ({ title, description, bgColor, textColor }) => {
  return (
    <div
      className="rounded-sm p-6 drop-shadow-xl/50 "
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
                    <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Sample"
              className="shadow-lg"
            />
            <br />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <br />
      <p>{description}</p>
      <br />
<div className="flex justify-center">
    <button
            className="border-2 px-4 py-2 rounded transition-colors duration-200 cursor-pointer"
            style={{
              backgroundColor: textColor,
              borderColor: textColor,
              color: bgColor
            }}
              onMouseEnter={(e) => {
              e.target.style.backgroundColor = bgColor;
              e.target.style.color = textColor; 
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = textColor;
              e.target.style.color = bgColor;
            }}
          >
            Color Settings
          </button>
</div>

    </div>
  );
};

export default Card;
