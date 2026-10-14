const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project-box w-full bg-gray-200 overflow-hidden">
      
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
        <h2 className="mb-5 text-2xl font-semibold">
          {title}
        </h2>

        <p className="text-[15px]">
          {description}
        </p>
      </div>

    </div>
  );
};

export default ProjectCard;