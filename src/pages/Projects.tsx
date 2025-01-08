import { motion } from "framer-motion";
import Heading from "../components/Heading";
import { organizationProjects } from "./data/projects";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        delayChildren: 0.2, 
        staggerChildren: 0.1 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Heading title="Professional Projects" />
          <motion.p 
            className="text-sm text-gray-400 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={itemVariants}
          >
            Please note: Images are not displayed due to confidentiality.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
          >
            {organizationProjects.map((project, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 text-white rounded-xl shadow-lg z-10"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <span className="text-gray-200">{project.title}</span>
                  )}
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
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default Projects;
