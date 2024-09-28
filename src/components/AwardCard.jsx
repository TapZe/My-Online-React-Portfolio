const AwardCard = ({ credId, title, year, image, link }) => {
  return (
    <div className="flex justify-center">
      <div className="card card-compact bg-base-200 w-96 shadow-xl">
        <figure>
          <img src={image} alt={title} className="object-cover h-48 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-gray-600">Year: {year}</p>
          <p className="text-gray-400 text-sm">
            <span className="font-bold">Credential ID:</span> {credId}
          </p>
          <div className="card-actions justify-end">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
