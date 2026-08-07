import {
    Monitor,
    Bug,
    Layers,
    
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "MERN Stack Development",
        description: "Develop scalable full-stack applications using React, Node.js, Express, and MongoDB",
        Icon: Layers
    },
    {
               title: " Frontend Development",
        description: "Build responsive, modern, and accessible user interfaces with React and Tailwind CSS.",
        Icon:Monitor

    },
    {
   
               title: " Software Testing",
        description: "Perform Manual and Automation Testing, API validation, UI testing, regression testing, and quality assurance.",
        Icon: Bug

    },
]

export default function Services() {

    return (
        <>
            <section
                id="education"
                className="relative min-h-[45rem] overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-100"
            >
                {/* Blur Background */}
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300 blur-[150px] opacity-40"></div>

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200 blur-[170px] opacity-40"></div>

                <div className="max-w-7xl mx-auto px-8 pt-20 items-center">

                    <span className="inline-block px-2 py-1 font-semibold rounded-full bg-white/60 backdrop-blur-lg border border-gray-300 text-blue-500 text-sm tracking-widest shadow">
                        Services
                    </span>
                    <h1 className="mt-5 text-5xl text-black font-bold max-w-2xl">What I can do for your team</h1>
                    <p className="mt-5  text-gray-400  max-w-xl">Three ways I contribute from day one — shipping features, crafting interfaces, and guarding quality.</p>

                    <div className="grid lg:grid-cols-3 gap-8 mt-6">
                        {services.map(( {title, description,Icon},index) => {
                            
                            return(
                          <motion.div
    key={index}
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.15,
    }}
    whileHover={{
      y: -10,
      scale: 1.03,
    }}
                             className=" group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-100 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl border border-slate-100">
                                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-blue-100 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                                <div className=" mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 " >            
                                                            <Icon/>
                                </div>
                                <div >
                                    <h3 className="mb-3 text-xl font-semibold text-slate-900">{title}</h3>
                                        <p className="text-sm text-slate-600">

                                        {description}</p>
                                </div>
                            </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}