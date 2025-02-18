import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import profilePic from "../assets/images/profilePic.webp";
import Heading from "./Heading";
import { calculateExperience } from '../utils/calculateExperience';

export function AboutMe() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            shape: {
              type: "circle"
            },
            size: {
              value: 3
            },
            move: {
              speed: 1,
              direction: "none",
              random: true,
              straight: false
            }
          }
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading title="About Me" />
          <motion.p
            className="text-xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            I'm Karanvir Singh, a passionate software engineer with {calculateExperience(2022, 5)} of experience in building scalable web applications and innovative solutions.
          </motion.p>

          <div className="w-full md:w-2/3 mx-auto space-y-6">
            <motion.p
              className="text-lg text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              With a strong foundation in front-end development, I specialize in React.js and Next.js, creating seamless and efficient user experiences. I am always eager to learn new technologies and strive to stay at the forefront of industry trends.
            </motion.p>

            <motion.p
              className="text-lg text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              When I'm not coding, I enjoy working on personal projects, exploring new frameworks, and learning about the latest advancements in web development. I believe in building applications that not only work well but also create a delightful user experience.
            </motion.p>
          </div>
        </motion.div>

        {/* Image with Hover Animation */}
        <motion.div
          className="flex justify-center mt-12"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
            <img
              src={profilePic}
              alt="Karanvir Singh"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-gray-200 mb-4">Let’s Build Something Together</h3>
          <a
            href="mailto:karanvir011998@gmail.com"
            className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200 animate-bounce"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
