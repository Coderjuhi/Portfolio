import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
  FaReact,
  FaJava,
  FaNodeJs
} from "react-icons/fa";
import { MapPin, Dot } from "lucide-react";
import { SiGithub, SiMongodb, SiPostman, SiSelenium } from "react-icons/si";
import ProfileCard from "./ProfileCard";
import FloatingBadge from "./FloatingBadge";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-[52rem] overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-100"
    >
      {/* Blur Background */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300 blur-[150px] opacity-40"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200 blur-[170px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-8 pt-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="inline-flex font-semibold px-2 py-1 rounded-full bg-white/60 backdrop-blur-lg border border-gray-300 text-blue-400 text-sm">
            <Dot /> OPEN TO OPPORTUNITIES
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Juhi Gupta
            </span>
          </h1>

          <div className="text-4xl font-bold text-slate-700 mt-6">

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1500,
                "Full Stack Developer",
                1500,
                "QA Engineer",
                1500,
                "Java Developer",
                1500,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </div>
          <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">
            Passionate BCA graduate specializing in MERN Stack Development,
            Java, and Software Testing. I love creating beautiful,
            responsive, and scalable web applications while ensuring
            software quality through automation and manual testing.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="px-8 py-4 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:scale-105 duration-300">
              View Projects
            </button>

            <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-white shadow-lg hover:scale-105 duration-300">
              <FaDownload />
              Resume
            </button>

            <button className="flex items-center gap-3 px-8 py-4 rounded-full border bg-white hover:bg-blue-500 hover:text-white duration-300">
              <FaEnvelope />
              Contact
            </button>

          </div>

          <div className="flex items-center gap-5 mt-12">

            <a
              href="https://github.com/Coderjuhi"
              target="_blank"
              className="h-14 w-14 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-500 hover:text-white duration-300"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/juhi-gupta-3921593a4"
              target="_blank"
              className="h-14 w-14 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-500 hover:text-white duration-300"
            >
              <FaLinkedin size={22} />
            </a>

            <p className="text-slate-500 flex gap-2">
              <MapPin /> Based in Noida, India
            </p>

          </div>

        </motion.div>

        {/* RIGHT */}

        <div className="relative flex justify-center">
          <FloatingBadge
            text="React"
            icon={FaReact}
            className="top-5 left-5"
            animate={{ x: [0, 15, 0], }}
          />

          <FloatingBadge
            text="Java"
            icon={FaJava}
            className="top-14 right-28"
            animate={{
              x: [0, 0, 0],
              y: [0, 20, 0]
            }}

          />

          <FloatingBadge
            text="Node"
            icon={FaNodeJs}
            className="right-0 top-52"
            animate={{
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}

          />

          <FloatingBadge
            text="MongoDB"
            icon={SiMongodb}
            className="left-0 bottom-40"
            animate={{
              x: [0, 8, 0],
              y: [0, -8, 0],

            }}
          />

          <FloatingBadge
            text="Postman"
            icon={SiPostman}
            className="right-2 bottom-36"
            animate={{
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
          />

          <FloatingBadge
            text="Selenium"
            icon={SiSelenium}
            className="bottom-6 right-24"
            animate={{
              x: [0, 20, 0],
              y: [0, 20, 0]
            }}
          />
          <FloatingBadge
            text="GitHub"
            icon={SiGithub}
            className="top-52 left-20"
            animate={{
              x: [0, 10, 0],
              y: [0, -20, 0],
            }}
          />

          <ProfileCard />

        </div>

      </div>
    </section>


  );
};

export default Home;