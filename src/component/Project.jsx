import { useState } from "react";


export default function Project() {
    const projects = [
        {
            id: 1,
            title: "LifeLink",
            category: "Development",
            description: "Blood & Organ Donation Management Platform",
            image: "/LifeLink.png",
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT",
                "Postman",
            ],
            features: [
                "Secure role-based authentication",
                "Donor, recipient, and hospital dashboards",
                "Location-based donor matching",
                "Protected REST APIs with JWT authentication",
                "API testing with Postman",
                "Functional and integration testing",
                "End-to-end workflow validation",
            ],
            stats: [
                { number: "3", label: "Dashboards" },
                { number: "10+", label: "REST APIs" },
                { number: "15+", label: "Test Cases" },
            ],
            liveDemo: "#",
            github: "#",
        },
        {
            id: 2,
            title: "SkillForge",
            category: "Development",
            description: "Career Growth Platform",
            image: "/SkillForge.png",
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT",
            ],
            features: [
                "Personalized learning roadmaps",
                "User authentication",
                "Career recommendations",
                "Progress tracking",
                "Responsive user interface",
            ],
            stats: [
                { number: "5+", label: "Modules" },
                { number: "10+", label: "Features" },
                { number: "5+", label: "Test Cases" },
            ],
            liveDemo: "#",
            github: "#",
        },
        {
            id: 3,
            title: "Personal Portfolio Website",
            category: "Testing",
            description: "Modern glassmorphic personal site",
            image: "/Portfolio.png",
            technologies: [
               "Recact",
               "TailwindCSS",
               "FramerMotion"
            ],
            features: [
                "Responsive UI with reusable components",
                "Modern glassmorphism design",
                "Smooth animations",
                "UI testing",
                "Cross-device responsiveness check",
            ],
            stats: [
                { number: "6+", label: "Sections" },
             
            ],
            liveDemo: "#",
            github: "#",
        },
        {
            id: 4,
            title: "Login & Signup Testing",
            category: "Testing",
            description: "Functional and Regression Testing",
            image: "/Login-Signup.png",
            technologies: [
                "Manual Testing",
                "Test Cases",
                "Jira",
                "Regression",
                "Smoke Testing",
            ],
            features: [
                "Positive and negative test scenarios",
                "Boundary value testing",
                "Validation testing",
                "Error message verification",
                "Regression testing",
                "Bug reporting and verification",
            ],
            stats: [
                { number: "15+", label: "Test Cases" },
                { number: "5+", label: "Scenarios" },
                { number: "10+", label: "Bugs" },
            ],
            liveDemo: "#",
            github: "#",
        }, 
    ];

    const [activeFilter, setActiveFilter] = useState("All")
    const filteredProjects =
        activeFilter == "All"
            ? projects
            : projects.filter(
                (project) => project.category === activeFilter
            );

    const filters = ["All", "Development", "Testing"];
    return (
        <>
            <section
                id="projects"
                className="relative min-h-[55rem] overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-100"
            >
                {/* Blur Background */}
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300 blur-[150px] opacity-40"></div>

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200 blur-[170px] opacity-40"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">

                    <span className="inline-block px-2 py-1 font-semibold rounded-full bg-white/60 backdrop-blur-lg border border-gray-300 text-blue-500 text-sm tracking-[0.2em] shadow">
                        Featured Projects
                    </span>
                    <h1 className="mt-5 text-4xl  md:text-5xl text-black font-bold max-w-2xl">Applications built, tested, and validated</h1>
                    <p className="mt-5  text-gray-400  max-w-xl">Every project below was developed end-to-end and verified with functional, API, and regression testing.</p>
                    {/* FILTER BUTTONS */}
                    <div className="mt-8 flex gap-3 mb-10">

                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`
            px-6 py-2 rounded-full border  text-sm
                                font-medium
                                transition-all
                                duration-300
            ${activeFilter === filter
                                        ? "bg-blue-500 text-white border-blue-500"
                                        : "bg-white text-gray-500 border-gray-200"
                                    }
        `}
                            >
                                {filter}
                            </button>
                        ))}

                    </div>

                    {/* //projects */}
                    <div className="space-y-8">

                        {filteredProjects.map((project) => (

                            <div className=" bg-white rounded-3xl border  border-gray-100  shadow-sm  overflow-hidden  hover:shadow-lg  transition-all  duration-300 p-6  md:p-7">
                                <div className="grid md:grid-cols-2 gap-8 items-center ">
                                    <div className="rounded-2xl overflow-hidden ">
                                        <img src={project.image} alt={project.title} className=" w-full h-[300px] object-cover hover:scale-105    transition-transform    duration-500  "
                                        />                                </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">

                                            <h3 className="text-2xl font-bold text-gray-900">
                                                {project.title}
                                            </h3>

                                            {/* CATEGORY BADGE */}

                                            <span
                                                className={` px-3 py-1 rounded-full text-xs font-medium
                                                 ${project.category === "Development" ? "bg-cyan-100 text-cyan-700" : "bg-purple-100 text-purple-700"} `}
                                            >
                                                {project.category}
                                            </span>

                                        </div>

                                        <p className="text-gray-500 mb-5">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-5">

                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="
                          px-3
                          py-1.5
                          rounded-full
                          border
                          border-gray-200
                          text-xs
                          text-gray-600
                          bg-white
                        "
                                                >
                                                    {tech}
                                                </span>
                                            ))}

                                        </div>

                                        {/* FEATURES */}

                                        <ul className="space-y-2 mb-6">

                                            {project.features.map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex items-start gap-2 text-sm text-gray-600"
                                                >
                                                    <span className="text-blue-500 mt-1">
                                                        •
                                                    </span>

                                                    <span>{feature}</span>
                                                </li>
                                            ))}

                                        </ul>

                                        {/* STATS */}

                                        <div className="grid grid-cols-3 gap-3 mb-6">

                                            {project.stats.map((stat) => (

                                                <div
                                                    key={stat.label}
                                                    className=" border
                          border-gray-200
                          rounded-2xl
                          px-3
                          py-4
                          text-center
                        "
                                                >

                                                    <div className="text-xl font-bold text-blue-500">
                                                        {stat.number}
                                                    </div>

                                                    <div className="text-xs text-gray-500 mt-1">
                                                        {stat.label}
                                                    </div>

                                                </div>

                                            ))}

                                        </div>

                                        {/* BUTTONS */}

                                        <div className="flex gap-3">

                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                        px-5
                        py-2.5
                        rounded-full
                        bg-blue-500
                        text-white
                        text-sm
                        font-medium
                        hover:bg-blue-600
                        transition
                      "
                                            >
                                                ↗ Live Demo
                                            </a>

                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                        px-5
                        py-2.5
                        rounded-full
                        border
                        border-gray-200
                        text-gray-700
                        text-sm
                        font-medium
                        hover:border-gray-400
                        transition
                      "
                                            >
                                                GitHub
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* NO PROJECTS MESSAGE */}

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            No projects found.
                        </div>
                    )}
                </div>

            </section >
        </>
    )
}
