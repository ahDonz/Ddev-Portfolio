import PageTitle from "../../components/PageTitle";

import img1 from "./WorkImages/img1.png";
import img2 from "./WorkImages/img2.png";
import img3 from "./WorkImages/img3.png";
import img4 from "./WorkImages/img4.png";
import img5 from "./WorkImages/img5.png";
import img6 from "./WorkImages/img6.png";

const Work = () => {
  const projects = [
    {
      title: "World of Love Home Care",
      image: img1,
      tags: ["WordPress", "Responsive Design", "Website Development"],
      link: "https://w21440.proweaversite21.com/",
    },
    {
      title: 'Excel In Care "Home Health Agency LLC"',
      image: img2,
      tags: ["WordPress", "Custom Website", "UI Design"],
      link: "https://www.excelincarehha.com/",
    },
    {
      title: "Humblely Wellness",
      image: img3,
      tags: ["WordPress", "Frontend", "Website Design"],
      link: "https://w21419.proweaversite21.com/",
    },
    {
      title: "Quality Care Pharmacy",
      image: img4,
      tags: ["WordPress", "Healthcare Website", "Responsive"],
      link: "https://www.qualitycarepharm.com/",
    },
    {
      title: "Assisted Co. LLC",
      image: img5,
      tags: ["WordPress", "Custom Theme", "Frontend"],
      link: "https://w21362.proweaversite21.com/",
    },
    {
      title: "Angelic Companion Services LLC",
      image: img6,
      tags: ["WordPress", "Website Development", "Optimization"],
      link: "https://w21324.proweaversite21.com/",
    },
  ];

  return (
    <>
      <PageTitle title="Work" />

      <h2 className="text-2xl font-bold mt-6">
        Projects & Experience
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          mt-8
        "
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              border
              rounded-xl
              overflow-hidden
              hover:shadow-xl
              transition
              cursor-pointer
              flex
              flex-col
            "
          >

            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-48
                object-cover
              "
            />

            <div className="p-6 flex flex-col justify-between min-h-52">
              <div>
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="
                        bg-gray-200
                        px-3
                        py-1
                        rounded-full
                        text-sm
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-blue-600 mt-5">
                View Website →
              </p>
            </div>

          </a>
        ))}
      </div>
    </>
  );
};

export default Work;