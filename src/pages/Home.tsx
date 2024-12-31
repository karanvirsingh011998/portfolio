import {
  Github,
  Linkedin,
  Mail,
  Server,
  Code2,
  Globe,
  Cpu,
  ExternalLink,
  FileDown,
  Calendar,
  Building2,
} from "lucide-react";
import { Button } from "../components/Button";

export function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Karanvir Singh
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Software Engineer
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate software engineer with 2.6 years of experience building
              scalable web applications and innovative solutions using modern
              technologies.
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a
                href="https://github.com/karanvirsingh011998"
                className="hover:text-blue-400 transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 group-hover:stroke-blue-400"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1-3-3 0-.5-2.64-1.5-5.36-5-5.36C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/karanvir-singh-a72a61196/"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:karanvi011998@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <Button
              href="https://drive.google.com/file/d/1RHCTdhV2oQvN2f4dhOEXHOnFeArf_bhs/view?usp=drive_link"
              download
              variant="secondary"
              className="animate-bounce"
            >
              <FileDown className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Professional Experience
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Building2 className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Software Engineer
                </h3>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>May 2022 - Oct 2024 (2 years 6 months)</span>
                </div>
                <h4 className="text-lg text-blue-400 mb-3">
                  Wits Innovation Lab
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Developed and maintained full-stack web applications using
                    the MERN stack
                  </li>
                  <li>
                    • Implemented responsive and intuitive user interfaces using
                    React.js and modern CSS frameworks
                  </li>
                  <li>
                    • Built RESTful APIs using Node.js and Express.js,
                    integrated with MongoDB databases
                  </li>
                  <li>
                    • Collaborated with cross-functional teams to deliver
                    high-quality software solutions
                  </li>
                  <li>
                    • Participated in code reviews and mentored junior
                    developers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Globe, title: "MongoDB", desc: "NoSQL Database" },
              { icon: Server, title: "Express.js", desc: "Backend Framework" },
              { icon: Code2, title: "React", desc: "Frontend Library" },
              { icon: Cpu, title: "Node.js", desc: "Runtime Environment" },
            ].map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-all group"
              >
                <skill.icon className="w-12 h-12 mb-4 text-blue-400 group-hover:text-emerald-400 transition-colors" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Realtime Tracking",
                desc: "This project demostrates a real-time location tracking application built with Node.js, Express, Socket.io and Leaflet.js. Live location of user is displayed on an interactive map in real-time",
                // image:
                //   "",
              },
              {
                title: "Task Management App",
                desc: "Collaborative task management system with real-time updates",
                // image:
                //   "",
              },
            ].map((project, index) => (
              <div key={index} className="p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-300">{project.desc}</p>
              </div>
              // <div
              //   key={index}
              //   className="group relative overflow-hidden rounded-xl"
              // >
              //   <img
              //     // src={project.image}
              //     alt={project.title}
              //     className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              //   />
              //   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent p-6 flex flex-col justify-end">
              //     <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              //       {project.title}
              //       <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              //     </h3>
              //     <p className="text-gray-300">{project.desc}</p>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
