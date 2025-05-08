import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Heading from "../components/Heading";
import { organizationProjects, projects } from "./data/projects";

const tabs = [
  { id: "professional", label: "Professional Projects", projects: organizationProjects },
  { id: "personal", label: "Personal Projects", projects: projects },
];

const techStacks = ["React.js", "Next.js", "Node.js", "MongoDB", "Express.js"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(10);

  const activeProjects = tabs.find((tab) => tab.id === activeTab)?.projects || [];

  const filteredProjects = activeProjects.filter((project) =>
    (searchQuery === "" || project.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedTech === "All" || project.techStack.includes(selectedTech))
  );

  useEffect(() => {
    setVisibleProjects(10);
  }, [activeTab]);

  return (
    <motion.main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-2 sm:py-8">
          <Heading title="Projects" />

          {/* Tabs */}
          <div className="flex space-x-6 mb-6 border-b border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`relative px-4 py-2 text-sm font-semibold transition ${activeTab === tab.id ? "text-white" : "text-gray-400"
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="tab-underline" className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-400" />
                )}
              </button>
            ))}
          </div>

          {/* Search & Filter */}
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="Search projects..."
              className="p-2 rounded-lg bg-gray-800 text-white w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="p-2 rounded-lg bg-gray-800 text-white"
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
            >
              <option value="All">All Tech</option>
              {techStacks.map((tech) => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.slice(0, visibleProjects).map((project: any, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-800 text-white rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {project.image && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-lg mb-4 shadow-md transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </a>
                )}
                <h3 className="text-xl font-semibold mb-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-emerald-400 transition">
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-300 mb-2">{project.desc}</p>
                {project.techStack && <p className="text-sm text-gray-400"><strong>Tech:</strong> {project.techStack.join(", ")}</p>}
                {project.libraries && <p className="text-sm text-gray-400"><strong>Libs:</strong> {project.libraries.join(", ")}</p>}
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <button
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => setVisibleProjects((prev) => prev + 10)}
            >
              Load More
            </button>
          )}

          {/* Call-to-Action Section */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-white">Want to Work With Me or Hire Me?</h2>
            <p className="text-gray-400 mt-2">Let's build something amazing together!</p>
            <a href="https://wa.me/8437333427?text=Hello%20there!%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer" className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg inline-block hover:bg-green-600">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Projects;
