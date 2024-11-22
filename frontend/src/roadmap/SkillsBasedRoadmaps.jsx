import React from "react";

function SkillsBasedRoadmaps() {
  const skills = [
    {
      name: "Python",
      className:
        "px-11 pt-4 pb-9 mt-2.5 bg-gray-900 rounded-[40px] max-md:px-5",
      link: "/python",
    },
    {
      name: "SQL",
      className:
        "px-11 pt-4 pb-9 mt-2.5 bg-gray-900 rounded-[40px] max-md:px-5",
      link: "/sql",
    },
    {
      name: "Javascript",
      className:
        "px-11 pt-4 pb-9 mt-2.5 bg-gray-900 rounded-[40px] max-md:px-5",
      link: "/javascript",
    },
    {
      name: "Node js",
      className:
        "px-11 pt-4 pb-9 mt-2.5 bg-gray-900 rounded-[40px] max-md:px-5",
      link: "/nodejs",
    },
    {
      name: "React",
      className:
        "px-11 pt-4 pb-9 mt-2.5 bg-gray-900 rounded-[40px] max-md:px-5",
      link: "/react",
    },
    {
      name: "Angular",
      className:
        "px-11 pt-4 pb-9 mt-2.5 bg-gray-900 rounded-[40px] max-md:px-5",
      link: "/angular",
    },
  ];

  return (
    <section className="w-full max-w-[984px] max-md:max-w-full">
      <h2 className="flex flex-wrap pt-10 pb-10 gap-3.5 self-stretch mt-20 text-4xl leading-none text-center text-white max-md:mt-10">
        <div className="grow shrink w-[373px] max-md:max-w-full">
          Skills-based Roadmaps
        </div>
      </h2>
      <div className="flex gap-5 mt-2.5 max-md:flex-col">
        {[0, 1, 2].map((columnIndex) => (
          <div
            key={columnIndex}
            className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
          >
            <div className="flex flex-col text-4xl font-bold text-center text-sky-400 whitespace-nowrap max-md:mt-10">
              {skills
                .slice(columnIndex * 2, columnIndex * 2 + 2)
                .map((skill, index) => (
                  <a href={skill.link} key={index} className={skill.className}>
                    {skill.name}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsBasedRoadmaps;
