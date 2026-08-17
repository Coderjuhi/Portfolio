import { Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Development Journey",
    description: "From Java fundamentals to full-stack MERN applications with authentication, dashboards and REST APIs.",
    icon: Rocket,
  },
  {
    title: "Testing Mindset",
    description: "Structured test scenarios, regression suites, API validation and automation to ensure reliable software.",
    icon: ShieldCheck,
  },
  {
    title: "Future Goals",
    description: "Grow into an SDET-ready engineer by combining strong development skills with automation testing and product engineering.",
    icon: Sparkles,

  },
];


export default function About  () {
  return (
    <>

      <section
        id="about"
        className="relative  overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-100"
      >
        {/* Blur Background */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300 blur-[150px] opacity-40"></div>

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200 blur-[170px] opacity-40"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-30">

          <span className="inline-block px-2 py-1 font-semibold rounded-full bg-white/60 backdrop-blur-lg border border-gray-300 text-blue-500 text-sm tracking-widest shadow">
            ABOUT ME
          </span>
          <h1 className="mt-5 text-4xl  md:text-5xl text-black font-bold max-w-3xl">Building products and proving they work</h1>
          <p className="mt-5  text-gray-400  max-w-3xl">My career objective is to join a team where I can contribute to full-stack development while raising the quality bar through disciplined testing practices.</p>

          <div className=" grid lg:grid-cols-2 max-w-7xl gap-16 mt-14   ">

            {/* left side */}
            <div className="border border-white shadow-lg rounded-2xl p-4 ">
              <h2 className="text-lg font-semibold text-gray-500">
                “I enjoy building scalable web applications and validating software quality through structured testing approaches.
                I continuously improve my technical skills in development and automation testing to deliver reliable, user-focused solutions.”
              </h2>
              <p className="mt-5 text-gray-600  ">
                I'm a BCA graduate with a genuine passion for technology — the kind that starts with curiosity about how an interface is built and ends
                with a test report proving it behaves correctly. I work comfortably across React, Node.js, Express, and MongoDB, and I'm equally at home writing test
                scenarios in Jira, validating endpoints in Postman, or automating flows with Selenium and TestNG.</p>
            </div>


            {/* right side */}
            <div className="flex flex-col gap-6">
              {cards.map((card,index) => {
                const Icon = card.icon;
                return (
                     <motion.div key={index}
                                        initial={{ opacity: 0, y: 70 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1, }}
                 
                    className="bg-white rounded-3xl shadow-xl p-5 flex items-start gap-4  overflow-hidden
              transition-all
              duration-500
              hover:-translate-y-3" >
                    <div
                      className="h-10 w-14 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <Icon size={26} />
                    </div>

                    <div>
                      <h3 className="text-md font-semibold text-gray-800">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-gray-600 text-sm">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>


                );
              })}


            </div>
          </div>
        </div>
      </section >




    </>
  )

}
