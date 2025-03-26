import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "What technologies do you specialize in?", answer: "I specialize in React.js, Next.js, React Native, Tailwind CSS, and the MERN stack." },
    { question: "Do you offer website maintenance?", answer: "Yes, I provide ongoing support and maintenance for websites and applications." },
    { question: "How long does a project take?", answer: "Timelines vary based on complexity. A basic site may take 2-4 weeks, while larger projects take longer." },
    { question: "Do you work with startups and small businesses?", answer: "Absolutely! I enjoy helping startups and small businesses establish their online presence." },
    { question: "Can you redesign an existing website?", answer: "Yes, I can revamp your existing site to improve performance, aesthetics, and user experience." },
    { question: "Do you provide hosting services?", answer: "Yes, we provide hosting services along with development on platforms like Vercel, Hostinger, and Railway." },
    { question: "What is your pricing model?", answer: "Pricing depends on project complexity and scope. Contact me for a customized quote." }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div className="mt-10"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
      }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div key={index} className="p-4 bg-gray-800 rounded-lg cursor-pointer"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            transition={{ duration: 0.3 }}
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-xl font-semibold flex justify-between items-center">
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </h3>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="text-gray-400 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}