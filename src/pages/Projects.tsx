import Heading from "../components/Heading";
import { organizationProjects } from "./data/projects";

const Projects = () => {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Heading title="Professional Projects" />
          <p className="text-sm text-gray-400 mb-6">
            Please note: Images are not displayed due to confidentiality. </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizationProjects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 text-white rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-2">{project.desc}</p>
                {project.techStack && (
                  <p className="text-sm text-gray-400">
                    <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                  </p>
                )}
                {project.libraries.length > 0 && (
                  <p className="text-sm text-gray-400">
                    <strong>Libraries:</strong> {project.libraries.join(", ")}
                  </p>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
