import React from "react";
import Header from "./component/Header";
import { Rocket, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { GraduationCap, School } from "lucide-react";




const App = () => {
  return (
    <>
      {/* Navbar */}
      <Header />

      {/* Main Container */}
      <main className="flex flex-col items-center pt-28 space-y-12 px-6">
        {/* Home */}

        <section
          id="home"
          className="bg-white border border-gray-300 rounded-2xl shadow-lg w-full min-h-[70vh] p-4 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center gap-3 md:w-1/2 md:pl-8 md:translate-x-4 transition-all duration-700 ease-out hover:translate-x-1">
            <h1 className="text-5xl font-bold text-blue-400 flex items-center gap-3">
              Hi, I'm Juhi Gupta
              <Rocket size={40} className="text-blue-400" />
            </h1>
            <p className="text-gray-900 text-lg">Web Developer</p>
            <p className="text-gray-600 text-lg">
              I create beautiful and functional websites using modern technologies.
              Welcome to my portfolio where you can see my work and learn more about me.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="mailto:youremail@gmail.com"
                className="text-red-500 hover:text-red-600 transition-colors"
              >
                <Mail size={32} />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              {/* View My Work */}
              <button
                onClick={() => {
                  const projectSection = document.querySelector("#projects");
                  if (projectSection) {
                    projectSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
              >
                View My Work
              </button>

              {/* Download Resume */}
              <a
                href="/Resume_juhi_update.pdf.pdf"
                download
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src="/illustration-15.webp"
              alt="Juhi Gupta"
              className=" w-120 h-100 object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>
        </section>






        {/* About */}
        <section
          id="about"
          className="bg-white border border-gray-300 rounded-2xl shadow-lg w-full min-h-[70vh] p-6 flex flex-col-reverse md:flex-row 
          items-center justify-center gap-6 transition-transform duration-500 ease-out hover:-translate-y-1"
        >
          {/* Left Image */}
          <div className="md:w-1/2 flex justify-center md:justify-center">
            <img
              src="/juhi.jpeg"
              alt="Juhi Gupta"
              className="rounded-full w-72 h-72 object-cover shadow-lg transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex flex-col items-start justify-center gap-5 md:pl-6">
            <h1 className="text-5xl font-bold text-blue-400">About Me</h1>
            <p className="text-gray-600 text-xl leading-relaxed">
              A highly motivated BCA student at <span className="text-orange-400">United Institute of Management</span> with a strong interest in software development and data analysis, seeking an opportunity where I can continuously learn, enhance my skills, and contribute to the growth of the organization while expanding my knowledge and experience.
              Eager to contribute to real-world projects, enhance technical skills, and grow in a dynamic, team-oriented environment.
            </p>
          </div>
        </section>











        {/* Experience */}

        <section
          id="education"
          className="bg-white rounded-2xl shadow-lg w-full py-12 flex flex-col items-center"
        >
          <h1 className="text-4xl font-bold text-blue-400 mb-12">My Education</h1>

          <div className="relative w-full max-w-3xl">

            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

            {/* College */}
            <div className="mb-12 flex justify-start w-full">
              <div className="w-1/2 pr-8 flex flex-col items-end">
                <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full hover:scale-105 transition">
                  <h2 className="text-xl font-semibold text-purple-500">BCA College</h2>
                  <p className="text-gray-600 mt-2">
                    Currently pursuing Bachelor of Computer Applications at
                    <span className="text-orange-400"> United Institute of Management</span>.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500 text-white rounded-full border-4 border-white shadow-md absolute left-[-24px] top-2">
                  <GraduationCap size={24} />
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>

            {/* 12th */}
            <div className="mb-12 flex justify-end w-full">
              <div className="w-1/2"></div>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full border-4 border-white shadow-md absolute left-[-24px] top-2">
                  <School size={24} />
                </div>
              </div>
              <div className="w-1/2 pl-8 flex flex-col items-start">
                <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full hover:scale-105 transition">
                  <h2 className="text-xl font-semibold text-green-500">12th Grade</h2>
                  <p className="text-gray-600 mt-2">
                    Completed at KNBSS. Specialized in Math Science.
                  </p>
                </div>
              </div>
            </div>

            {/* 10th */}
            <div className="mb-12 flex justify-start w-full">
              <div className="w-1/2 pr-8 flex flex-col items-end">
                <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full hover:scale-105 transition">
                  <h2 className="text-xl font-semibold text-blue-500">10th Grade</h2>
                  <p className="text-gray-600 mt-2">
                    Completed at KNBSS. Focused on Science & Mathematics.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full border-4 border-white shadow-md absolute left-[-24px] top-2">
                  <School size={24} />
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>

          </div>
        </section>

        {/* project */}

        <section
          id="projects"
          className="bg-white rounded-2xl shadow-lg w-full min-h-[70vh] p-8 flex flex-col items-center gap-8"
        >
          <h1 className="text-4xl font-bold text-blue-400 mb-12">Projects</h1>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Project 1 */}
            <div className="bg-white rounded-lg p-4 shadow-md w-80 flex flex-col items-center gap-4">
              <img
                src="https://imgeng.jagran.com/images/2024/feb/blood-transfuson1707986471096.jpg"
                alt="LifeLink"
                className="rounded"
              />
              <h2 className="text-2xl font-bold">LifeLink</h2>
              <p className="text-gray-700 text-center">
                LifeLink is a digital platform connecting blood and organ donors, hospitals, and patients in need.
              </p>

              {/* Languages/Technologies */}
              <div className="flex gap-2 flex-wrap justify-center">
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">ReactJs</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">TailWind</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">NodeJs</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">ExpressJs</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/your-username/project1"
                  target="_blank"
                  className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2
                     hover:bg-blue-600 hover:scale-105 transition duration-300"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href="https://yourwebsite.com/project1"
                  target="_blank"
                  className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2
                     hover:bg-green-600 hover:scale-105 transition duration-300"
                >
                  Live <LuSquareArrowOutUpRight />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg p-4 shadow-md w-80 flex flex-col items-center gap-4">
              <img
                src="https://th.bing.com/th/id/OIP.5Pjiju-GPg7RPjYc8Vtc6gHaDt?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="BeautyGlow"
                className="rounded"
              />
              <h2 className="text-2xl font-bold">BeautyGlow</h2>
              <p className="text-gray-700 text-center">
                BeautyGlow is a modern skincare platform helping users discover and shop beauty products tailored to their skin type.
              </p>

              {/* Languages/Technologies */}
              <div className="flex gap-2 flex-wrap justify-center">
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">HTML</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">CSS</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>

              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Coderjuhi/beautyglow/tree/main/website"
                  target="_blank"
                  className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2
                     hover:bg-blue-600 hover:scale-105 transition duration-300"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href="https://yourwebsite.com/project2"
                  target="_blank"
                  className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2
                     hover:bg-green-600 hover:scale-105 transition duration-300"
                >
                  Live <LuSquareArrowOutUpRight />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg p-4 shadow-md w-80 flex flex-col items-center gap-4">
              <img
                src="https://s3-alpha.figma.com/hub/file/936981378/40fd9ce4-a7a2-468d-b87c-1dabb77298e2-cover.png"
                alt="Project 3"
                className="rounded"
              />
              <h2 className="text-2xl font-bold">Netflix Clone</h2>
              <p className="text-gray-700 text-center">
                A Netflix-inspired frontend interface showcasing movies and TV shows with responsive design and interactive UI elements.      </p>

              {/* Languages/Technologies */}
              <div className="flex gap-2 flex-wrap justify-center">
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">HTML</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">CSS</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Coderjuhi/Netflix"
                  target="_blank"
                  className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2
                     hover:bg-blue-600 hover:scale-105 transition duration-300"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href="https://coderjuhi.github.io/Netflix/"
                  target="_blank"
                  className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2
                     hover:bg-green-600 hover:scale-105 transition duration-300"
                >
                  Live <LuSquareArrowOutUpRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* skills */}
        <section
          id="skills"
          className="bg-white rounded-2xl shadow-lg w-full min-h-[50vh] py-12 flex flex-col items-center"
        >
          <h1 className="text-4xl font-bold text-blue-400 mb-12">Skills</h1>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6">
            {/* C */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition duration-300">
              <img src="https://toppng.com/uploads/preview/c-programming-icon-c-programming-language-logo-11562945679duaxtn3yq0.png" alt="C" className="w-12 h-12" />
              <p className="mt-3 text-lg font-semibold text-gray-700">C</p>
            </div>

            {/* Java */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-12 h-12" />
              <p className="mt-3 text-lg font-semibold text-gray-700">Java</p>
            </div>

            {/* HTML */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-12 h-12" />
              <p className="mt-3 text-lg font-semibold text-gray-700">HTML</p>
            </div>

            {/* CSS */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-12 h-12" />
              <p className="mt-3 text-lg font-semibold text-gray-700">CSS</p>
            </div>

            {/* JavaScript */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
              <p className="mt-3 text-lg font-semibold text-gray-700">JavaScript</p>
            </div>

            {/* React */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
              <p className="mt-3 text-lg font-semibold text-gray-700">React</p>
            </div>

            {/* TailwindCSS */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition duration-300">
              <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="TailwindCSS" className="w-12 h-12" />
              <p className="mt-3 text-lg font-semibold text-gray-700">TailwindCSS</p>
            </div>

            {/* GitHub */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition duration-300">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-12 h-12"
              />
              <p className="mt-3 text-lg font-semibold text-gray-700">GitHub</p>
            </div>




          </div>
        </section>



        {/* Contact */}
        <section
          id="contact"
          className="bg-gray-500 rounded-2xl shadow-lg w-full min-h-[70vh] py-12 px-6 flex flex-col items-center"
        >
          <h1 className="text-4xl font-bold text-blue-400 mb-10">Contact Me</h1>

          <div className="w-full max-w-3xl grid md:grid-cols-2 gap-10">
            {/* Left Side - Contact Info */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400 w-8 h-8" />
                <a
                  href="mailto:juhigupta@gmail.com"
                  className="text-lg text-white hover:text-blue-500 transition"
                >
                  juhigupta@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaLinkedin size={32} className="text-blue-400 w-8 h-8" />
                <a
                  href="https://linkedin.com/in/juhigupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white hover:text-blue-500 transition"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaGithub size={32} className="text-blue-400 w-8 h-8" />

                <a
                  href="https://github.com/juhigupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white hover:text-blue-500 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-lg p-3 bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-lg p-3 bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="border rounded-lg p-3 bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-400 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition"
              >
                Send Message
              </button>
            </form>

          </div>
        </section>



      </main>
    </>
  );
};

export default App;
