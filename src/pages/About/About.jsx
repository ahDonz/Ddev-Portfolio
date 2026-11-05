import PageTitle from "../../components/PageTitle";

const About = () => {

  const skills = {
    Frontend: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    Backend: ["PHP", "Node.js", "Express.js", "REST API"],
    Database: ["MySQL", "MongoDB"],
    "Developer Tools": [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "XAMPP",
      "WordPress",
      "Teams",
      "Discord",
    ],
  };


  return (
    <>
      <PageTitle title="About" />


      <main className="
        mx-auto
        w-full
        max-w-[1400px]
        px-5
      ">


        {/* INTRO */}
        <section
          className="
            flex
            flex-col
            gap-10
            py-20

            md:flex-row
            md:gap-12
          "
        >

          <div
            className="
              w-full
              md:w-[40%]
              max-w-[450px]
            "
          >
            <div className="
              h-[350px]
              bg-black
            ">
            </div>
          </div>



          <div
            className="
              w-full
              md:w-[60%]
              max-w-[600px]
            "
          >

            <h2
              className="
                text-2xl
                font-semibold
                leading-tight

                md:text-3xl
                lg:text-4xl
              "
            >
              I'm Don — a software developer focused on building modern
              web applications and digital experiences.
            </h2>


            <div className="mt-12">


              <h3 className="text-xl font-semibold">
                My approach
              </h3>


              <div
                className="
                  mt-6
                  space-y-6
                  text-lg
                  leading-relaxed
                  text-gray-600
                "
              >

                <p>
                  I enjoy turning ideas into functional, thoughtful, and
                  reliable digital products. I focus on creating clean
                  interfaces, responsive experiences, and practical
                  solutions that work.
                </p>


                <p>
                  My approach is driven by curiosity. I enjoy understanding
                  how things work, exploring different solutions, and
                  continuously improving the way I build websites and
                  applications.
                </p>


                <p>
                  I work primarily across the frontend while continuing
                  to expand my skills into backend development and
                  full-stack engineering.
                </p>


                <p>
                  I believe good software should feel simple to use,
                  thoughtful in its details, and reliable behind the scenes.
                </p>

              </div>


            </div>

          </div>

        </section>



        <InfoSection title="Work Experience">

          <Experience
            role="Software Developer Intern"
            date="Jul 2024 – Feb 2025"
            company="MIC Department (Government)"
          />


          <Experience
            role="Frontend Developer"
            date="Apr 2025 – May 2026"
            company="Proweaver"
          />


          <Experience
            role="Junior Full-Stack Developer"
            date="2026 – Present"
            company="Independent Developer"
          />

        </InfoSection>



        <InfoSection title="Education">

          <Experience
            role="Bachelor of Science in Information Technology"
            date="2021 – 2025"
            company="Cebu Eastern College"
            location="Cebu City, Philippines"
          />

        </InfoSection>



        <InfoSection title="Skills & Toolset">

          <div className="space-y-8">

          {
            Object.entries(skills).map(([category, items]) => (

              <div key={category}>

                <h3 className="mb-3 font-semibold">
                  {category}
                </h3>


                <div className="flex flex-wrap gap-3">

                  {
                    items.map(skill => (

                      <span
                        key={skill}
                        className="
                          rounded-lg
                          border
                          border-gray-300
                          px-4
                          py-2
                          text-sm
                        "
                      >
                        {skill}
                      </span>

                    ))
                  }

                </div>

              </div>

            ))
          }

          </div>

        </InfoSection>


      </main>
    </>
  );
};





const InfoSection = ({title, children}) => {

  return (

    <section
      className="
        flex
        flex-col
        gap-6
        border-t
        py-12

        md:flex-row
        md:justify-between
        md:gap-10
      "
    >

      <div
        className="
          w-full
          md:w-[35%]
        "
      >

        <h2 className="
          text-2xl
          font-bold
        ">
          {title}
        </h2>

      </div>



      <div
        className="
          w-full
          md:w-[60%]
        "
      >

        {children}

      </div>


    </section>

  );

};





const Experience = ({
  role,
  date,
  company,
  location
}) => {

return (

<div className="mb-8">

<h3 className="text-lg font-bold">
{role}
</h3>


<p className="text-gray-500">
{date}
</p>


<p className="font-medium">
{company}
</p>


{
location && (
<p className="text-gray-600">
{location}
</p>
)
}


</div>

);

};


export default About;