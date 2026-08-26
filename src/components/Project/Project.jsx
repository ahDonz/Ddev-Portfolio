import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const projects = [
    {
      id: 1,
      image: "",
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam, suscipit quos rerum? Dolorum, debitis magnam!",
    },
    {
      id: 2,
      image: "",
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam, suscipit quos rerum? Dolorum, debitis magnam!",
    },
    {
      id: 3,
      image: "",
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam, suscipit quos rerum? Dolorum, debitis magnam!",
    },
    {
      id: 4,
      image: "",
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam, suscipit quos rerum? Dolorum, debitis magnam!",
    },
  ];

  return (
    <section className="project_con px-5 pb-29" >

      <div className="project-info flex justify-between items-center w-full font-bold mbe-5 ">
        <h2 className="text-sm tracking-wider ">SELECTED WORK</h2>

        <Link
          to="/projects"
          className="border border-black p-3"
        >
          See All
        </Link>
      </div>

      <div className="project-boxes flex justify-between gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

    </section>
  );
};

export default Project;