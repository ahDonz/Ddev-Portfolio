import PageTitle from "../../components/PageTitle";
import WorkExperience from "../Work/WorkExperience";

const About = () => {
  return (
<>
      <PageTitle title="About" />

      <section className="mx-auto w-full max-w-[1400px] px-5 py-20 flex  gap-15 " >
       <div className="port_img1 border-b max-w-[350px] w-full mb-auto  ">
          <img className="border-b border-e-black max-w-6 h-7 bg-black" src="" alt="" />
       </div>
        <div className="max-w-[500px] w-full  border-black">

          <h2 className="text-2xl font-semibold leading-[1.1] md:text-4xl">
            I'm Don — a software developer focused on building modern
            web applications and digital experiences.
          </h2>

          <div className="mt-20">

            <h3 className="text-xl font-semibold">
              My approach
            </h3>

            <div className="mt-6 space-y-6 text-lg leading-[1.6] text-gray-600">

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



      
      <div className="flex justify-between gap-10">
              <div className="max-w-[500px] w-full mb-auto">
                <h2 className="text-2xl font-bold">Work Experience</h2>
              </div>

            <div className="w-full">
              <div className="mb-8">
                <h3 className="font-bold text-lg">Software Developer Intern</h3>
                <p className="text-gray-500">Jul 2024 – Feb 2025</p>
                <p className="font-medium">MIC Department (Government)</p>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg">Frontend Developer</h3>
                <p className="text-gray-500">Apr 2025 – May 2026</p>
                <p className="font-medium">Proweaver</p>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg">Junior Full-Stack Developer</h3>
                <p className="text-gray-500">2026 – Present</p>
                <p className="font-medium">Independent Developer</p>
              </div>
            </div>
      </div>


        <div className="flex justify-between gap-10">
          <div className="max-w-[500px] w-full mb-auto">
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="w-full">
            <div className="mb-8">
              <h3 className="font-bold text-lg">Bachelor of Science in Information Technology</h3>
              <p className="text-gray-500">2021 – 2025</p>
              <p className="font-medium">Cebu Eastern College</p>
              <p className="text-gray-600">
                Cebu City, Philippines
              </p>
            </div>
          </div>
        </div>


<div className="flex justify-between gap-10">
  <div className="max-w-[500px] w-full">
    <h2 className="text-2xl font-bold">Skills & Toolset</h2>
  </div>

  <div className="w-full space-y-8">
    {/* Frontend */}
    <div>
      <h3 className="font-semibold mb-3">Frontend</h3>
      <div className="flex flex-wrap gap-3">
        {["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Backend */}
    <div>
      <h3 className="font-semibold mb-3">Backend</h3>
      <div className="flex flex-wrap gap-3">
        {["PHP", "Node.js", "Express.js", "REST API"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Database */}
    <div>
      <h3 className="font-semibold mb-3">Database</h3>
      <div className="flex flex-wrap gap-3">
        {["MySQL", "MongoDB"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Tools */}
    <div>
      <h3 className="font-semibold mb-3">Developer Tools</h3>
      <div className="flex flex-wrap gap-3">
        {["Git", "GitHub", "VS Code", "Postman", "XAMPP", "WordPress" ,"Teams"  , "Discord" ].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default About;