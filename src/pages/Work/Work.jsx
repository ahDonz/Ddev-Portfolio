import PageTitle from "../../components/PageTitle";

import img1 from "./WorkImages/img1.png";
import img2 from "./WorkImages/img2.png";
import img3 from "./WorkImages/img3.png";
import img4 from "./WorkImages/img4.png";
import img5 from "./WorkImages/img5.png";
import img6 from "./WorkImages/img6.png";
import img7 from "./WorkImages/img7.png";
import img8 from "./WorkImages/img8.png";
import img9 from "./WorkImages/img9.png";
import img10 from "./WorkImages/img10.png";
import img11 from "./WorkImages/img11.png";
import img12 from "./WorkImages/img12.png";

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
    },{
  title: "Better Days Sports Foundation",
  image: img7,
  tags: ["WordPress", "Website Development", "Responsive Design"],
  link: "https://www.betterdayssportsfoundation.org/",
},
{
  title: 'Strong Tower "Healthcare Services LLC"',
  image: img8,
  tags: ["WordPress", "Healthcare Website", "Frontend"],
  link: "https://www.strongtowerhealthcareservices.com/",
},
{
  title: "INTEGRAL CAREGIVERS LLC",
  image: img9,
  tags: ["WordPress", "Custom Website", "Responsive"],
  link: "https://www.integralcaregiversllc.com/",
},
{
  title: 'Stamp & Co "Care LLC"',
  image: img10,
  tags: ["WordPress", "Website Development", "UI Design"],
  link: "https://www.stampandcocare.com/",
},
{
  title: 'DB WELLNESS AND "IV THERAPY LLC"',
  image: img11,
  tags: ["WordPress", "Healthcare Website", "Optimization"],
  link: "https://www.dbwellnessandivtherapy.com/",
},
{
  title: 'Classic Concept "Home LLC"',
  image: img12,
  tags: ["WordPress", "Custom Theme", "Frontend"],
  link: "https://w21778.proweaversite21.com/",
},

  ];

  return (
    <>
      <PageTitle title="Work" />

      <h2 className="text-2xl font-bold mt-6">
        Projects & Experience
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-5 pt-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border  border-gray-400 rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
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