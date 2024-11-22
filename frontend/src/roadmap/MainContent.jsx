import React from "react";

function MainContent() {
  return (
    <main>
      <div className="flex justify-center items-center">
        <h1 className="mt-11 ml-4 text-8xl font-black text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl text-center">
          <span>BrightPath </span>
          <span>AI</span>
        </h1>
      </div>
      <p className="px-4 pt-4 pb-7 mt-8 ml-11 max-w-full text-2xl font-bold leading-6 text-center text-fuchsia-600 rounded-xl bg-white bg-opacity-0 min-h-[148px] shadow-[0px_4px_138px_rgba(0,0,0,0.1)] w-[835px] max-md:max-w-full">
        Helps to create roadmaps, guides and other educational content to help
        guide Learners in picking up a path and guide their learnings.
      </p>
    </main>
  );
}

export default MainContent;
