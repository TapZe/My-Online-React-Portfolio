const SkillsIcons = ({ icons, perLine }) => {
  return (
    <div>
      <img
        src={`https://skillicons.dev/icons?i=${icons}${
          perLine ? `&perline=${perLine}` : ""
        }`}
        className="w-full"
      />
    </div>
  );
};

export default SkillsIcons;
