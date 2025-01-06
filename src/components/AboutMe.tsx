import profilePic from "../assets/images/profilePic.webp";
import Heading from "./Heading";

export function AboutMe() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <Heading title="About Me" />
          <p className="text-xl text-gray-300 mb-6 animate__animated animate__fadeIn animate__delay-2s">
            I'm Karanvir Singh, a passionate software engineer with 2.8 years of
            experience in building scalable web applications and innovative
            solutions.
          </p>

          <div className="w-full md:w-2/3 mx-auto space-y-6">
            <p className="text-lg text-gray-400 animate__animated animate__fadeIn animate__delay-3s">
              With a strong foundation in front-end development, I specialize in
              React.js and Next.js, creating seamless and efficient user
              experiences. I am always eager to learn new technologies and
              strive to stay at the forefront of industry trends.
            </p>

            <p className="text-lg text-gray-400 animate__animated animate__fadeIn animate__delay-4s">
              When I'm not coding, I enjoy working on personal projects,
              exploring new frameworks, and learning about the latest
              advancements in web development. I believe in building
              applications that not only work well but also create a delightful
              user experience.
            </p>
          </div>
        </div>

        {/* Animation Effect for Image */}
        <div className="flex justify-center mt-12">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg transform hover:scale-110 transition duration-300">
            <img
              src={profilePic}
              alt="Karanvir Singh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
