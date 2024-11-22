import React from "react";

function Videos() {
  const videos = [
    {
      title: "The Ultimate Frontend Developer Roadmap",
      duration: "10 Minutes",
      link: "/frontend-roadmap",
    },
    {
      title: "Session Based Authentication",
      duration: "2 Minutes",
      link: "/session-authentication",
    },
    {
      title: "Basic Authentication",
      duration: "5 Minutes",
      link: "/basic-authentication",
    },
    {
      title: "Basics of Authentication",
      duration: "5 Minutes",
      link: "/basics-authentication",
    },
    {
      title: "Graph Data Structure",
      duration: "13 Minutes",
      link: "/graph-data-structure",
    },
    {
      title: "Heap Data Structure",
      duration: "11 Minutes",
      link: "/heap-data-structure",
    },
    {
      title: "Tree Data Structure",
      duration: "8 Minutes",
      link: "/tree-data-structure",
    },
  ];

  return (
    <section className="w-full max-w-[984px] max-md:max-w-full mt-10">
      <h2 className="text-3xl font-bold mb-5 text-white">Videos</h2>
      <ul className="space-y-4">
        {videos.map((video, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b border-gray-300 py-2"
          >
            <a
              href={video.link}
              className="text-white hover:text-blue-500 transition-colors duration-200"
            >
              {video.title}
            </a>
            <span className="text-white">{video.duration}</span>
          </li>
        ))}
      </ul>
      <button className="mt-5 px-6 py-2 text-white bg-gradient-to-r from-gray-500 to-gray-700 rounded-full">
        View All Videos →
      </button>
    </section>
  );
}

export default Videos;
