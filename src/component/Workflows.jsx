import {
  Lightbulb,
  PenTool,
  Code2,
  Database,
  TestTube,
  Rocket
} from "lucide-react";

const workflowSteps = [
  {
    id: "01",
    title: "Idea",
    description: "Requirement gathering and scoping",
    icon: Lightbulb,
  },
  {
    id: "02",
    title: "Design",
    description: "Wireframes, UI system, user flows",
    icon: PenTool,
  },
  {
    id: "03",
    title: "Development",
    description: "React + Node feature implementation",
    icon: Code2,
  },
  {
    id: "04",
    title: "API",
    description: "REST endpoints, JWT, data contracts",
    icon: Database,
  },
  {
    id: "05",
    title: "Testing",
    description: "Functional, regression, API, UI testing",
    icon: TestTube,
  },
  {
    id: "06",
    title: "Deployment",
    description: "Build, release, monitor, iterate",
    icon: Rocket,
  },
];
export default function Workflows() {
    return(
        <>
              <section
                id="education"
                className="relative min-h-[55rem] overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-100"
            >
                {/* Blur Background */}
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300 blur-[150px] opacity-40"></div>

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200 blur-[170px] opacity-40"></div>

                <div className="max-w-7xl mx-auto px-8 pt-20 items-center">

                    <span className="inline-block px-2 py-1 font-semibold rounded-full bg-white/60 backdrop-blur-lg border border-gray-300 text-blue-500 text-sm tracking-widest shadow">
                        Workflow
                    </span>
                    <h1 className="mt-5 text-5xl text-black font-bold max-w-2xl">How a feature travels from idea to production</h1>
                    <p className="mt-5  text-gray-400  max-w-xl">Testing isn't the last step bolted on — it runs alongside development at every stage.</p>

                       <div className="grid md:grid-cols-3 gap-6 mt-4">

          {workflowSteps.map((step) => {

            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="
                  relative
                  bg-white/70
                  backdrop-blur-xl
                  rounded-3xl
                  p-8
                  border
                  border-white
                  shadow-lg
                   hover:shadow-xl
    hover:-translate-y-1
    transition-all
    duration-500
                "
              >

                {/* Number */}

                <div 
                className="absolute top-6 right-6 text-5xl font-bold text-gray-100">
                  {step.id}
                </div>

                {/* Icon */}

                <div className="
                  w-12 h-12
                  rounded-full
                  bg-cyan-100
                  flex
                  items-center
                  justify-center
                  mb-6
                   transition-all
      duration-300
      ease-in-out

      group-hover:bg-blue-500
                ">
                  <Icon size={20} className="      text-gray-700
        transition-all
        duration-700
        ease-in-out
        group-hover:text-white" />
                </div>

                {/* Title */}

                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="text-gray-500">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>
         </div>
         </section>
        </>
    )
}