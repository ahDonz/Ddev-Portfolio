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
      title: "Excel in Care Home Health Agency LLC",
      description:
        "Experience compassionate, personalized support designed to make daily life easier and more comfortable. Our dedicated caregivers assist with everyday tasks, ensuring safety, independence, and peace of mind.",
    },
    {
      id: 2,
      image: project2,
      title: "Quality Care Pharmacy",
      description:
        "Welcome to Quality Care Pharmacy, your trusted partner in health and wellness. We are committed to providing safe, reliable, and personalized pharmaceutical care, ensuring you receive the right medication.",
    },
    {
      id: 3,
      image: project3,
      title: "DB Wellness and IV Therapy LLC",
      description:
        "DB Wellness and IV Therapy LLC provides IV therapy and wellness services focused on clear, structured care. The team handles each session from intake to post treatment guidance.",
    },
    {
      id: 4,
      image: project4,
      title: "Lindsey Hernandez Counseling LLC",
      description:
        "Lindsey Hernandez Counseling LLC provides trauma-informed counseling for children, teens, and adults across Pennsylvania.",
    },
  ];

  return (
    <section className="project_con px-5 pb-29">

      <div className="project-info flex w-full items-center justify-between mb-5 font-bold">
        <h2 className="text-sm tracking-wider">
          SELECTED WORK
        </h2>

        <Link
          to="/projects"
          className="border border-black p-3"
        >
          See All
        </Link>
      </div>


      {/* Projects Grid */}
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
          />
        ))}
      </div>

    </section>
  );
};

export default Project;