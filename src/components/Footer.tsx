import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export function Footer() {
  return (
    <footer className="bg-gray-900/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-6">
          <a
                href="https://github.com/karanvirsingh011998"
                className="hover:text-blue-400 transition-color"
              >
                <FaGithub className='w-8 h-8' />
              </a>

            <a href="https://www.linkedin.com/in/karanvir-singh-a72a61196/" className="hover:text-blue-400 transition-colors">
              <FaLinkedin className="w-8 h-8"/>
            </a>
            <a href="mailto:karanvir011998@gmail.com" className="hover:text-blue-400 transition-colors">
              <MdMail className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Karanvir Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}