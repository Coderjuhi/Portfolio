import {
    CheckCircle,
    Code2,
    Database,
    Wrench,
    Monitor,
    Server,
    Bug,
    BookOpen,
} from "lucide-react";
const skillCards = [
    {
        id: 1,
        title: "Programming",
        icon: Code2,
        skills: ["Java", "SQL"],
    },
    {
        id: 2,
        title: "Frontend",
        icon: Monitor,
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
        id: 3,
        title: "Backend",
        icon: Server,
        skills: ["Node.js", "Express.js"],
    },
    {
        id: 4,
        title: "Database",
        icon: Database,
        skills: ["MongoDB", "MySQL"],
    },
    {
        id: 5,
        title: "Testing",
        icon: Bug,
        skills: ["Selenium", "Postman", "JMeter", "Jira", "TestNG"],
    },
    {
        id: 6,
        title: "Tools",
        icon: Wrench,
        skills: ["Git", "GitHub", "VS Code"],
    },
];
const testingExpertise = [
  "Functional Testing",
  "Integration Testing",
  "API Testing",
  "Test Case Execution",
  "Regression Testing",
  "UI Testing",
  "Test Scenario Design",
];

const softSkills = [
  "Oracle ERP Fundamentals",
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Quick Learning",
];

import SkillCard from './SkillCard'
export default function Skills() {

    return (
        <>
            <section
                id="skills"
                className="relative min-h-[70rem] overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-100"
            >
                {/* Blur Background */}
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300 blur-[150px] opacity-40"></div>

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200 blur-[170px] opacity-40"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">

                    <span className="inline-block px-2 py-1 font-semibold rounded-full bg-white/60 backdrop-blur-lg border border-gray-300 text-blue-500 text-sm tracking-widest shadow">
                        Skills                                                      
                    </span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                    <h1 className="mt-5 text-4xl  md:text-5xl text-black font-bold max-w-2xl">Development and quality, side by side</h1>
                    <p className="mt-5  text-gray-400  max-w-2xl">A toolkit that spans the full MERN stack plus the manual and automation testing stack used to validate it.</p>

                    {/* Top Cards */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
                        {skillCards.map((card) => (
                            <SkillCard
                                key={card.id}
                                title={card.title}
                                percentage={card.percentage}
                                skills={card.skills}
                                icon={card.icon}
                            />
                        ))}
                    </div>
                    {/* Bottom Cards */}
                    <div className="mt-10 grid gap-8 lg:grid-cols-3">
                        {/* Testing Expertise */}
                        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 shadow-lg lg:col-span-2">
                            <div className="mb-6 flex items-center gap-2">
                                <BookOpen className="text-blue-600" />
                                <h2 className="text-xl font-semibold">
                                    Testing Expertise
                                </h2>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                {testingExpertise.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle
                                            size={16}
                                            className="text-blue-600"
                                        />

                                        <span className="text-gray-700 ">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 shadow-lg">
                            <div className="mb-6 flex items-center gap-2">
                                <Database className="text-blue-600" />

                                <h2 className="text-xl font-semibold">
                                    ERP & Soft Skills
                                </h2>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {softSkills.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}