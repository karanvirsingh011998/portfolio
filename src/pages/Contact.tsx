import { Mail, MapPin, Phone } from 'lucide-react';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { ContactForm } from '../components/ContactForm';
import { Code, Smartphone, Search, Settings } from "lucide-react";

export function Contact() {
  const services = [
    {
      title: "Website Development",
      description: "Modern, high-performance websites built with React, Next.js, and Tailwind CSS.",
      icon: <Code className="w-10 h-10 text-blue-400" />,
    },
    {
      title: "App Development",
      description: "Cross-platform mobile apps with smooth performance and great user experience.",
      icon: <Smartphone className="w-10 h-10 text-blue-400" />,
    },
    // {
    //   title: "SEO & Digital Marketing",
    //   description: "Improve search rankings and drive organic traffic with expert SEO strategies.",
    //   icon: <Search className="w-10 h-10 text-blue-400" />,
    // },
    {
      title: "Custom Web Solutions",
      description: "Tailor-made web solutions to fit unique business needs and workflows.",
      icon: <Settings className="w-10 h-10 text-blue-400" />,
    },
  ];
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-semibold mb-8">Reach Out to Me</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:karanvir011998@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                        karanvir01998@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a href="tel:+918437333427" className="text-gray-400 hover:text-blue-400 transition-colors">
                        +91 8437333427
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <FaLinkedin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">LinkedIn</h3>
                      <a href="https://www.linkedin.com/in/karanvir-singh-a72a61196/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                        linkedin.com/in/karanvir-singh-a72a61196/
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <FaGithub className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">GitHub</h3>
                      <a href="https://github.com/karanvirsingh011998" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                        github.com/karanvirsingh011998
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-gray-400">Chandigarh, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 rounded-xl p-2">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-semibold mb-4">What I Offer</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                  I craft high-performance web solutions to help businesses grow in the digital space.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-gray-800 rounded-xl hover:scale-105 transition-transform">
                      <div className="p-3 bg-blue-500/10 rounded-lg">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        {/* <p className="text-gray-400">{service.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <h2 className="text-2xl font-semibold mb-8">Send a Message</h2> */}
              {/* <ContactForm /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
