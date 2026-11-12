import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/project4.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: "Stepwise ABA Therapy",
      description:
        "A professional healthcare website designed to provide information about ABA therapy services, programs, and support for families seeking behavioral care solutions.",
      link: "https://www.stepwiseabatherapy.com/",
    },
    {
      id: 2,
      image: project2,
      title: "Best Choice HCS LLC",
      description:
        "A healthcare service website focused on providing clear information about care services, company details, and helping clients connect with professional support.",
      link: "https://www.bestchoicehcsllc.com/",
    },
    {
      id: 3,
      image: project3,
      title: "Dahlia Austin",
      description:
        "A modern business website created with a clean layout, responsive design, and user-friendly experience to showcase services and brand information.",
      link: "https://www.dahliaaustin.com/",
    },
    {
      id: 4,
      image: project4,
      title: "Mentor 365 Services",
      description:
        "A service-based website designed to present programs, resources, and company information with a responsive and accessible user experience.",
      link: "https://www.mentor365services.org/",
    },
  ];

  return (
    <section className="project_con px-5 pb-29">

      <div className="project-info flex w-full items-center justify-between mb-5 font-bold">
        <h2 className="text-sm tracking-wider">
          SELECTED WORK
        </h2>

        <Link
          to="/work"
          className="
            border 
            border-black 
            p-3 
            rounded-lg
            transition-all 
            duration-300
            hover:bg-black
            hover:text-white
            hover:scale-105
          "
        >
          See All
        </Link>
      </div>


      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        "
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>

    </section>
  );
};

export default Project;