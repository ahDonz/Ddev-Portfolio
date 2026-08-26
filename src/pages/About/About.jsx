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
        <div className="max-w-[500px] w-full border-b border-black">

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



      
        <div className="flex justify-between">

            <div className="port_img1 border-b max-w-[350px] w-full mb-auto  ">
          <img className="border-b border-e-black max-w-6 h-7 bg-black" src="" alt="" />
       </div>
          <WorkExperience/>


           <div className="max-w-[500px] w-full border-b border-black"></div>
        </div> 
    </>
  );
};

export default About;