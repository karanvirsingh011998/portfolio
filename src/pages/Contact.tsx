import { Mail, MapPin, Phone, Code, Smartphone, Settings } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import { FAQs } from '../components/FAQ';

export function Contact() {
  const services = [
    { title: "Website Development", icon: <Code className="w-10 h-10 text-blue-400" /> },
    { title: "App Development", icon: <Smartphone className="w-10 h-10 text-blue-400" /> },
    { title: "Custom Web Solutions", icon: <Settings className="w-10 h-10 text-blue-400" /> },
  ];

  const faqs = [
    { question: "What technologies do you specialize in?", answer: "I specialize in React.js, Next.js, React Native, Tailwind CSS, and the MERN stack." },
    { question: "Do you offer website maintenance?", answer: "Yes, I provide ongoing support and maintenance for websites and applications." },
    { question: "How long does a project take?", answer: "Timelines vary based on complexity. A basic site may take 2-4 weeks, while larger projects take longer." },
    { question: "Do you work with startups and small businesses?", answer: "Absolutely! I enjoy helping startups and small businesses establish their online presence." },
    { question: "Can you redesign an existing website?", answer: "Yes, I can revamp your existing site to improve performance, aesthetics, and user experience." },
    { question: "Do you provide hosting services?", answer: "Yes, we provide hosting services along with development. We can help you set up and manage hosting on platforms like Vercel, Hostinger, Railway, Render, and others, ensuring a seamless deployment for your website or application." },
    { question: "What is your pricing model?", answer: "Pricing depends on project complexity and scope. Contact me for a customized quote." }
  ];

  const details = [
    { title: "Email", text: "karanvir01998@gmail.com", link: "mailto:karanvir011998@gmail.com", icon: <Mail className="w-6 h-6 text-blue-400" /> },
    { title: "Phone", text: "+91 8437333427", link: "tel:+918437333427", icon: <Phone className="w-6 h-6 text-blue-400" /> },
    { title: "LinkedIn", text: "linkedin.com/in/karanvir-singh-a72a61196/", link: "https://www.linkedin.com/in/karanvir-singh-a72a61196/", icon: <FaLinkedin className="w-6 h-6 text-blue-400" /> },
    { title: "GitHub", text: "github.com/karanvirsingh011998", link: "https://github.com/karanvirsingh011998", icon: <FaGithub className="w-6 h-6 text-blue-400" /> },
    { title: "Location", text: "Chandigarh, India", icon: <MapPin className="w-6 h-6 text-blue-400" /> }
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>

          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
            }}
          >
            <div className="space-y-6">
              {details.map((detail, index) => (
                <motion.div key={index} className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg shadow-lg cursor-pointer"
                  whileHover={{ rotate: 2, scale: 1.05 }}
                  whileTap={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 bg-blue-500/10 rounded-lg">{detail.icon}</div>
                  <div>
                    <h3 className="font-medium mb-1">{detail.title}</h3>
                    {detail.link ? (
                      <a href={detail.link} className="text-gray-400 hover:text-blue-400 transition-colors">{detail.text}</a>
                    ) : (
                      <p className="text-gray-400">{detail.text}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Services */}
            <motion.div className="bg-gray-800/50 rounded-xl p-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold mb-4">What I Offer</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
                {services.map((service, index) => (
                  <motion.div key={index} className="flex items-center gap-2 p-2 bg-gray-800 rounded-xl cursor-pointer"
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 0, 255, 0.3)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-3 bg-blue-500/10 rounded-lg">{service.icon}</div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* FAQs */}
          <FAQs />
        </div>
      </div>
    </main>
  );
}
