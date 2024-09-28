const InterestCard = ({ title, children }) => {
  return (
    <div>
      <h2 className="text-xl font-bold pb-3">{title}</h2>
      <div className="text-justify pb-4">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default InterestCard;
