import { motion } from 'framer-motion';
import Heading from "./Heading";
import { calculateExperience } from '../utils/calculateExperience';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandGoogle, TbBrandReactNative } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { SiOpenai, SiRazorpay } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { SiNextdotjs, SiVite, SiAntdesign, SiTypescript, SiMui, SiTailwindcss, SiExpress, SiMongodb, SiFramer, SiShadcnui, SiDaisyui, SiRedux, SiReactquery, SiVercel, SiRailway, SiRender, SiGithub, SiHostinger, SiReacthookform, SiEslint, SiPrettier, SiJsonwebtokens, SiStyledcomponents, SiZod, SiStrapi, SiExpo, SiNativescript } from "react-icons/si";
import { FcAssistant } from 'react-icons/fc';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export function AboutMe() {
  const techStackVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const techStack = [
    { icon: FaReact, color: "text-blue-500", label: "React.js" },
    { icon: SiNextdotjs, color: "text-gray-900 dark:text-white", label: "Next.js" },
    { icon: SiTypescript, color: "text-blue-500", label: "TypeScript" },
    { icon: SiVite, color: "text-purple-500", label: "Vite" },
    { icon: TbBrandReactNative, color: "text-blue-500", label: "React Native" },
    { icon: SiExpo, color: "text-purple-700", label: "Expo Router" },
    { icon: SiOpenai, color: "text-green-500", label: "ChatGPT" },
    { icon: FaRobot, color: "text-purple-600", label: "Deepseek" },
    { icon: BsStars, color: "text-pink-500", label: "Cursor" },
    { icon: FaRobot, color: "text-red-400", label: "Lovable" },
    { icon: FaRobot, color: "text-blue-400", label: "Bolt.new" },
    { icon: FaRobot, color: "text-green-400", label: "Trae" },
    { icon: FaRobot, color: "text-yellow-400", label: "Codeium" },
    { icon: TbBrandGoogle, color: "text-orange-500", label: "Firebase Studio" },
    { icon: SiNativescript, color: "text-red-600", label: "NativeScript" },
    { icon: SiTailwindcss, color: "text-blue-400", label: "Tailwind CSS" },
    { icon: SiStyledcomponents, color: "text-pink-400", label: "Styled Components" },
    { icon: SiFramer, color: "text-pink-500", label: "Framer Motion" },
    { icon: SiShadcnui, color: "text-gray-900 dark:text-white", label: "Shadcn UI" },
    { icon: SiDaisyui, color: "text-yellow-500", label: "Daisy UI" },
    { icon: SiAntdesign, color: "text-blue-600", label: "Ant Design" },
    { icon: SiMui, color: "text-blue-500", label: "MUI" },
    { icon: SiReacthookform, color: "text-orange-500", label: "React Hook Form" },
    { icon: SiRazorpay, color: "text-blue-400", label: "Razorpay" },
    { icon: FcAssistant, color: "text-green-500", label: "Assistant UI" },
    { icon: SiZod, color: "text-blue-600", label: "Zod" },
    { icon: SiJsonwebtokens, color: "text-blue-500", label: "JWT" },
    { icon: FaNodeJs, color: "text-green-500", label: "Node.js" },
    { icon: SiExpress, color: "text-gray-500", label: "Express.js" },
    { icon: SiMongodb, color: "text-green-600", label: "MongoDB" },
    { icon: SiStrapi, color: "text-gray-600", label: "Strapi" },
    { icon: SiRedux, color: "text-purple-600", label: "Redux" },
    { icon: SiReactquery, color: "text-red-500", label: "React Query" },
    { icon: SiVercel, color: "text-white", label: "Vercel" },
    { icon: SiHostinger, color: "text-purple-500", label: "Hostinger" },
    { icon: SiRailway, color: "text-blue-500", label: "Railway" },
    { icon: SiRender, color: "text-purple-700", label: "Render" },
    { icon: SiGithub, color: "text-gray-900 dark:text-white", label: "GitHub Pages" },
    { icon: SiEslint, color: "text-purple-500", label: "ESLint" },
    { icon: SiPrettier, color: "text-pink-400", label: "Prettier" }
  ]

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
            Additionally, I have expertise in <span className="text-green-400">React Native</span>, <span className="text-yellow-400">Node.js</span> and <span className="text-green-500">MongoDB</span>, enabling me to build robust, full-stack applications with seamless backend integration.
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

        {/* Tech Stack */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold text-gray-200 mb-6">Tech Stack</h3>
          <div className="font-semibold mb-6 grid grid-cols-2 md:grid-cols-5 gap-6 justify-center text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {techStack.map(({ icon: Icon, color, label }, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={techStackVariants}
                whileHover={{ scale: 1.2, y: -5, transition: { duration: 0.3 } }}
                className="flex flex-col items-center gap-4 cursor-pointer"
              >
                <Icon size={40} className={color} />
                <p className="text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div className="mt-16 text-center" variants={fadeInUp}>
          <h3 className="text-2xl font-semibold text-gray-200 mb-6">Achievements</h3>
          <ul className="list-disc list-inside text-gray-300 text-lg">
            <li>🏆 Built & deployed <b><a href="https://pixelprintstudios.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Pixel Print Studios</a></b></li>
            <li>🚀 {calculateExperience(2022, 5)} experience in <b>React, Next.js, Node.js, MongoDB, React Native & Node.js</b></li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-16 text-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="mailto:karanvir011998@gmail.com" className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-200">
            <span className="hidden sm:inline">Let’s Build Something Awesome 🚀</span>
            <span className="sm:hidden">Let's Build 🚀</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
