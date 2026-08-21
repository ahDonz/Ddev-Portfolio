const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project-box bg-gray-200">
      <img
        className="border border-black max-w-[350px] bg-black w-full aspect-video  min-h-[450px] pb-2.5"
        src={image}
        alt={title}
      />

      <div className="project-info py-5">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p  className="text-[15px]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;