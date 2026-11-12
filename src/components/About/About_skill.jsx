const AboutSkills = () => {

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL"
  ];

  return (
    <div className="about_skill" >
      <div className="about_list" id="skill">
        <ul className="flex flex-wrap gap-2.5 list-none py-5">

          {skills.map((skill) => (
          <li
          key={skill}
          className="w-full max-w-fit text-center border border-gray-300 px-4 text-gray-400 transition-colors duration-300 hover:text-black"
        >
          {skill}
        </li>
          ))}

          <li className="w-full max-w-[140px] text-center border border-gray-300 p-1">
            <a href="/work">
              + More
            </a>
          </li>

        </ul>

        {/* <p className="py-5 font-tight text-sm">& always learning new things!</p> */}
      </div>
    </div>
  );
};

export default AboutSkills;