const SkillCard = ({ name, description, image }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-base-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <img src={image} alt={name} className="w-16 h-16 mb-4" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default SkillCard;
