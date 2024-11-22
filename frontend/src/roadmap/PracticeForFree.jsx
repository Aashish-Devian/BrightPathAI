import React from "react";

function PracticeForFree() {
  return (
    <section className="w-full max-w-[984px] max-md:max-w-full mt-10 text-center">
      <h2 className="text-3xl font-bold text-white">Practice for Free</h2>

      <div className="bg-black-800 text-white rounded-lg p-6 mt-6">
        <h3 className="text-2xl font-bold mb-4">
          The best free resources for Coding Interviews. Period.
        </h3>
        <ul className="text-lg mb-4 space-y-2">
          <li>
            ✅ Organized study plans and roadmaps (Blind 75, Neetcode 150).
          </li>
          <li>✅ Detailed video explanations.</li>
          <li>✅ Public Discord community with over 30,000 members.</li>
          <li>✅ Sign in to save your progress.</li>
        </ul>
        <p className="italic text-lg">Much more coming soon!</p>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button className="px-6 py-2 text-white bg-blue-700 rounded-full hover:bg-blue-800 transition-colors duration-200">
          Start Practicing
        </button>
        <button className="px-6 py-2 text-white bg-green-700 rounded-full hover:bg-green-800 transition-colors duration-200">
          View Roadmap
        </button>
        <button className="px-6 py-2 text-white bg-purple-700 rounded-full hover:bg-purple-800 transition-colors duration-200">
          Join Discord
        </button>
      </div>
    </section>
  );
}

export default PracticeForFree;
