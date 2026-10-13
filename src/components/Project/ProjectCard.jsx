const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project-box box-border w-[49%] max-w-[340px] bg-gray-200">
    <img
  className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover object-top"
  src={image}
  alt={title}
/>


      <div className="project-info p-5">
        <h2 className="text-2xl font-semibold mb-5">{title}</h2>
        <p className="text-[15px]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;