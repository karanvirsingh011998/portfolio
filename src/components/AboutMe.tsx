import { motion } from 'framer-motion';
import Heading from "./Heading";
import { calculateExperience } from '../utils/calculateExperience';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export function AboutMe() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          <Heading title="About Me" />
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
            variants={fadeInUp}
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-semibold">Karanvir Singh</span>, a passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-semibold">Software Engineer</span> with {calculateExperience(2022, 5)} of experience in building scalable web applications. I specialize in <span className="text-green-400">React.js</span>, <span className="text-blue-400">Next.js</span>, and modern frontend technologies, crafting high-performance, user-friendly interfaces.
          </motion.p>
        </motion.div>

        {/* Timeline Section with Links */}
        <motion.div className="mt-16 text-center" variants={fadeInUp}>
          <h3 className="text-2xl font-semibold text-gray-200 mb-6">My Journey</h3>
          <div className="space-y-6 max-w-lg mx-auto">
            {[
              { year: "2022", text: "🏁 Started at ", company: "Wits Innovation Lab", link: "https://www.thewitslab.com/" },
              { year: "2024", text: "🚀 Joined ", company: "Lumino Guru", link: "https://luminoguru.com/" }
            ].map((event, index) => (
              <motion.div 
                key={index} 
                className="p-4 bg-gray-800 rounded-lg shadow-lg" 
                whileHover={{ scale: 1.05 }}
              >
                {event.text}
                <a 
                  href={event.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline font-semibold"
                >
                  {event.company}
                </a> ({event.year})
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div className="mt-16 text-center" variants={fadeInUp}>
          <h3 className="text-2xl font-semibold text-gray-200 mb-6">Achievements</h3>
          <ul className="list-disc list-inside text-gray-300 text-lg">
            <li>🏆 Built & deployed <b><a href="https://pixelprintstudios.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Pixel Print Studios</a></b></li>
            <li>🚀 {calculateExperience(2022, 5)} experience in <b>React, Next.js & Node.js</b></li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-16 text-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="mailto:karanvir011998@gmail.com" className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-200">
            Let’s Build Something Awesome 🚀
          </a>
        </motion.div>
      </div>
    </section>
  );
}
