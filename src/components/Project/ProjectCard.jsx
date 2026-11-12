const ProjectCard = ({ image, title, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        transition-all
        duration-300
        hover:scale-105
      "
    >
      <div className="project-box w-full bg-gray-200 overflow-hidden pb-5">

        <img
          className="
            w-full
            h-[300px]
            sm:h-[350px]
            md:h-[400px]
            object-cover
            object-top
          "
          src={image}
          alt={title}
        />

        <div className="project-info p-5">
          <h2 className="mb-5 text-xl font-semibold min-h-10">
            {title}
          </h2>

          <p className="text-[15px]">
            {description}
          </p>

          <p className="mt-4 text-sm font-semibold underline">
        
          </p>
        </div>

      </div>
    </a>
  );
};

export default ProjectCard;