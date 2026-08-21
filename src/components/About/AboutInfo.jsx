import { Link } from "react-router-dom";

const AboutInfo = () => {
  return (
    <div className="about_info w-full">
      <h3 className="text-4xl font-medium leading-tight text-gray-400">
      I build modern<span className="text-black">  digital products by combining thoughtful design</span> with clean, scalable development.
      </h3>

      <p className="mt-6 w-[83%] text-[17px] leading-relaxed text-gray-600">
        I'm Don, a software developer based in the Philippines with experience
        building responsive websites and web applications. I enjoy transforming
        ideas into clean, intuitive, and reliable digital experiences.
      </p>

      <p className="mt-4 w-[83%] text-[17px] leading-relaxed text-gray-600">
        My focus is creating products that are simple to use, maintainable to
        build, and designed with both users and performance in mind. I'm always
        learning and exploring new technologies to become a stronger full-stack
        developer.
      </p>

      <Link
        to="/about"
        className="inline-block mt-6 border-b border-black font-medium"
      >
        About me →
      </Link>
    </div>
  );
};

export default AboutInfo;