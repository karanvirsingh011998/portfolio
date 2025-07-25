import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { ExternalLink, FileDown } from "lucide-react";
import { Button } from "../components/Button";
import ExperienceCard from "../components/ExperienceSection";
import { experiences } from "./data/experinece";
import Heading from "../components/Heading";
import SectionWrapper from "../components/SectionWrapper";
import { skills } from "./data/skills";
import { organizationProjects, projects } from "./data/projects";
import { useEffect, useState } from "react";
import { jobTitles } from "../utils/constants";
import resumePDF from "../assets/images/Reactjs-KaranvirSingh.pdf";
import HomeEffect from "../components/ParticalsEffect";
import { motion } from "framer-motion";
import { calculateExperience } from "../utils/calculateExperience";

export function Home() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <HomeEffect />

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 animate-fade-up">
              Karanvir Singh
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {jobTitles[titleIndex]}
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate software engineer with {calculateExperience(2022, 5)} of experience building
              scalable web applications and innovative solutions using modern
              technologies.
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a
                href="https://github.com/karanvirsingh011998"
                className="hover:text-blue-400 transition-colors group"
              >
                <FaGithub className="w-8 h-8" />
              </a>

              <a
                href="https://www.linkedin.com/in/karanvir-singh-a72a61196/"
                className="hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:karanvi011998@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                <MdMail className="w-8 h-8" />
              </a>
            </div>
            <Button
              download="karanvir-singh-resume.pdf"
              href={resumePDF}
              className="animate-bounce"
            >
              <FileDown className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <SectionWrapper>
        <Heading title="Professional Experience" />
        <div className="flex flex-col gap-4">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience${index}`}
              jobTitle={experience.jobTitle}
              companyName={experience.companyName}
              duration={experience.duration}
              companyUrl={experience.companyUrl}
              responsibilities={experience.responsibilities}
              techStack={experience.techStack}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Skills Section */}

      <SectionWrapper>
        <Heading title="Tech Stack" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-all group z-10"
            >
              {/* Rendering the icon component */}
              <skill.icon className="w-12 h-12 mb-4 text-blue-400 group-hover:text-emerald-400 transition-colors" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                {skill.title}
              </h3>
              <p className="text-gray-400 group-hover:text-emerald-400 transition-colors">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
              )} */}

      <SectionWrapper>
        <Heading title="Projects" />

        <motion.div
          className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto z-50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {[...organizationProjects, ...projects].map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl backdrop-blur-sm z-10 shadow-lg group transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  {project.title}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-emerald-400 transition"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </h3>

                <p className="text-gray-300 text-sm mb-4">{project.desc}</p>

                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                >
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-xs bg-blue-400/20 text-blue-300 px-2 py-1 rounded-full cursor-pointer"
                      variants={{
                        hidden: { opacity: 0, scale: 0.5 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                      whileHover={{
                        scale: 1.2,
                        backgroundColor: "rgba(96, 165, 250, 0.5)", // Light Blue Hover
                        color: "#ffffff",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-2 mt-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                >
                  {project.libraries && project.libraries.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-xs bg-blue-400/20 text-blue-300 px-2 py-1 rounded-full cursor-pointer"
                      variants={{
                        hidden: { opacity: 0, scale: 0.5 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                      whileHover={{
                        scale: 1.2,
                        backgroundColor: "rgba(96, 165, 250, 0.5)", // Light Blue Hover
                        color: "#ffffff",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Projects Section */}
      {/* <SectionWrapper>
        <Heading title="Personal Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl z-10"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {project.title}
                  <a
                    href={
                      project.link ?? "https://github.com/karanvirsingh011998"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>
                <p className="text-gray-300 mb-2">{project.desc}</p>
                {project.techStack && (
                  <p className="text-sm text-gray-400">
                    <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper> */}
    </main>
  );
}
