import { Link } from "react-router-dom";
import AboutSkills from "./About_skill";

const AboutStack = () => {
  return (
    <div className="about_stack mt-12">
      <div className="about_info flex justify-between items-center">
        <h2 className="font-bold text-[17px]">Stack</h2>

        <Link
            to="/about" className="border border-black px-2 py-1 inline-flex items-center gap-2 hover:bg-black hover:text-white transition" > View All <span>→</span> </Link>
      </div>

      <AboutSkills />
    </div>
  );
};

export default AboutStack;