import AboutInfo from "./AboutInfo";
import AboutStack from "./AboutStack";
import ContactInfo from "../Contact/ContactInfo";

const About = () => {
  return (
    <>
          <section className="about_con px-5 py-20">
      <div className="about_flex flex gap-10">
        <div className="about_title max-w-[30%] w-full">
          <h2 className="text-[15px] font-bold">WHAT I DO</h2>
        </div>

        <div className="about_content max-w-[650px] w-full mr-auto">
          <AboutInfo />
          <AboutStack />
        </div>
      </div>
    </section>


    <section className="px-5 py-20">
      <div className="flex gap-10">
     <div className="max-w-[30%] w-full"> <h2 className="text-[15px] font-bold">SAY HELLO</h2> </div>

      <ContactInfo></ContactInfo>


      </div>

      
    </section>
    </>

  );
};

export default About;