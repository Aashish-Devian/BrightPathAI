import React from "react";

function RoleBasedRoadmaps() {
  const roles = [
    {
      name: "Frontend",
      className:
        "grow px-10 py-7 text-sky-400 whitespace-nowrap bg-gray-900 rounded-[40px] w-fit max-md:px-5",
    },
    {
      name: "Full stack",
      className:
        "px-6 py-7 mt-10 text-sky-400 leading-none bg-gray-900 rounded-[40px] max-md:px-5",
    },
    {
      name: "Backend",
      className:
        "grow px-10 py-7 text-sky-400 whitespace-nowrap bg-gray-900 rounded-[40px] w-fit max-md:px-5",
    },
    {
      name: "Data Analyst",
      className:
        "grow px-7 py-6 text-sky-400 bg-gray-900 rounded-[40px] w-fit max-md:pl-5",
    },
    {
      name: "Devops",
      className:
        "grow px-12 py-7 whitespace-nowrap bg-gray-900 bg-opacity-70 rounded-[40px] w-fit max-md:px-5",
    },
    {
      name: "Data Engineer",
      className:
        "grow px-1.5 py-6 bg-gray-900 rounded-[40px] w-fit text-sky-400",
    },
  ];

  return (
    <section className="mt-6 w-full max-w-[982px] max-md:max-w-full">
      <h2 className="z-10 px-12 pt-20 pb-20 mt-0 mx-auto max-w-full text-4xl  text-center text-white max-md:px-5 flex justify-center items-center">
        Role-based Roadmaps
      </h2>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-4xl font-bold text-center max-md:mt-10">
            {roles.slice(0, 2).map((role, index) => (
              <button key={index} className={role.className}>
                {role.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full text-4xl font-bold leading-none text-center max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 max-md:max-w-full">
              {roles.slice(2, 4).map((role, index) => (
                <button key={index} className={role.className}>
                  {role.name}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-10 mt-11 text-sky-400 max-md:mt-10 max-md:max-w-full">
              {roles.slice(4).map((role, index) => (
                <button key={index} className={role.className}>
                  {role.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoleBasedRoadmaps;
