import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMail, MdPhone } from "react-icons/md";

export function Footer() {
  return (
    <footer className="bg-gray-900/50 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/karanvirsingh011998"
              className="hover:text-blue-400 transition-colors"
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
              href="mailto:karanvir011998@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <MdMail className="w-8 h-8" />
            </a>
            <a
              href="tel:+918437333427"
              className="hover:text-blue-400 transition-colors"
            >
              <MdPhone className="w-8 h-8" />
            </a>
          </div>

          {/* Contact Information */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              Email:{" "}
              <a
                href="mailto:karanvir011998@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                karanvir011998@gmail.com
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              Phone:{" "}
              <a
                href="tel:+918437333427"
                className="hover:text-blue-400 transition-colors"
              >
                +91 8437333427
              </a>
            </p>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Karanvir Singh | Built with ❤️.
          </p>
        </div>
      </div>
    </footer>
  );
}
